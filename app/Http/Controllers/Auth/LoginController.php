<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Proxy\TokenProxy;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller {
	/*
	|--------------------------------------------------------------------------
	| Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles authenticating users for the application and
	| redirecting them to your home screen. The controller uses a trait
	| to conveniently provide its functionality to your applications.
	|
	*/

	use AuthenticatesUsers;

	/**
	 * Where to redirect users after login.
	 *
	 * @var string
	 */
	protected $redirectTo = '/home';

	protected $proxy;

	/**
	 * Create a new controller instance.
	 *
	 * @param \App\Proxy\TokenProxy $proxy
	 */
	public function __construct( TokenProxy $proxy ) {
		$this->middleware( 'guest' )->except( 'logout' );
		$this->proxy = $proxy;
	}

	/**
	 * @return \App\Proxy\TokenProxy
	 */
	public function login() {
		return $this->proxy->login( request( 'username' ), request( 'password' ) );
	}
}
