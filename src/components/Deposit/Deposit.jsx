import './Deposit.css'
import React, { useState } from 'react'
import { Visual } from '../Visual'
import { Account } from '../../assets/svgs'
import { Button } from '../Button'
import { Input } from '../Input'
import { HelpText } from '../HelpText'

export const Deposit = ({
  accountType,
  sideBarClose,
  inputs,
  currentObject,
  cardImg,
  handleSubmit,
  buttonLabel,
  showHelpText,
  helpText,
  success,
  accountBalance,
  accountBalanceSecond,
}) => {
  const handleInputChange = (e, params) => {
    const { name, onChange } = params

    let data
    if (!e.target) {
      data = {
        target: {
          value: e,
          name,
        },
      }
      return onChange(data)
    }

    onChange(e)
  }
  return (
    <>
      <Visual
        label={'Deposit'}
        element={'popup-header'}
        customStyles={{ width: '100%', maxWidth: '100%' }}
        onClick={sideBarClose}
      />
      <div className='sidebar-body'>
        <div className='deposit-container'>
          <div className='deposit-card'>
            <img src={cardImg} className='deposit-card-img' />
            <div className='deposit-card_header'>
              <Account type={accountType.toLowerCase()} />
              <h4 className='font-16'>{accountType.toUpperCase()} account</h4>
            </div>
            <div className='deposit-card_content'>
              <h4 className='font-14'>{accountType.toUpperCase()} Balance</h4>
              <p>{accountBalance}</p>
              <span className='font-14'>{accountBalanceSecond}</span>
            </div>
          </div>
          <div className='deposit-inputs-wrapper'>
            {inputs?.map((params, index) => (
              <Input
                key={index}
                type={params?.type}
                label={params.title}
                name={params.name}
                value={currentObject[params?.name] || params?.defaultAny}
                customStyles={{ width: '100%' }}
                selectHandler={opt => {
                  handleInputChange(opt, params)
                }}
                placeholder={params?.placeholder}
                onChange={e => handleInputChange(e, params)}
                defaultData={params?.options}
                customInputStyles={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                svg={params?.svg}
              />
            ))}
          </div>
          <Button
            label={buttonLabel}
            size={'btn-lg'}
            type={'btn-primary'}
            element={'button'}
            customStyles={{
              margin: '0',
              width: '100%',
              backgroundColor: '#45F4EA',
            }}
            onClick={handleSubmit}
          />
        </div>
        {showHelpText && (
          <HelpText status={success ? 'success' : 'error'} title={helpText} fontSize={'font-12'} icon={true} />
        )}
      </div>
    </>
  )
}
