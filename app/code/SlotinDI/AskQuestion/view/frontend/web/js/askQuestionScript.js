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
                        content: $.mage.__('Many questions! Try to send question after 2 minutes.')
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
                var formData = new FormData($(this.element).get(0));
                formData.append('form_key', $.mage.cookies.get('form_key'));
                formData.append('askMessage', $.mage.cookies.get(this.options.cookieName));
                var cookieSend = $.mage.cookies.get('askMessage');
                var self = this;
                if (!cookieSend) {
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
                                $.mage.cookies.set(self.options.cookieName, 1, {lifetime: 120});
                            }
                        },
                        error: function () {
                            alert({
                                title: $.mage.__('Error'),
                                content: $.mage.__('Your question can not be send. Please, contact us directly via email or phone.')
                            });
                        }
                    });
                }
            },
        });
        return $.slotindi.askquestion;
    }
);
