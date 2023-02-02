import { useState } from "react";
import { Visual } from "../Visual";
import { Switches } from "../Switches";
import { Input } from '../Input';
import { Button } from '../Button';
import { HelpText } from '../HelpText';

// hooks
import { useValidation } from "../../hooks/useValidation";

// styles
import "./Popup.css";

export const Popup = ({
  label,
  type,
  withdrawCustomStyles,
  withdrawHead,
  withdrawTitle,
  withdrawWallet,
  withdrawCode,
  withdrawData,
  withdrawSettingsCardBody,
  addTokenSelectData,
  addTokenCustomStyles,
  addTokenInputLabel,
  addAdminSelect,
  handleAddAdminBtnClick,
  addAdminError,
  handlePopUpClose,
  customStyles
}) => {
  const [addAdminData, setAddAdminData] = useState({
    email: '',
    password: '',
    [addAdminSelect?.value]: ''
  });

  const [emptyFields, setEmptyFields] = useState({});

  const [cover, setCover] = useState(false);

  const [addTokenData, setAddTokenData] = useState({
      tranxType: '',
      tranxDate: '',
      tokenAddedTo: '',
      tokenForStage: '',
      paymentGateWay: '',
      paymentAmount: '',
      paymentAddress: '',
      numberToken: '',
      checkBox: false
  });

  const addTokenHandlerDataUpdate = (value, field) => {
      setAddTokenData((prevState) => ({ ...prevState, [field]: value }));
      console.log(addTokenData)
  };

  const coverHandler = () => {
    if (!cover) {
      setCover(true);
    } else {
      setCover(false);
    };
  };

  const handleAddAdminInputChange = (e, name) => {
    setEmptyFields(prev => ({ ...prev, [name]: false }));
    setAddAdminData(prev => ({ ...prev, [name]: e.target.value }));
  };

  const handleAddAdminSelectChange = (option, name) => {
    setEmptyFields(prev => ({ ...prev, [name]: false }));
    setAddAdminData(prev => ({ ...prev, [name]: option }));
  };

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
  };

  const handleAdminSaveClick = () => {
    if (!addAdminData.email || !addAdminData.password) {
      const updatedState = {};

      Object.keys(addAdminData).forEach(i => {
          if (addAdminData[i].length < 1) {
              updatedState[i] = true;
          } else {
              updatedState[i] = false;
          };
      });

      setEmptyFields({...updatedState});
   } else {
      handleAddAdminBtnClick(addAdminData);
   }
  };

  const formErrors = useValidation({
    email: addAdminData.email,
    password: addAdminData.password
  }, helpTexts);

  return (

    <div className="popup-bg">
      <div className="popup-wrapper-container" onClick={handlePopUpClose} />
        <div className="popup-wrapper" style={customStyles}>
          <Visual
            label={label}
            element={"popup-header"}
            onClick={handlePopUpClose}
            customStyles={{
              width: "100%",
            }}
          />
          
          {type === "withdraw" && (
            <div className="withdraw-container" style={withdrawCustomStyles}>
              <div className="withdraw-inner">
                <div className="w-100">
                  <div className="flex mobile-flex jc-sb">
                    <div>{withdrawHead}</div>
                    <div>Approved</div>
                  </div>
                  <div className="flex mobile-flex jc-sb mt-22">
                    <div>{withdrawWallet}</div>
                    <div>{withdrawCode}</div>
                  </div>
                </div>
                <div className="withdraw-details">
                  <div className="withdraw-details-inner">
                    <div className="withdraw-title font-16">{withdrawTitle}</div>
                    <div className="withdraw-wraper">
                      {withdrawData.map((item) => {
                        return (
                          <div key={item.id} className="popup-item flex jc-sb">
                            <div>{item.name}</div>
                            <div>
                              <div className="align-right">{item.user}</div>
                              <div className="mt-8 font-12 align-right">
                                {item.sub}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {type === 'nikasPopUp' && (
            <div style={addTokenCustomStyles} className='pop-body'>
                <div className='body-row sc'>
                    <Input
                        type={"lable-input-select"}
                        // icon={false}
                        selectData={addTokenSelectData}
                        // defaultData={defaultData}
                        label={addTokenInputLabel}
                        // selectHandler={selectHandler}
                        // selectLabel={"select"}
                        // active={active}
                        // status={"warning"}
                        // title={"your text"}
                        // color={"#FFA726"}
                        customStyles={{width: 'calc(50% - 10px)'}}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "tranxType")}

                    />
                    {/* <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={""}
                        label={'Tranx Type'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "tranxType")}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    /> */}
                    <Input
                        type={"date-picker-input"}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "tranxDate")}
                        label={"Tranx Date"}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    />
                </div>
                <div className='body-row sc'>
                    <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={"default input"}
                        label={'Token Added To'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "tokenAddedTo")}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    />
                    <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={"default input"}
                        label={'Token for Stage'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "tokenForStage")}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    />
                </div>
                <div className='body-row sc'>
                    <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={"Manual"}
                        label={'Payment Gateway'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "paymentGateway")}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    />
                    <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={"0"}
                        label={'Payment Amount'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "paymentAmount")}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    />
                </div>
                <div className='body-row'>
                    <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={"Optional"}
                        label={'Payment Address'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "paymentAddress")}
                        customStyles={{width: '100%'}}
                    />
                </div>
                <div className='body-row'>
                    <Input
                        type={"default"}
                        // value={value}
                        icon={true}
                        inputType={'text'}
                        placeholder={"0"}
                        label={'Number of Token'}
                        subLabel={''}
                        onChange={(e) => addTokenHandlerDataUpdate(e.target.value, "numberToken")}
                        customStyles={{width: 'calc(50% - 10px)'}}
                    />
                    <div style={{width: 'calc(50% - 10px)', background: 'red'}}>
                        <input htmlFor={'checkbox'} type={'checkbox'}  />
                    </div>
                </div>
                <div className='body-row'>
                    <Button
                        label={'Add Token'}
                        size={'btn-lg'}
                        type={'btn-primary'}
                        arrow={''}
                        element={'button'}
                        customStyles={{width: '100%'}}
                        onClick={() => addTokenHandlerDataUpdate(data)}
                    />
                </div>
                <div className='body-row'>
                    <HelpText
                        status={'success'}
                        title={'your text'}
                        color={'#9CCC65'}
                        fontSize={'font-12'}
                        icon={true}
                    />
                </div>
            </div>
          )
        }

        {type === "withdrawSettings" && (
          <div className="withdraw-settings-main-fixed-container">
            <div className={`withdraw-settings-main-wrapp`} >
              <div className="withdraw-settings-body">
                  <p>{withdrawSettingsCardBody.text}</p>
                  <div className="withdraw-settings-flex">
                      <p>{withdrawSettingsCardBody.switches}</p>
                      <Switches type={"sm-switches"} size={"size"} />
                  </div>
                  <div className="withdraw-settings-flex">
                      <div className="withdraw-input-wrapp">
                          <Input
                              type={"default"}
                              // value={value}
                              icon={true}
                              inputType={'text'}
                              placeholder={withdrawSettingsCardBody.inputs.placeHolder1}
                              label={withdrawSettingsCardBody.inputs.input1}
                              subLabel={''}
                              // onChange={changeHandler}
                              customStyles={{ width: "100%" }}
                          />
                          <div className="input-and-form-definition">
                              {withdrawSettingsCardBody.definitions.svg}
                              <p>{withdrawSettingsCardBody.definitions.definition1}</p>
                          </div>
                      </div>
                      <div className="withdraw-input-wrapp">
                          <Input
                              type={"default"}
                              // value={value}
                              icon={true}
                              inputType={'text'}
                              placeholder={withdrawSettingsCardBody.inputs.placeHolder2}
                              label={withdrawSettingsCardBody.inputs.input2}
                              subLabel={''}
                              // onChange={changeHandler}
                              customStyles={{ width: "100%" }}
                          />
                          <div className="input-and-form-definition">
                              {withdrawSettingsCardBody.definitions.svg}
                              <p>{withdrawSettingsCardBody.definitions.definition2}</p>
                          </div>
                      </div>
                  </div>
                  <div className="withdraw-input-wrapp">
                      <p>{withdrawSettingsCardBody.inputs.inputDropDownLabel}</p>
                      <Input
                          type={"lable-input-select"}
                          // icon={false}
                          // selectData={selectData}
                          // defaultData={defaultData}
                          // selectHandler={selectHandler}
                          selectLabel={withdrawSettingsCardBody.inputs.inputDropDown}
                          // active={active}
                          status={"warning"}
                          // title={'your text'}
                          color={"#FFA726"}
                          customStyles={{ width: "100%" }}
                      />
                      <div className="input-and-form-definition">
                          {withdrawSettingsCardBody.definitions.svg}
                          <p>{withdrawSettingsCardBody.definitions.definition3}</p>
                      </div>
                  </div>
                  <div>
                      <h2>Withdraw With</h2>
                      <div>
                      </div>
                  </div>
                  <div className="withdraw-input-wrapp">
                      <Input
                          type={"default"}
                          // value={value}
                          icon={true}
                          inputType={'text'}
                          placeholder={withdrawSettingsCardBody.inputs.input3}
                          label={withdrawSettingsCardBody.inputs.input3}
                          subLabel={''}
                          // onChange={changeHandler}
                          customStyles={{ width: "100%" }}
                      />
                      <div className="input-and-form-definition">
                          {withdrawSettingsCardBody.definitions.svg}
                          <p>{withdrawSettingsCardBody.definitions.definition4}</p>
                      </div>
                  </div>
                  <div>
                      <div className="withdraw-settings-flex">
                          <p>{withdrawSettingsCardBody.switches}</p>
                          <Switches type={"sm-switches"} size={"size"} />
                      </div>
                      <div className="input-and-form-definition">
                          {withdrawSettingsCardBody.definitions.svg}
                          <p>{withdrawSettingsCardBody.definitions.definition5}</p>
                      </div>
                  </div>
                  <div className="withdraw-settings-button">{withdrawSettingsCardBody.button}</div>
              </div>
            </div>
          </div>
        )}

        {type === 'addAdmin' && (
          <div className={`addAdmin-container`}>
            <Input
              type={"lable-input-select"}
              icon={false}
              label={addAdminSelect.name}
              defaultData={addAdminSelect.options}
              emptyFieldErr={emptyFields[addAdminSelect.value]}
              selectHandler={(opt) => handleAddAdminSelectChange(opt, addAdminSelect.value)}
              selectLabel={`All ${addAdminSelect.name}`}
            />
            <Input
              type={'default'}
              label={'email'}
              placeholder={'enter your email'}
              parent={'your-class-name'}
              emptyFieldErr={emptyFields?.email}
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
              onChange={(e) => handleAddAdminInputChange(e, 'email')}
            />
            <Input
              type={'default'}
              label={'password'}e
              placeholder={'enter password'}
              icon={true}
              inputType={"password"}
              coverHandler={coverHandler}
              emptyFieldErr={emptyFields?.password}
              onChange={(e) => handleAddAdminInputChange(e, 'password')}
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
            {addAdminError && (
              <HelpText
                status={'warning'}
                title={addAdminError}
                fontSize={'font-12'}
                icon={true}
              />
            )}
            
            <Button 
              element={'button'}
              label={'Save'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-none'}
              customStyles={{ width: '100%', margin: '0'}}
              onClick={handleAdminSaveClick}
            />
          </div>
        )}
        </div>
    </div>
  );
};
