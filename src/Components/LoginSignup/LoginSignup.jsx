import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import person_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  return (
    <div className="container">

      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={person_icon} alt="" />
          <input type="text" placeholder='Name' aria-label='Name' />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email' aria-label='Email' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' aria-label='Password' />
        </div>
      </div>

      <div className="forget-password">Forget Password? </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>

    </div>
  )
}

export default LoginSignup