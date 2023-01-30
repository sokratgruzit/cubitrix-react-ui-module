import { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { InputTest } from "../components/InputTest/InputTest";
import { HelpText } from "../components/HelpText";
import { useValidation } from "../hooks/useValidation";

const stories = storiesOf("InputTest", module);

stories.add("InputTest", (props) => {
  const [fields, setFields] = useState(() => ({
    email: '',
    password: '',
  }));

  const [fieldsFilled, setFieldsFilled] = useState({});

  const formErrors = useValidation(fields);
  
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

  console.log(fieldsFilled)

  const handleChange = (e, name) => {
    setFieldsFilled(prev => ({ ...prev, [name]: false }));
    setFields((prev) => ({
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
        emptyFieldErr={fieldsFilled.email}
        statusCard= {
          formErrors.email && fieldsFilled?.email && (
            <HelpText
              status={'error'}
              title={formErrors.email}
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
        statusCard= {
          formErrors.password && fieldsFilled?.password && (
            <HelpText
              status={'error'}
              title={formErrors.password}
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
        // required={true}
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
        customStyles={{width: '320px'}}
        statusCard= {false}
      />
      <InputTest 
        type={'select'}
        label={'your-label'}
        subLabel={'sm-label'}
        placeholder={'your text'}
        parent={'your-class-name'}
        password={false}
        onChange={onChangeHandler}
        frameLabel={false}
        customStyles={{width: '320px'}}
        statusCard={false}
      />
      <input type={'submit'} value={'submit'} style={{ background: 'black', border: 'none', width: '320px', padding: '10px'}} />
    </form>
  );
});
