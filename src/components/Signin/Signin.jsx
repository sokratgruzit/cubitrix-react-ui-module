import { SigninLogo } from '../../assets/svgs';

import './Signin.css';

export const Signin = () => {
  return (
    <div className={`signin-container`}>
      <div className={`signin-logo`}>
        <SigninLogo />
        <h2>COMPLEND</h2>
      </div>
    </div>
  )
}
