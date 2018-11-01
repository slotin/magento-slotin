<?php
namespace SlotinDI\Lesson3Module\Controller\Demonstration;
use Magento\Framework\Controller\ResultFactory;
class IndexJson extends \Magento\Framework\App\Action\Action
{

    /**
     * @return \Magento\Framework\App\ResponseInterface|\Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
        /** @var \Magento\Framework\Controller\Result\Json $controllerResult */
        $controllerResult = $this->resultFactory->create(ResultFactory::TYPE_JSON);
        $data = ['content' => "Default Router It’s located in lib/internal/Magento/Framework/App/Router/DefaultRouter.php and it’s last in the routers loop. It’s used when every other router doesn’t match. In Magento 2 we can create custom handle for “Not found” page to display custom content. Here is the loop in DefaultRouter for no route handler list:"];
        return $controllerResult->setData($data);
    }
}