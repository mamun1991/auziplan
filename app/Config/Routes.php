<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
//$routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');
$routes->get('/about', 'Page::about');
$routes->get('/privacy', 'Page::privacy');
$routes->get('/features', 'Page::features');
$routes->get('/pricing', 'Page::pricing');
$routes->get('/gettingstarted', 'Page::gettingstarted');
$routes->get('/faq', 'Page::FAQ');

$routes->get('/register', 'Register::index');
$routes->post('/register', 'Register::doRegister');
$routes->get('/login', 'Login::index');
$routes->post('/login', 'Login::doLogin');
$routes->get('/logout', 'Home::logout');
$routes->get('/user/logout', 'User::logout');
$routes->get('/login/check-session', 'Login::checkSession');


$routes->get('/plans', 'Plans::index');
$routes->get('/plans/subscribe/yearly', 'Plans::subscribe');
$routes->get('/paypal/success', 'Paypal::success');


$routes->get('/login/forgotpassword', 'Login::forgotpassword');
$routes->post('/login/doForgotPwd', 'Login::doForgotPwd');
$routes->get('/login/verify_forgotpwd/(:any)', 'Login::verify_forgotpwd/$1');
$routes->post('/login/doNewpwd', 'Login::doNewpwd');


$routes->get('/user/companysetup', 'User::companysetup');
$routes->post('/user/do-companysetup', 'User::doCompanySetup');
$routes->post('/user/save-finance', 'User::saveFinance');
$routes->post('/user/save-assumptions', 'User::saveAssumptions');
$routes->post('/user/currency', 'User::currency');
$routes->post('/user/ask-question-email', 'User::askQuestionEmail');
$routes->get('/user/assumptions-data', 'User::getAssumptionsData');
$routes->get('/user/get-finance-table', 'User::getFinanceTable');
$routes->post('/user/amortization', 'User::amortization');
$routes->get('/director/ajax-list-js', 'Director::ajaxListJs');
$routes->get('/director/ajax-list-dt', 'Director::ajaxListDt');


$routes->get('/investor/ajax-list-js', 'Investor::ajaxListJs');
$routes->post('/investor/ajax-add', 'Investor::ajaxAdd');
$routes->post('/investor/ajax-update', 'Investor::ajaxUpdate');
$routes->get('/investor/ajax-edit/(:num)', 'Investor::ajaxEdit/$1');
$routes->get('/investor/ajax-list-dt', 'Investor::ajaxListDt');
$routes->get('/investor/ajax-list-dt', 'Investor::ajaxListDt');
$routes->get('/investor/ajax-delete/(:num)', 'Investor::ajax_delete/$1');



$routes->post('/director/ajax-add', 'Director::ajaxAdd');
$routes->get('/director/ajax-edit/(:num)', 'Director::ajax_edit/$1');
$routes->get('/director/ajax-delete/(:num)', 'Director::ajax_delete/$1');


$routes->get('/planning/planning-setup', 'Planning\PlanningSetup::index');
$routes->post('/planning/ajax-save-planning', 'Planning\PlanningSetup::ajaxSavePlanning');
$routes->post('/planning/ajax-clear-planning', 'Planning\PlanningSetup::ajaxClearPlanning');


$routes->get('/opening-cost', 'OpeningCosts::index');
$routes->post('/opening-cost/ajax-add', 'OpeningCosts::ajaxAdd');
$routes->get('/opening-cost/ajax-edit/(:num)', 'OpeningCosts::ajaxEdit/$1');
$routes->get('/opening-cost/motor-edit/(:num)', 'OpeningCosts::motorEdit/$1');
$routes->post('/opening-cost/ajax-add-motors', 'OpeningCosts::ajaxAddMotors');
$routes->delete('/opening-cost/delete-motor/(:num)', 'OpeningCosts::deleteMotor/$1');
$routes->delete('/opening-cost/ajax-delete/(:num)', 'OpeningCosts::ajaxDelete/$1');
$routes->get('/opening-cost/ajax-list-onetime-cost', 'OpeningCosts::ajaxListOnetimeCost');
$routes->get('/opening-cost/ajax-list-plant-equipment', 'OpeningCosts::ajaxListPlantEquipment');
$routes->get('/opening-cost/ajax-list-land-buildings', 'OpeningCosts::ajaxListLandBuildings');
$routes->get('/opening-cost/ajax-list-motor-vehicle', 'OpeningCosts::ajaxListMotorVehicle');



$routes->get('/operating-cost', 'OperatingCosts::index');
$routes->post('/operating-cost/ajax-add', 'OperatingCosts::ajaxAdd');
$routes->get('/operating-cost/ajax-edit/(:num)', 'OperatingCosts::ajaxEdit/$1');
$routes->delete('/operating-cost/ajax-delete/(:num)', 'OperatingCosts::ajaxDelete/$1');
$routes->get('/operating-cost/ajax-list', 'OperatingCosts::ajaxList');
$routes->get('/operating-cost/ajax-people', 'OperatingCosts::ajaxPeople');
$routes->get('/operating-cost/ajax-edit-people/(:num)', 'OperatingCosts::ajaxEditPeople/$1');
$routes->get('/operating-cost/get-payroll-assumptions', 'OperatingCosts::getPayrollAssumptions');
$routes->post('/operating-cost/ajax-add-people', 'OperatingCosts::ajaxAddPeople');
$routes->delete('/operating-cost/ajax-delete-people/(:num)', 'OperatingCosts::ajaxDeletePeople/$1');


$routes->get('/revenue', 'Revenue::index');
//$routes->get('/Revenue/load-product-revenue-dt', 'Revenue::loadProductRevenueDt');
$routes->get('/revenue/get-operating-cost', 'Revenue::getOperatingCost');	
$routes->get('/revenue/load_product_revenue_dt', 'Revenue::loadProductRevenueDt');
$routes->get('/revenue/load_hourly_rate_dt', 'Revenue::load_hourly_rate_dt');
$routes->post('/revenue/ajax_add_hourly_rate', 'Revenue::ajaxAddHourlyRate');
$routes->post('/revenue/revenue_stream_total_revenue_required', 'Revenue::revenue_stream_total_revenue_required');
$routes->post('/revenue/revenue_stream_payroll_expense', 'Revenue::revenue_stream_payroll_expense');
$routes->post('/revenue/ajax_add_product', 'Revenue::ajaxAddProduct');
$routes->get('/revenue/delete_product_revenue/(:num)', 'Revenue::delete_product_revenue/$1');	
$routes->get('/revenue/product_revenue_edit/(:num)', 'Revenue::product_revenue_edit/$1');	

$routes->get('/print_center/print_center', 'Print_center\PrintCenter::index');



$routes->get('/analysis', 'Analysis::index');
$routes->get('/main-dashboard', 'MainDashboard::index');
$routes->post('/uploadfile/upload-company-setup-pics', 'Uploadfile::uploadCompanySetupPics');
$routes->get('uploads/(:any)/(:any)', 'Uploadfile::index/$1/$2');  

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
