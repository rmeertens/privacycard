using Toybox.WatchUi;

class StoreListView extends WatchUi.Menu2 {

    function initialize() {
        Menu2.initialize({ :title => WatchUi.loadResource(Rez.Strings.MenuTitle) });

        var stores = Stores.all();
        for (var i = 0; i < stores.size(); i++) {
            var s = stores[i];
            Menu2.addItem(new WatchUi.MenuItem(
                s[:name],
                s[:program] + "  " + s[:country],
                i,                  // payload: index into Stores.all()
                {}
            ));
        }
    }
}

class StoreListDelegate extends WatchUi.Menu2InputDelegate {

    function initialize() {
        Menu2InputDelegate.initialize();
    }

    function onSelect(item) {
        var idx = item.getId();
        var store = Stores.all()[idx];
        WatchUi.pushView(new BarcodeView(store), new BarcodeDelegate(), WatchUi.SLIDE_LEFT);
    }
}
