define(
    [
        'jquery', 'Magento_Ui/js/modal/modal'
    ],
    function ($, modal) {

        var mageJsComponent = function() {
        var options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            title: $.mage.__('Registration for dealer'),
            buttons: [{
                text: $.mage.__('Close'),
                click: function () {
                    this.closeModal();
                }
            }]
        };
        var popup = modal(options, $('#register-dealer-modal'));
        $("#register-dealer").on('click', function (e) {
            e.preventDefault();
            $("#register-dealer-modal").modal("openModal");

            $('#form-validate').clone().appendTo('#register-dealer-modal'); // just for copy form (for creating unique form maybe need new template)


        });
    };
    return mageJsComponent;
});
