$(document).ready(function () {
    $("#language").blur(function () {
        $(".date").datepicker("option", $.datepicker.regional[$(this).val()]);
    });
    var $optDatePicker = {
        showOn: "button",
        buttonImage: "/CDN/Common/calendar.gif",
        buttonImageOnly: false,
        buttonText: "Select date",
        changeMonth: true,
        changeYear: true,
        onSelect: function (dateText) {
            var date = $(this).datepicker('getDate');
            if (date != undefined && typeof (date) === 'object') {
                if (date['getDate'] != undefined) {
                    var $day = $(this).siblings('.datepicker.day');
                    $($day).val(date.getDate());
                }
                if (date['getMonth'] != undefined) {
                    var $month = $(this).siblings('.datepicker.month');
                    $($month).val(date.getMonth() + 1);
                }
                if (date['getFullYear'] != undefined) {
                    var $year = $(this).siblings('.datepicker.year');
                    $($year).val(date.getFullYear());
                }
            }
        }
    };

    $(".date").each(function () {
        var $optLang = $.datepicker.regional[$(this).data('lang')];
        if ($optLang == undefined) {
            $optLang = $.datepicker.regional['en-US'];
        }
        var $opt = $.extend({}, $optDatePicker, $optLang);
        var $minDate = $(this).data('mindate');
        var $maxDate = $(this).data('maxdate');
        var $defaultDate = $(this).val();

        if ($minDate) {
            $minDate = $minDate.split('/');
            $opt.minDate = new Date($minDate[2], $minDate[1] - 1, $minDate[0], 0, 0, 0, 0);
        }

        if ($maxDate) {
            $maxDate = $maxDate.split('/');
            $opt.maxDate = new Date($maxDate[2], $maxDate[1] - 1, $maxDate[0], 0, 0, 0, 0);
        }

        if ($defaultDate) {
            $defaultDate = $defaultDate.split('/');
            $opt.defaultDate = new Date($defaultDate[2], $defaultDate[1] - 1, $defaultDate[0], 0, 0, 0, 0);
        }

        var $dateElem = $(this);
        $($dateElem).datepicker($opt);

        function tryUpdateDatepicker($elemDatepicker) {
            var day = $($elemDatepicker).siblings('.datepicker.day').val();
            var month = $($elemDatepicker).siblings('.datepicker.month').val();
            var year = $($elemDatepicker).siblings('.datepicker.year').val();

            if (day && month && year) {
                var date = new Date(year, month - 1, day, 0, 0, 0, 0);

                var $min = $($elemDatepicker).datepicker('option', 'minDate');
                var $max = $($elemDatepicker).datepicker('option', 'maxDate');
                if ($min > date || $max < date) {
                    var errorMessage = $($elemDatepicker).datepicker('option', 'rangeErroMessage');
                    var format = $($elemDatepicker).datepicker('option', 'dateFormat');

                    var $minFormated = $.datepicker.formatDate(format, $min);
                    var $maxFormated = $.datepicker.formatDate(format, $max);
                    var $currentFormated = $.datepicker.formatDate(format, date);

                    errorMessage + '' + errorMessage;
                    errorMessage = errorMessage.replace(/\{0\}/, $currentFormated);
                    errorMessage = errorMessage.replace(/\{1\}/, $minFormated);
                    errorMessage = errorMessage.replace(/\{2\}/, $maxFormated);

                    alert(errorMessage);
                    return $($elemDatepicker).datepicker('getDate');
                }
                $($elemDatepicker).datepicker('setDate', date);
                return date;
            }
        }

        $($dateElem).siblings('.datepicker.day').blur(function () {
            var $datepicker = $(this).siblings('.date');
            var date = tryUpdateDatepicker($datepicker);
            $(this).val(date.getDate());
        });

        $($dateElem).siblings('.datepicker.month').blur(function () {
            var $datepicker = $(this).siblings('.date');
            var date = tryUpdateDatepicker($datepicker);
            $(this).val(date.getMonth() + 1);
        });

        $($dateElem).siblings('.datepicker.year').blur(function () {
            var $datepicker = $(this).siblings('.date');
            var date = tryUpdateDatepicker($datepicker);
            $(this).val(date.getFullYear());
        });
    });
});