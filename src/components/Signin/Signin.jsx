import { useState } from 'react';
import { SigninLogo } from '../../assets/svgs';
import { Input } from '../Input';
import { Button } from '../Button';
import { HelpText } from "../HelpText";

import './Signin.css';

export const Signin = ({ 
    handleSubmit,
    loginError
  }) => {
  const [cover, setCover] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const coverhandler = () => {
    setCover(true);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"default"}
            icon={true}
            inputType={'password'}
            coverHandler={coverhandler}
            placeholder={"Enter Password"}
            label={'Password'}
            subLabel={''}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            statusCard={loginError && (
              <HelpText
                status={'error'}
                title={loginError}
                fontSize={'font-12'}
                icon={true}
              />
            )}
          />
          <Button
            label={'Sign In'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-none'}
            element={'button'}
            customStyles={{ width: '100%'}}
            onClick={() => handleSubmit({ email, password })}
          />
        </div>
      </div>
    </div>
  )
}
