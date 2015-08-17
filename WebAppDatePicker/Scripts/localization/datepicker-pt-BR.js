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
    datepicker.regional['pt-BR'] = {
        closeText: 'fechar',
        prevText: 'anterior',
        nextText: 'próximo',
        currentText: 'current',
        monthNames: ['janeiro', 'fevereivo', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        dayNames: ['domingo', 'segundo', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
        dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        weekHeader: 'Sem',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        rangeErroMessage: 'Data {0} nao permitida. Por favor selecione entre {1} e {2}'
    };
    datepicker.setDefaults(datepicker.regional['pt-BR']);

    return datepicker.regional['pt-BR'];
}));
