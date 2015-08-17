/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). */
(function (factory) {
    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["../jquery.ui.datepicker"], factory);
    } else {

        // Browser globals
        factory(jQuery.datepicker);
    }
}(function (datepicker) {
    datepicker.regional['en-US'] = {
        closeText: 'close',
        prevText: 'before',
        nextText: 'next',
        currentText: 'current',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        dayNames: ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['sun', 'mon', 'thu', 'wed', 'thr', 'fri', 'sat'],
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        weekHeader: 'Wek',
        dateFormat: 'mm/dd//yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        rangeErroMessage: 'Date {0} is not allowed. Please select between {1} and {2}'
    };
    datepicker.setDefaults(datepicker.regional['en-US']);

    return datepicker.regional['en-US'];
}));
