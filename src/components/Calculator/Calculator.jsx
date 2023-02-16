import './Calculator.css';

import { useValidation } from "../../hooks/useValidation";

import { HelpText } from '../HelpText';
import { Button } from '../Button';
import { Input } from '../Input';
import { useState } from 'react';

export const Calculator = ({
  handleSubmit,
  durationOptions,
  setStakeData,
  stakeData
}) => {
  const [emptyField, setEmptyField] = useState(false);

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
      handleSubmit();
    };
  };

  return (
    <div className={`staking-calculator-container`}>
      <h2 className="font-14 staking-calculator__header">Staking Calculator</h2>
      <Input
        type={"default"}
        inputType={'text'}
        placeholder={"0000"}
        label={'Amount'}
        onChange={handleChange}
        emptyFieldErr={emptyField}
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
      <div className="staking-calculator__buttons">
        {durationOptions.map((item, index) => (
          <Button
            key={index}
            label={`${item.title} D`}
            size={'btn-sm'}
            type={'btn-primary'}
            arrow={'arrow-none'}
            element={'button'}
            customStyles={{ width: '60px', borderRadius: '8px' }}
            onClick={() => handleDurationOptionChange(item.title)}
        />
        ))}
      </div>
      <HelpText
        title="15 % APY On 30 Days. Locked Until 02/02/2023 2:33 PM"
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