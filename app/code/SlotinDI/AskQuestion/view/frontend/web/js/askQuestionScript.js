define(
    [
        'jquery',
        'jquery/ui'
    ],  function ($) {
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
                if (!this.validateForm()) {
                    return;
                }

                console.log('script work!');
            },

            /** @return true|false */
            validateForm: function () {
                return true;
            }
        });

        return $.slotindi.askquestion;
    }
);
