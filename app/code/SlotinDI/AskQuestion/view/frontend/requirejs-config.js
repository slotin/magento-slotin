var config = {
    map: {
        '*': {
            askQuestionScript: 'SlotinDI_AskQuestion/js/askQuestionScript'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'SlotinDI_AskQuestion/js/validation-mixin': true
            }
        }
    }
};
