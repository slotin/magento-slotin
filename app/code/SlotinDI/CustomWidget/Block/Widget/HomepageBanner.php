<?php

namespace SlotinDI\CustomWidget\Block\Widget;
use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;
class HomepageBanner extends Template implements BlockInterface {
    /**
     * @var string
     */
    protected $_template = 'widget/homepage_banner.phtml';
}