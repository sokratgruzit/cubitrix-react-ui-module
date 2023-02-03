import { useState } from "react";

// components
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
  addTokenCustomStyles,
  addAdminSelect,
  handleAddAdminBtnClick,
  addAdminError,
  handlePopUpClose,
  handleAddTransaction, 
  addTransactionSelects,
  customStyles,
}) => {
  const [popUpData, setPopUpData] = useState({
    email: '',
    password: '',
    [addAdminSelect?.value]: '',
    tx_type: '',
    from: '',
    to: '',
    amount: '',
    tx_hash: '',
    tx_currency: '',
    account_type: '',
  });

  const [emptyFields, setEmptyFields] = useState({});

  const [cover, setCover] = useState(false);

  const handleEmptyFields = () => {
    const updatedState = {};

    Object.keys(popUpData).forEach(i => {
        if (popUpData[i].length < 1) {
            updatedState[i] = true;
        } else {
            updatedState[i] = false;
        };
    });

    setEmptyFields({...updatedState});
  }

  const toggleCover = () => setCover(!cover);

  const handlePopUpInputChange = (e, name) => {
    setEmptyFields(prev => ({ ...prev, [name]: false }));
    setPopUpData(prev => ({ ...prev, [name]: e.target.value }));
  };

  const handlePopUpSelectChange = (option, name) => {
    setEmptyFields(prev => ({ ...prev, [name]: false }));
    setPopUpData(prev => ({ ...prev, [name]: option }));
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
    amount: {
      validationType: 'numbers',
      success: "amount is valid",
      failure: "must be a number"
    },
  };

  const handleAdminSaveClick = () => {
    if (
      !popUpData.email || !popUpData.password
    ) {
      handleEmptyFields();
    } else {
      handleAddAdminBtnClick({
        email: popUpData.email,
        password: popUpData.password,
        [addAdminSelect.value]: addAdminSelect[addAdminSelect.value]
      });
    }
  };

  const handleAddTransactionClick = () => {
    if (
      !popUpData.tx_type || !popUpData.from ||
      !popUpData.to || !popUpData.amount || 
      !popUpData.tx_hash || !popUpData.tx_currency
      // !popUpData.account_type  
    ) {
      handleEmptyFields();
   } else {
      handleAddTransaction({
        tx_type: popUpData.tx_type,
        from: popUpData.from,
        to: popUpData.to,
        amount: popUpData.amount,
        tx_hash: popUpData.tx_hash,
        tx_currency: popUpData.tx_currency,
        account_type: popUpData.account_type,
      });
   }  
  };  

  const formErrors = useValidation({
    email: popUpData.email,
    password: popUpData.password,
    // from: popUpData.from,
    // to: popUpData.to,
    amount: popUpData.amount,
    // tx_hash: popUpData.tx_hash,
  }, helpTexts);

  // ^[a-zA-Z0-9]{16}$
  // ^.{16}$

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
          
          {type === 'addTransaction' && (
            <div style={addTokenCustomStyles} className='pop-body'>
                <div className='addToken-inputs'>
                  <Input
                      type={"lable-input-select"}
                      defaultData={addTransactionSelects.tx_type.options}
                      label={addTransactionSelects.tx_type.name}
                      emptyFieldErr={emptyFields['tx_type']}
                      selectLabel={'Bonus'}
                      selectHandler={(opt) => handlePopUpSelectChange(opt, addTransactionSelects.tx_type.value)}
                  />  
                  <Input
                    type={"lable-input-select"}
                    defaultData={addTransactionSelects.account_type.options}
                    label={addTransactionSelects.account_type.name}
                    emptyFieldErr={emptyFields['account_type']}
                    selectLabel={'Account1'}
                    selectHandler={(opt) => handlePopUpSelectChange(opt, addTransactionSelects.account_type.value)}
                  />  
                  <Input
                      type={"default"}
                      icon={true}
                      inputType={'text'}
                      placeholder={"from"}
                      label={'From'}
                      emptyFieldErr={emptyFields['from']}
                      onChange={(e) => handlePopUpInputChange(e, 'from')}
                  />
                  <Input
                      type={"default"}
                      icon={true}
                      inputType={'text'}
                      placeholder={"to"}
                      label={'To'}
                      emptyFieldErr={emptyFields['to']}
                      onChange={(e) => handlePopUpInputChange(e, 'to')}
                  />
                </div>
                <div className="addToken-inputs addToken-inputs-row">
                  <Input
                        type={"default"}
                        icon={true}
                        inputType={'text'}
                        placeholder={"0"}
                        label={'Payment Amount'}
                        emptyFieldErr={emptyFields['amount']}
                        statusCard= {
                          formErrors.amount && (
                              <HelpText
                                  status={formErrors.amount.failure ? 'error' : 'success'}
                                  title={formErrors.amount.failure || formErrors.amount.success}
                                  fontSize={'font-12'}
                                  icon={true}
                              />
                          )
                        }
                        onChange={(e) => handlePopUpInputChange(e, 'amount')}
                  />
                  <Input
                    type={"lable-input-select"}
                    defaultData={addTransactionSelects.tx_currency.options}
                    emptyFieldErr={emptyFields[addTransactionSelects.tx_currency.value]}
                    selectHandler={(opt) => handlePopUpSelectChange(opt, addTransactionSelects.tx_currency.value)}
                    selectLabel={`ETH`}
                    customStyles={{ marginTop: '10px'}}
                  />
                </div>
                <Input
                    type={"default"}
                    icon={true}
                    inputType={'text'}
                    placeholder={"hash"}
                    label={'Hash'}
                    emptyFieldErr={emptyFields['tx_hash']}
                    onChange={(e) => handlePopUpInputChange(e, 'tx_hash')}
                />
                <Button
                    label={'Add Transaction'}
                    size={'btn-lg'}
                    type={'btn-primary'}
                    element={'button'}
                    customStyles={{ margin: '0', width: '100%' }}
                    onClick={handleAddTransactionClick}
                />
                <HelpText
                    status={'warning'}
                    title={'cant add transaction'}
                    color={'#9CCC65'}
                    fontSize={'font-12'}
                    icon={true}
                />
            </div>
          )}

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
                selectHandler={(opt) => handlePopUpSelectChange(opt, addAdminSelect.value)}
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
                onChange={(e) => handlePopUpInputChange(e, 'email')}
              />
              <Input
                type={'default'}
                label={'password'}e
                placeholder={'enter password'}
                icon={true}
                inputType={"password"}
                coverHandler={toggleCover}
                emptyFieldErr={emptyFields?.password}
                onChange={(e) => handlePopUpInputChange(e, 'password')}
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
