<?php

namespace SlotinDI\Lesson3Module\Controller\Demonstration;

use Magento\Framework\Controller\ResultFactory;

class Index extends \Magento\Framework\App\Action\Action
{
    /**
     * @return \Magento\Framework\App\ResponseInterface|\Magento\Framework\Controller\ResultInterface|\Magento\Framework\View\Result\Page
     */
    public function execute()
    {
        $resultPage = $this->resultFactory->create(ResultFactory::TYPE_PAGE);
        $resultPage
            ->getLayout()
            ->getBlock('show_person')
            ->setName('Dmytro')
            ->setLastname('Slotin')
        ;
        return $resultPage;
    }

}
