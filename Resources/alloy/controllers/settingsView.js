function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settingsView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId10 = Ti.UI.createWindow({
        id: "__alloyId10"
    });
    $.__views.settingsTab = Ti.UI.createTab({
        window: $.__views.__alloyId10,
        id: "settingsTab",
        icon: "/images/btn_setting_normal.png"
    });
    $.__views.settingsTab && $.addTopLevelView($.__views.settingsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;