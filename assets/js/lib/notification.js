/**
 * Display a notification.
 * Based on the Growl plugin: http://bootstrap-growl.remabledesigns.com/
 * TODO Manage default options depending on the type of the message (location, size, etc.) then merge with wanted options.
 *
 * @param text
 * @param options
 * @param time_out
 */
function notification(text, options, time_out) {
    if (options === void 0) { options = {}; }
    if (time_out === void 0) { time_out = 0; }
    /**
     * Default options we want to use.
     */
    var defaultOptions = {
        type: 'info',
        allow_dismiss: true,
        placement: {
            from: 'bottom',
            align: 'right'
        },
        offset: 20,
        spacing: 10,
        z_index: 5000,
        delay: 5000,
        mouse_over: 'pause',
        template: '<div data-growl="container" class="alert growl" role="alert">' + '<button type="button" class="close" data-growl="dismiss">' + '<span aria-hidden="true">×</span>' + '<span class="sr-only">Close</span>' + '</button>' + '<span class="title" data-growl="title"></span>' + '<span class="message" data-growl="message"></span>' + '<a href="#" data-growl="url"></a>' + '</div>'
    };
    // Auto-correct the 'error' type into 'danger' to simplify the use.
    if (options.type == 'error') {
        options.type = 'danger';
    }
    /**
     * Override default options so that if they are not specifically set they will be applied when the message is an error.
     */
    if (options.type == 'danger') {
        // Increase the time the message is displayed when it's an error.
        defaultOptions.delay = 10000;
        // Display errors at the top instead of the bottom.
        defaultOptions.placement.from = 'top';
        // Forbid to close error messages.
        defaultOptions.allow_dismiss = false;
    }
    // Merge both objects, priority to options.
    options = _.merge(defaultOptions, options);
    if (text) {
        setTimeout(function () {
            // Set a max width if the text is too big.
            //            if(options.width == 'auto' && text.length > 10){
            //                options.width = 400;
            //            }
            // Add a unsecable space before the cross if the width is auto otherwise it's too close.
            if (options.allow_dismiss && options.width == 'auto') {
                text += '&nbsp;';
            }
            if (options.type == 'success') {
                var img_html = '<i class="fa fa-check-circle icon"></i>';
            }
            else if (options.type == 'info') {
                var img_html = '<i class="fa fa-info-circle icon"></i>';
            }
            else {
                var img_html = '<i class="fa fa-exclamation-triangle icon"></i>';
            }
            var html = img_html + '&nbsp;' + text + '&nbsp;';
            $['growl'](html, options);
        }, time_out); // If timeOut is equal to 0, the call will be instantaneous.
    }
    else {
        consoleDev('A notification requires a text to display.');
    }
}
