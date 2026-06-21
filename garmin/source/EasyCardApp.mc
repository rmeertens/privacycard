using Toybox.Application;
using Toybox.WatchUi;

class EasyCardApp extends Application.AppBase {

    function initialize() {
        AppBase.initialize();
    }

    function getInitialView() {
        return [ new StoreListView(), new StoreListDelegate() ];
    }
}
