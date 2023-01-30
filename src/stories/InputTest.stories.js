import { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { InputTest } from "../components/InputTest";
import { HelpText } from "../components/HelpText";
import { useValidation } from "../hooks/useValidation";

const stories = storiesOf("InputTest", module);

stories.add("InputTest", (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    minimToken: '',
  });

  let helpTexts = {
    email: {
      validationType: 'email',
      success: "email is valid",
      failure: "email must be valid"
    },
    password: {
      validationType: 'password',
      success: "password is valid",
      failure: "password must contain a minimum of 8 characters, uppercase and special character"
    },
    minimToken: {
      validationType: 'numbers',
      success: "it is valid",
      failure: "must be number"
    },
  };

  const [fieldsNotFilled, setFieldsNotFilled] = useState({});

<<<<<<< HEAD
  const formErrors = useValidation(fields);

=======
  const formErrors = useValidation(formData, helpTexts);

>>>>>>> a51bb3024bdf370384306889bfc3ae7856ee3c8f
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formErrors.length > 0) return;

    const updatedState = {};

    Object.keys(fields).forEach(i => {
      if (fields[i].length > 0) {
        updatedState[i] = false;
      } else {
        updatedState[i] = true;
      }
    })
    setFieldsFilled({...updatedState});
  };

    setFieldsNotFilled({...updatedState});
  };

  const handleChange = (e, name) => {
    setFieldsNotFilled(prev => ({ ...prev, [name]: false }));
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value
    }));
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "30px",
      }}
      onSubmit={handleSubmit}
    >
      <InputTest
        type={'default'}
        label={'email'}
        placeholder={'enter your email'}
        parent={'your-class-name'}
        onChange={(e) => handleChange(e, 'email')}
        customStyles={{width: '320px'}}
<<<<<<< HEAD
        emptyFildErr={true}
=======
        emptyFieldErr={fieldsNotFilled?.email}
>>>>>>> a51bb3024bdf370384306889bfc3ae7856ee3c8f
        statusCard= {
          formErrors.email && (
            <HelpText
              status={formErrors.email.failure ? 'error' : 'success'}
              title={formErrors.email.failure || formErrors.email.success}
              fontSize={'font-12'}
              icon={true}
            />
          )
        }
      />
      <InputTest
        type={'default'}
        label={'password'}
        placeholder={'enter password'}
        password={true}
        onChange={(e) => handleChange(e, 'password')}
        customStyles={{width: '320px'}}
        emptyFieldErr={fieldsNotFilled?.password}
        statusCard= {
          formErrors.password && (
            <HelpText
              status={formErrors.password.failure ? 'error' : 'success'}
              title={formErrors.password.failure || formErrors.password.success}
              fontSize={'font-12'}
              icon={true}
            />
          )
        }
      />
      <InputTest
        type={'default'}
        label={'minToken'}
        placeholder={'enter token'}
        onChange={(e) => handleChange(e, 'minimToken')}
        customStyles={{width: '320px'}}
        emptyFieldErr={fieldsNotFilled?.minimToken}
        statusCard= {
          formErrors.minimToken && (
            <HelpText
              status={formErrors.minimToken.failure ? 'error' : 'success'}
              title={formErrors.minimToken.failure || formErrors.minimToken.success}
              fontSize={'font-12'}
              icon={true}
            />
          )
        }
      />
      <InputTest
        type={'default'}
        label={'your-label'}
        subLabel={'sm-label'}
        placeholder={'your text'}
        parent={'your-class-name'}
        password={false}
        onChange={onChangeHandler}
        frameLabel={true}
        customStyles={{width: '320px'}}
        statusCard= {
          <HelpText
            status={'error'}
            title={'your text'}
            fontSize={'font-12'}
            icon={true}
          />
        }
      />
      <InputTest
        type={'default'}
        label={'your-label'}
        subLabel={'sm-label'}
        labelR={false}
        placeholder={'your text'}
        parent={'your-class-name'}
        password={true}
        onChange={onChangeHandler}
        customStyles={{width: '320px'}}
        statusCard={false}
      />
      <InputTest
        type={'default'}
        label={'your-label'}
        subLabel={'sm-label'}
        placeholder={'your text'}
        parent={'your-class-name'}
        password={false}
        onChange={onChangeHandler}
        frameLabel={true}
        required={false}
        customStyles={{width: '320px'}}
        statusCard= {false}
      />
      <InputTest
        type={'select'}
        label={'your-label'}
        subLabel={'sm-label'}
        placeholder={'your text'}
        parent={'your-class-name'}
        required={false}
        password={false}
        onChange={onChangeHandler}
        frameLabel={false}
        customStyles={{width: '320px'}}
        statusCard={false}
      />
      <input
        type={'submit'}
        value={'submit'}
        style={{ background: 'black', border: 'none', width: '320px', padding: '10px'}}
      />
    </form>
  );
});
