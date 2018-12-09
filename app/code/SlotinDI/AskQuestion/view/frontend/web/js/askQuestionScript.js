define(
    [
        'jquery',
        'Magento_Ui/js/modal/alert',
        'mage/translate',
        'mage/cookies',
        'jquery/ui'
    ], function ($, alert) {
        'use strict';

        $.widget('slotindi.askquestion', {
            options: {
                cookieName: 'askMessage'
            },

            /** function consctruct */
            _create: function () {
                $(this.element).submit(this.submitForm.bind(this));
            },

            /** submit form function */
            submitForm: function () {
                if (!this.validateForm()) {
                    return;
                }
                if ($.mage.cookies.get(this.options.cookieName)) {
                    alert({
                        title: $.mage.__('Error'),
                        content: $.mage.__('Are you bot?! Relax your fingers for 2 minutes')
                    });

                    return;
                }
                this.ajaxSubmit();
            },

            /** @return true|false */
            validateForm: function () {
                return $(this.element).validation().valid();
            },

            /**
             * Ajax submit form
             */
            ajaxSubmit: function () {
                // debugger;
                var formData = new FormData($(this.element).get(0));
                // var cookieSent = $.mage.cookies.get("askMessage");
                formData.append('form_key', $.mage.cookies.get('form_key'));
                formData.append('askMessage', $.mage.cookies.get(this.options.cookieName));
                // console.log(cookieSent);
                var self = this;

                $.ajax({
                    url: $(this.element).attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    type: 'post',
                    dataType: 'json',
                    context: this,

                    success: function (response) {
                        alert({
                            title: $.mage.__(response.status),
                            content: $.mage.__(response.message)
                        });

                        if (response.status === 'Success') {
                            var date = new Date();
                            console.log(date);
                            date.setTime(date.getTime() +  2 * 60 * 1000);
                            $.mage.cookies.set(self.options.cookieName, 1, {expires: date});
                            // var CookieText = "askMessage=true; path=/; expires=" + date.toUTCString();
                            // console.log(CookieText);
                            // document.cookie = CookieText;
                        }
                    },
                    error: function () {
                        // console.log(JSON.stringify(error));
                        alert({
                            title: $.mage.__('Error'),
                            content: $.mage.__('Your question can not be send. Please, contact us directly via email or phone.')
                        });
                    }
                });
            },
        });
        return $.slotindi.askquestion;
    }
);
