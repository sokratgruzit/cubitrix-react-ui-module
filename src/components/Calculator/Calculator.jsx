
// hooks
import { useValidation } from "../../hooks/useValidation";
import { Functions } from '../../hooks/Functions';

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
  handleStake,
  durationOptions,
  setStakeData,
  stakeData,
  handleMaxClick,
  customStyles,
}) => {
  const [emptyField, setEmptyField] = useState(false);
  const [helpText, setHelpText] = useState('');
  
  const { width } = Functions();

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setEmptyField(false);
    };
    setStakeData((prev) => ({ ...prev, 'amount': e.target.value}));
  };

  const handleDurationOptionChange = (duration) => {
    setStakeData((prev) => ({ ...prev, duration}));
  };

  let helpTexts = {
    amount: {
      validationType: 'numbers',
      success: "amount is valid",
      failure: "must be a number"
    },
  };

  const validationErrors = useValidation({
    amount: stakeData?.amount || ''
  }, helpTexts);

  const handleStakeClick = () => {
    if (stakeData?.amount?.length < 1) {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      handleStake();
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
          value={stakeData?.amount}
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
            label={`${item.title} D`}
            element={'calculator-button'}
            onClick={() => {
              handleDurationOptionChange(item.title);
              setHelpText(item.value);
            }}
            customStyles={{ width: '100%'}}
            active={item.title === stakeData.duration}
        />
        ))}
      </div>
      <HelpText
        title={helpText ? helpText : durationOptions[0].value}
        status="info"
        color="#6A6D76"
        icon={true}
      />
      <div style={{ marginTop: '23.5px' }}> 
        <Button 
          element={'button'}
          label={'Stake'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-none'}
          customStyles={{ width: '100%', margin: '0'}}
          onClick={handleStakeClick}
          disabled={validationErrors?.amount?.failure && true}
        />
      </div>
    </div>
  )
}