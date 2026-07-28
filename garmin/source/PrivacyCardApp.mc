using Toybox.Application;
using Toybox.WatchUi;

class PrivacyCardApp extends Application.AppBase {

    function initialize() {
        AppBase.initialize();
    }

    function getInitialView() {
        return [ new StoreListView(), new StoreListDelegate() ];
    }
}
