import React from 'react'
import '../css/authPage.css'
import EdusparkIcon from '../assets/edusparkIcon.jpg'
const AuthPage = () => {
  return (
	<div className='authContainer'>
		<h1>Welcome to Eduspark!</h1>
    <div className="authFormContainer"> 
			<div className="appIconContainer">
				<img src={EdusparkIcon} alt='eduspark icon'/> 	
			</div>
		  <input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="loginFormContainer">
				<form className="authForm">
				<label className="authFormLabel">Login</label>
					<input className="formInput" type="email" name="email" placeholder="Email" required=""/>
					<input className="formInput" type="password" name="pswd" placeholder="Password" required=""/>
					<button className='authFormButton'>Log in</button>
				</form>
			</div>

      <div className="registerFormContainer">
				<form className="authForm">
					<label for="chk" aria-hidden="true" className="authFormLabel">Register</label>
					<input className="formInput" type="text" name="txt" placeholder="Username" required=""/>
					<input className="formInput" type="email" name="email" placeholder="Email" required=""/>
					<input className="formInput" type="password" name="pswd" placeholder="Password" required=""/>
					<button className="authFormButton">Register</button>
				</form>
			</div>
	</div>
</div>
  )
}

export default AuthPage