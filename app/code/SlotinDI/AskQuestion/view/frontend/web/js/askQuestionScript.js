define(
    [
        'jquery',
        'Magento_Ui/js/modal/alert',
        'mage/translate',
        'mage/cookies',
        'jquery/ui',
        'SlotinDI_AskQuestion/js/validate-ukraine-number'
    ], function ($, alert) {
        'use strict';

        $.widget('slotindi.askquestion', {
            options: {
                action: ''
            },

            /** function consctruct */
            _create: function () {
                $(this.element).submit(this.submitForm.bind(this));
            },

            /**
             * Function call submit form
             *
             */
            submitForm: function () {
                var cookieSent = $.mage.cookies.get("askMessage");
                // console.log(cookieSent);
                var formData = new FormData($(this.element).get(0));
                formData.append('form_key', $.mage.cookies.get('form_key'));

                if (!cookieSent === true) {
                    $.ajax({
                        url: $(this.element).attr('action'),
                        data: formData,
                        processData: false,
                        contentType: false,
                        type: 'post',
                        dataType: 'json',
                        context: this
                    })
                        .done(function (response) {
                            var date = new Date(new Date().getTime() + 2 * 60 * 1000);
                            var CookieText = "askMessage=true; path=/; expires=" + date.toUTCString();
                            // console.log(CookieText);
                            document.cookie = CookieText;
                            alert({
                                title: response.status,
                                content: response.message
                            });
                        })
                        .fail(function (error) {
                            console.log(JSON.stringify(error));
                            alert({
                                title: 'Error',
                                content: 'Your request can not be submitted. Please, contact us directly via email or prone to get your Sample.'
                            });
                        });
                } else {
                    alert({
                        title: 'Error',
                            content: 'Are you bot?! Relax your fingers for 2 minutes'
                    });
                }
            },


            /** @return true|false */
            validateForm: function () {
                return $(this.element).validation().valid();
            }
        });
        return $.slotindi.askquestion;
    }
);
