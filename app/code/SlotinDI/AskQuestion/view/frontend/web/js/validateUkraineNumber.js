define([
    'jquery',
    'jquery/validate'
], function ($) {
    'use strict';

    var codeUA = '380';

    function validateUkraineNumber(phonenumber, codeUA) {
        var fullNumber = paerseInt(phonenumber.replace('+', ''), 10);
        console.log(phonenumber);

        return phonenumber;
    }

    $.each({
        'validateUkraineNumber': [
            function (value, codeUA) {
                return validateUkraineNumber(value, codeUA);
            },
            $.mage.__('Please enter a valid phone number.')
        ]
    }, function (i, rule) {
        rule.unshift(i);
        $.validator.addMethod.apply($.validator, rule);
    });
    console.log('Script validate ukraine number is run');
});