function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "searchView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId9 = Ti.UI.createWindow({
        id: "__alloyId9"
    });
    $.__views.searchTab = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        id: "searchTab",
        icon: "/images/btn_search_normal.png"
    });
    $.__views.searchTab && $.addTopLevelView($.__views.searchTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;