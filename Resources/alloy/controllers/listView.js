function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId8 = Ti.UI.createWindow({
        id: "__alloyId8"
    });
    $.__views.listTab = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        id: "listTab",
        icon: "/images/btn_list_normal.png"
    });
    $.__views.listTab && $.addTopLevelView($.__views.listTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;