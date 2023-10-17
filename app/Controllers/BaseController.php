<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\HTTP\CLIRequest;
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;
use Config\Database;

/**
 * Class BaseController
 *
 * BaseController provides a convenient place for loading components
 * and performing functions that are needed by all your controllers.
 * Extend this class in any new controllers:
 *     class Home extends BaseController
 *
 * For security be sure to declare any new methods as protected or private.
 */
abstract class BaseController extends Controller
{
    /**
     * Instance of the main Request object.
     *
     * @var CLIRequest|IncomingRequest
     */
    protected $request;

    /**
     * Instance of the main Session object.
     *
     * @var \Config\Services::session();
     */
    protected $session;

    /**
     * Instance of the main Session object.
     *
     * @var \Config\Database::connect();
     */
    protected $db;

    /**
     * Instance of the main Request object.
     *
     * @var \CodeIgniter\HTTP\URI();
     */
    protected $uri;

    /**
     * Default currency for logged in user.
     *
     * @var string
     */
    protected $currency;

    /**
     * An array of helpers to be loaded automatically upon
     * class instantiation. These helpers will be available
     * to all other controllers that extend BaseController.
     *
     * @var array
     */
    protected $helpers = [];

    /**
     * Constructor.
     */
    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger)
    {
        // Do Not Edit This Line
        parent::initController($request, $response, $logger);

        // Preload any models, libraries, etc, here.
        require_once APPPATH . 'Libraries' . DIRECTORY_SEPARATOR . 'swift_mailer' . DIRECTORY_SEPARATOR . 'swift_required.php';
        
        $this->session = \Config\Services::session();
        $this->uri = new \CodeIgniter\HTTP\URI();
        $this->data['session'] = $this->session;
        $this->data['uri'] = $this->uri;
        $this->db = Database::connect();
        $this->data['db'] = $this->db;
        $this->data['user'] = $this->session->get('user');

        if ($this->session->has('user')) {
            $query = $this->db->query("SELECT `currency` FROM `company_detail` WHERE `user_id` = " . (int)$this->session->get('user')->id);
            if ($query->getNumRows()) {
                $this->currency = $query->getRow()->currency;
                $cur = '';
                if ($this->currency == "AUD" || $this->currency == "USD") {
                    $cur = "$";
                } elseif ($this->currency == "EUR") {
                    $cur = "€";
                } elseif ($this->currency == "UK") {
                    $cur = "£";
                } elseif ($this->currency == "INR") {
                    $cur = "₹";
                }
                $this->data['currency_icon'] = $cur;
            }
        }
    }
}
