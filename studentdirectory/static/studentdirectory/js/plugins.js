// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(function(){

    $("#toolbar").kendoToolBar({
        items: [
            { type: "button", text: "Refresh", icon:"refresh" },
            { type: "separator" },
            { template: "<label for='dropdown'>Search:</label>" },
            {
                template: "<input id='dropdown' style='width: 150px;' />",
                overflow: "never"
            },
            { type: "separator" },
            {
                type: "buttonGroup",
                buttons: [
                    { icon: "align-left", text: "Left", togglable: true, group: "text-align" },
                    { icon: "align-center", text: "Center", togglable: true, group: "text-align" },
                    { icon: "align-right", text: "Right", togglable: true, group: "text-align" }
                ]
            },
            {
                type: "buttonGroup",
                buttons: [
                    { icon: "bold", text: "Bold", togglable: true },
                    { icon: "italic", text: "Italic", togglable: true },
                    { icon: "underline", text: "Underline", togglable: true }
                ]
            },
            {
                type: "button",
                text: "Action",
                overflow: "always"
            },
            {
                type: "button",
                text: "Another Action",
                overflow: "always"
            },
            {
                type: "button",
                text: "Something else here",
                overflow: "always"
            }
        ]
    });

});