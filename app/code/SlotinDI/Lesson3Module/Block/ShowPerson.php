<?php

namespace SlotinDI\Lesson3Module\Block;

class ShowPerson extends \Magento\Framework\View\Element\Template
{
    public function execute()
    {
        $this->_view->renderLayout();
        $this->_view->loadLayout();
    }
}