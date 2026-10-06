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
          <input type="text" aria-label='' />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" aria-label='' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" aria-label='' />
        </div>
      </div>

      <div className="forget-password">Forget Password? <span>Click Here!</span></div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>

    </div>
  )
}

export default LoginSignup