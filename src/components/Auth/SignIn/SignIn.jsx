import { useState } from 'react'
import './SignIn.css';
import { Input } from '../../Input';
import { Visual } from "../../Visual";
import { Button } from '../../Button';

export const SingIn = ({
  onClick,
  sideBarClose,
  goBack
}) => {

  const [toggle, setToggle] = useState('')
  const [data, setData] = useState({email: '', password: ''});

  const handlerDataUpdate = (value, field) => {
    setData((prevState) => ({ ...prevState, [field]: value }));
  };
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
          onChange={(e) => handlerDataUpdate(e.target.value, 'email')}
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
          onChange={(e) => handlerDataUpdate(e.target.value, 'password')}
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
          onClick={() => onClick(data)}
        />
      </div>

    </div>
  );
};
