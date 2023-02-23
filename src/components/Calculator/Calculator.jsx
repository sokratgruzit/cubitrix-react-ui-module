
// hooks
import { useValidation } from "../../hooks/useValidation";
import { useMobileWidth } from '../../hooks/useMobileWidth';

// components
import { HelpText } from '../HelpText';
import { Button } from '../Button';
import { Input } from '../Input';
import { useState } from 'react';

// svgs 
import { CalculatorIcon } from "../../assets/svgs";

// styles
import './Calculator.css';

export const Calculator = ({
  handleCalculatorSubmit,
  durationOptions,
  handleMaxClick,
  customStyles,
  loading,
  isAllowance,
  account,
  timeperiod,
  setTimeperiod,
  depositAmount, 
  setDepositAmount,
  timeperiodDate,
  handleTimeperiodDate
}) => {
  const [emptyField, setEmptyField] = useState(false);
  
  const { width } = useMobileWidth();

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setEmptyField(false);
    };
    setDepositAmount(e.target.value);
  };

  let helpTexts = {
    amount: {
      validationType: 'number',
      success: "amount is valid",
      failure: "must be a number"
    },
  };

  const validationErrors = useValidation({
    amount: depositAmount || ''
  }, helpTexts);

  const handleSubmit = () => {
    if (depositAmount?.length < 1) {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      handleCalculatorSubmit();
    };
  };

  return (
    <div className={`calculator-container`} style={customStyles}>
      <h2 className={'font-14 calculator__header'}>
        {width <= 1025 && <CalculatorIcon />}
        Staking Calculator
      </h2>
      <div className={'calculator-input'}>
        <Input
          type={"default"}
          inputType={'text'}
          placeholder={"0000"}
          label={'Amount'}
          onChange={handleChange}
          emptyFieldErr={emptyField}
          value={depositAmount}
          statusCard={
            validationErrors?.amount && (
              <HelpText
                  status={validationErrors.amount.failure ? 'error' : 'success'}
                  title={validationErrors.amount.failure || validationErrors.amount.success}
                  fontSize={'font-12'}
                  icon={true}
              />
            )
          }
        />
        <span 
          className={'font-12'}
          onClick={handleMaxClick}
        >
          MAX
        </span>
      </div>
      <div className="calculator__buttons">
        {durationOptions.map((item, index) => (
          <Button
            key={index}
            label={item.title}
            element={'calculator-button'}
            onClick={() => {
              setTimeperiod(item.time);
              handleTimeperiodDate(item.period)
            }}
            customStyles={{ width: '100%'}}
            active={item.time === timeperiod}
        />
        ))}
      </div>
      <HelpText
        title={timeperiod === 0
          ? "15 % APY On 30 Days. Locked until " + timeperiodDate
          : timeperiod === 1
          ? "22.5% APY On 60 Days. Locked until " + timeperiodDate
          : timeperiod === 2
          ? "29% APY On 90 Days. Locked until " + timeperiodDate
          : timeperiod === 3
          ? "36.3% APY On 180 Days. Locked until " + timeperiodDate
          : "50.0% APY On 360 Days. Locked until " + timeperiodDate}
        status="info"
        color="#6A6D76"
        icon={true}
      />
      <div style={{ marginTop: '23.5px' }}> 
        <Button 
          element={'button'}
          label={
            account ? (
              loading ? "Please wait, Loading.." : `${isAllowance ? 'Enable' : 'Stake'}`
            ) : 'Connect Wallet'
          }
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-none'}
          customStyles={{ width: '100%', margin: '0'}}
          onClick={!account || account && isAllowance ? handleCalculatorSubmit : handleSubmit}
          // disabled={validationErrors?.amount?.failure && account && true}
        />
      </div>
    </div>
  )
}