module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ff0000"
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white",
        backgroundImage: "/images/background.png",
        navBarHidden: false
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "container",
    style: {}
} ];