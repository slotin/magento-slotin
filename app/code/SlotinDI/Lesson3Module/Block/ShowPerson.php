<?php

namespace SlotinDI\Lesson3Module\Block;

class ShowPerson extends \Magento\Framework\View\Element\Template
{
    const JSON_RESPONSE = 'slotindi_lesson3module/demonstration/indexjson';
    /**
     * @return string
     */
    public function getLinkToJson()
    {
        return $this->getUrl(self::JSON_RESPONSE);
    }
}
