import { useState } from 'react';
import { SigninLogo } from '../../assets/svgs';
import { Input } from '../Input';
import { Button } from '../Button';

import './Signin.css';

export const Signin = () => {
  const [cover, setCover] = useState(false);

  const coverhandler = () => {
    setCover(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSignInClick = () => {
    console.log('sign in');
  };

  return (
    <div className={`signin-container`}>
      <div className={`signin-logo`}>
        <SigninLogo />
        <h2>COMPLEND</h2>
      </div>
      <div className='signin-form-container'>
        <div className={`signin-header`}>
          <h2>Welcome</h2>
          <p className={'font-14'}>Some text accessible day viewless perform, emperor leaf</p>
        </div>
        <div className={`signin-form`}>
          <Input
            type={"default"}
            icon={true}
            inputType={'text'}
            placeholder={"Enter User Name"}
            label={'User Name'}
            subLabel={''}
            onChange={handleChange}
          />
          <Input
            type={"default"}
            icon={true}
            inputType={'password'}
            coverHandler={coverhandler}
            placeholder={"Enter Password"}
            label={'Password'}
            subLabel={''}
            onChange={handleChange}
          />
          <Button
            label={'Sign In'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-none'}
            element={'button'}
            customStyles={{ width: '100%'}}
            onClick={handleSignInClick}
          />
        </div>
      </div>
    </div>
  )
}
