using Toybox.WatchUi;
using Toybox.Graphics;
using Toybox.Attention;

class BarcodeView extends WatchUi.View {

    hidden var mStore;

    function initialize(store) {
        View.initialize();
        mStore = store;
    }

    function onShow() {
        // Keep the backlight on while the user shows the barcode to the till.
        if (Attention has :backlight) {
            Attention.backlight(true);
        }
    }

    function onHide() {
        if (Attention has :backlight) {
            Attention.backlight(false);
        }
    }

    function onUpdate(dc) {
        var w = dc.getWidth();
        var h = dc.getHeight();

        // White background — scanners want maximum contrast against black bars.
        dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
        dc.clear();

        var format = mStore[:format];
        if (format.equals("CODE128")) {
            drawCode128(dc, w, h);
        } else {
            drawUnsupported(dc, w, h);
        }
    }

    hidden function drawCode128(dc, w, h) {
        var barStr = mStore[:bars];
        var n = barStr.length();
        if (n == 0) {
            drawUnsupported(dc, w, h);
            return;
        }
        var bars = barStr.toCharArray();
        var ONE = '1';

        // Layout: store name on top, barcode in the middle, raw code below.
        var nameFont = Graphics.FONT_SMALL;
        var codeFont = Graphics.FONT_XTINY;
        var topPad   = 28;
        var botPad   = 28;

        dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
        dc.drawText(w / 2, 6, nameFont, mStore[:name], Graphics.TEXT_JUSTIFY_CENTER);
        dc.drawText(w / 2, h - 22, codeFont, mStore[:code], Graphics.TEXT_JUSTIFY_CENTER);

        // Compute integer module width that fits with a 10-module quiet zone
        // on each side. Round down so we never overflow the screen.
        var sidePad    = 10;
        var available  = w - 2 * sidePad;
        var moduleW    = available / n;
        if (moduleW < 1) { moduleW = 1; }

        var barWidth   = n * moduleW;
        var startX     = (w - barWidth) / 2;
        var barTop     = topPad;
        var barHeight  = h - topPad - botPad;
        if (barHeight < 40) { barHeight = 40; }

        // Walk the bar string, drawing only contiguous runs of 1s as filled
        // rectangles. This keeps draw-call count low.
        dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
        var i = 0;
        while (i < n) {
            if (bars[i] == ONE) {
                var run = 1;
                while (i + run < n && bars[i + run] == ONE) {
                    run += 1;
                }
                dc.fillRectangle(startX + i * moduleW, barTop, run * moduleW, barHeight);
                i += run;
            } else {
                i += 1;
            }
        }
    }

    hidden function drawUnsupported(dc, w, h) {
        dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
        dc.drawText(w / 2, 20, Graphics.FONT_SMALL, mStore[:name], Graphics.TEXT_JUSTIFY_CENTER);
        var msg = WatchUi.loadResource(Rez.Strings.QrUnsupported);
        dc.drawText(
            w / 2, h / 2 - 30,
            Graphics.FONT_XTINY, msg,
            Graphics.TEXT_JUSTIFY_CENTER | Graphics.TEXT_JUSTIFY_VCENTER
        );
        dc.drawText(w / 2, h - 22, Graphics.FONT_XTINY, mStore[:code], Graphics.TEXT_JUSTIFY_CENTER);
    }
}

class BarcodeDelegate extends WatchUi.BehaviorDelegate {

    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onBack() {
        WatchUi.popView(WatchUi.SLIDE_RIGHT);
        return true;
    }
}
