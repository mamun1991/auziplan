<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use Swift_Mailer;
use Swift_Message;
use Swift_SmtpTransport;
use App\Models\UserModel;

class Register extends BaseController
{

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	/**
	 * @var UserModel
	 */
	protected $user;

	public function __construct()
	{
		$this->user = new UserModel();
	}

	public function index()
	{
		$this->data['controller'] = 'register';
		return view('register', $this->data);
	}

	public function doRegister()
	{
		$existingUser = $this->user->where('email', $this->request->getVar('email'))->find();
		
		if ($existingUser) {
			echo 'exists';
		} else {
			if ($this->request->getVar('password') != $this->request->getVar('cpassword')) {
				echo "mismatch";
				return;
			} else {
				$token = md5(time());
				$data = array(
					'f_name' => $this->request->getVar('f_name'),
					'l_name' => $this->request->getVar('l_name'),
					'email' => $this->request->getVar('email'),
					'phone' => $this->request->getVar('phone'),
					//'country'=>'Asutralia',
					'status' => 'a',
					'username' => $this->request->getVar('username'),
					'password' => md5($this->request->getVar('password')),
					'token' => $token,
				);
				$builder = $this->db->table('user');
				
				$builder->insert($data);
				$uid = $this->db->insertID();

				if ($uid > 0) {
					$redirectUrl = site_url('register/verify/' . $token);
					$template_data = array(
						"name" => $this->request->getVar('f_name') . $this->request->getVar('l_name'),
						"confirmation_link" => $redirectUrl
					);

					$mail_content = view('email_template/email_confirmation', $template_data);
					$subject = "Activate your account";
					$this->sendSwitftMail($subject, $mail_content, $this->request->getVar('email'));
					echo 'mailsent';
				} else {
					echo 'failed';
				}
			}
		}
	}

	public function sendSwitftMail($subject, $mail_content, $email)
	{

	   
		$mailer = new Swift_Mailer(
			Swift_SmtpTransport::newInstance('node6754.myfcloud.com',465,'ssl')
			->setUsername('support@auziplan.com')
			->setPassword('Starlight2022')
		);

		$message = Swift_Message::newInstance($subject)
			->setFrom(array('support@auziplan.com' => 'AuziPlan'))
			->setTo(array($email => 'AuziPlan'))
			->setBody($mail_content, 'text/html');

		if (!$mailer->send($message)) {
			echo "error";
		}
	}

	public function verify($code)
	{
		if ($code !== "") {
			$check_user = $this->User_model->verify_account($code);

			if ($check_user) {

				$response = array(
					'status' => 'success',
					'message' => 'Your account is now active, please login to continue the payment process thank you'
				);
				$this->session->set_flashdata('response', $response);
			} else {
				$response = array(
					'status' => 'failed',
					'message' => 'Sorry this link has expired'
				);
				$this->session->set_flashdata('response', $response);
			}
			redirect(base_url() . 'login/index/verified');
		}
	}
}
