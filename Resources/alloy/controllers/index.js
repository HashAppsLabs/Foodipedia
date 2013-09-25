function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundImage: "/images/background.png",
        navBarHidden: false,
        id: "index"
    });
    $.__views.__alloyId3 = Alloy.createController("homeView", {
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("favView", {
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId5 = Alloy.createController("searchView", {
        id: "__alloyId5"
    });
    $.__views.index.addTab($.__views.__alloyId5.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId6 = Alloy.createController("listView", {
        id: "__alloyId6"
    });
    $.__views.index.addTab($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId7 = Alloy.createController("settingsView", {
        id: "__alloyId7"
    });
    $.__views.index.addTab($.__views.__alloyId7.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;