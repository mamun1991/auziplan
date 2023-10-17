<?php

namespace App\Controllers;

use App\Models\UserModel;
use Swift_Mailer;
use Swift_Message;
use Swift_SmtpTransport;

class Login extends BaseController
{
	/**
	 * @var UserModel
	 */
	protected $userModel;
	public function __construct()
	{
		helper('url');
		$this->userModel = new UserModel();
	}

	public function checkSession() {
		if (!$this->session->has('user')) {
			echo "expired";
		}
	}

	public function index()
	{		
		if ($this->session->has('user')) {
			return redirect()->to(site_url() . 'main-dashboard');
		}

		$this->data['controller'] = 'login';
		return view('login', $this->data);
	}
	

	public function newpassword()
	{
		$data = array(
			'controller' => 'login'
		);

		$this->load->view('newpassword', $data);
	}

	public function doLogin() {
		$json = [];
		if ($this->request->isAJAX()) {
			$user = $this->userModel->where([
				'email' => $this->request->getVar('email'),
				'password' => md5($this->request->getVar('password'))
			])->find();
			if ($user) {
				unset($user[0]->password);
				$user[0]->logged_in = true;
				$this->session->set('user', $user[0]);
				$curdate = strtotime(date('Y-m-d H:i:s'));
				$plan_end_date = strtotime($user[0]->plan_end_date);
				if ($user[0]->type == 'a') {
					$json = [
						'redirect' => site_url('dashboard'),
						'user' => 'admin',
						'success' => true
					];
					// echo 'admin';
				} elseif (($user[0]->subscribed == 'y' && $curdate < $plan_end_date)) {
					$json = [
						'redirect' => site_url('user/companysetup') ,
						'user' => 'user',
						'success' => true
					];
					// echo "user";
				} else {
					$json = [
						'redirect' => site_url('plans'),
						'user' => 'plans',
						'success' => true
					];
					// echo "plans";
				}
				if ($this->session->has('redirect')) {
					$json['redirect'] = site_url($this->session->get('redirect'));
				}
			} else {
				$json['user'] = 'notactive';
				$json['success'] = false;
			}
			return $this->response->setJSON($json);
		} else {
			die('Access Denied');
		}
	}

	public function forgotpassword()
	{
		$this->data = array(
			'controller' => 'login'
		);

		return view('forgotpassword', $this->data);
	}

	public function doForgotPwd()
	{
		$email = $this->request->getVar('email');
		$query = $this->db->table('user')->select('*')->where('email', $email)->get();
		$user = $query->getResult();

		if ($user) {
			$token = md5(time());
			$tokenarray = ['token' => $token];


			$builder = $this->db->table('user');
			$builder->where('email', $email);
			$forgotpwd_token = $builder->update($tokenarray);


			if ($forgotpwd_token) {
				$redirectUrl = site_url() . 'login/verify_forgotpwd/' . $token;
				$templateData = array(
					"name" => $user[0]->f_name . ' ' . $user[0]->l_name,
					"reset_link" => $redirectUrl
				);

				$mail_content = view('email_template/forgot_password', $templateData);

				$subject = "Forgot Password";

				$this->send_switft_mail($subject, $mail_content, $this->request->getVar('email'));

				echo 'mailsent';
			}
		} else {

			echo "invalid";
		}
	}

	public function send_switft_mail($subject, $mail_content, $email)
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


	public function verify_forgotpwd($code)
	{
		if ($code !== "") {
			$check_user = $this->userModel->where(['token' => $code, 'status' => 'a']);
			if ($check_user) {
				$data = array(
					'verify_code' => $code,
					'controller' => 'login'
				);

				return view('newpassword', $data);
			} else {

				//echo "failed";

				$response = array(
					'status' => 'failed',
					'message' => 'Sorry this link has expired'
				);
				$this->session->set_flashdata('response', $response);

				redirect(site_url() . 'login');
			}
		}
	}

	public function doNewpwd()
	{
		// start
		if ($this->request->getVar('password') != $this->request->getVar('cpassword')) {
			echo "mismatch";
			return;
		} else {
			$data = array(
				'password' => md5($this->request->getVar('password')),
			);


			$builder = $this->db->table('user');
			$builder->where('token', $this->request->getVar('verifycode'));
			$builder->update($data);

			echo "changed";
			return;
		}
	}
}
