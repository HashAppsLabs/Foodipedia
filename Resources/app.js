var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var index = Alloy.createController("index");
if (typeof exports !== "undefined") {
  exports.close = function () {
    index.getView().close();
  };
}