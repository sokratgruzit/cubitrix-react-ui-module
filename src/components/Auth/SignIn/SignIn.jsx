import { useState } from 'react'
import './SignIn.css';
import { Input } from '../../Input';
import { Visual } from "../../Visual";
import { Button } from '../../Button';

export const SingIn = ({
  onChange,
  sideBarClose,
  goBack
}) => {
  const [toggle, setToggle] = useState('')
  return (
    <div className='sing-in-module'>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "100%" }}
        onClick={sideBarClose}
        goBack={goBack}
      />
      <div className='form-group'>
        <Input
          type={"default"}
          icon={true}
          inputType={'text'}
          placeholder={"@email.com"}
          label={'Enter Your E-mail'}
          subLabel={''}
          onChange={onChange}
          customStyles={{ width: "auto" }}
        />
        <Input
          type={"default"}
          icon={true}
          inputType={'password'}
          // coverHandler={coverhandler}
          placeholder={"password input"}
          label={'Enter Password'}
          subLabel={''}
          onChange={onChange}
          customStyles={{ width: "auto" }}
        />
      </div>
      <div className='form-group-btn'>
        <Button
          label={'Sing In'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={''}
          element={'button'}
          customStyles={{width: '100%'}}
          onClick={() => setToggle((prevState) => !prevState)}
        />
      </div>

    </div>
  );
};
