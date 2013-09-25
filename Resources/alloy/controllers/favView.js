function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "favView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        id: "__alloyId0"
    });
    $.__views.favTab = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        id: "favTab",
        icon: "/images/btn_fav_normal.png"
    });
    $.__views.favTab && $.addTopLevelView($.__views.favTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;