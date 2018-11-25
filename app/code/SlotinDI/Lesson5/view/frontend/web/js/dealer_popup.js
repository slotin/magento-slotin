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
        var formDealerID = '#register-dealer-form';
        var popup = modal(options, $(formDealerID));
        $("#register-dealer").on('click', function (e) {
            e.preventDefault();
            $(formDealerID).modal("openModal");
            $(formDealerID).trigger('contentUpdated');

            // $('#form-validate').clone().appendTo('#register-dealer-modal'); // just for copy form (for creating unique form maybe need new template)

        });
    };
    return mageJsComponent;
});
