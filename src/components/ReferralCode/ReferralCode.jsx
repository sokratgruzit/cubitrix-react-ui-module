import './ReferralCode.css'
import React, { useState } from 'react'
import { Visual } from '../Visual'
import { Account } from '../../assets/svgs'
import { Button } from '../Button'
import { Input } from '../Input'
import { HelpText } from '../HelpText'

export const ReferralCode = ({
  sideBarClose,
  inputs,
  currentObject,
  handleSubmit,
  buttonLabel,
  showHelpText,
  helpText,
  success,
  label,
  description,
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
        label={label}
        element={'popup-header'}
        customStyles={{ width: '100%', maxWidth: '100%' }}
        onClick={sideBarClose}
      />
      <div className='sidebar-body'>
        <div className='referral-code-container'>
          <p className='font-14'>{description}</p>
          <div className='referral-code-inputs'>
            {inputs?.map((params, index) => {
              let selectedOption
              if (params.type === 'lable-input-select') {
                selectedOption = params?.options.find(option => option.value === currentObject[params?.name])
              }
              return (
                <div className='referral-code-input-wrapper' key={index}>
                  <Input
                    key={index}
                    type={params?.type}
                    label={params.title}
                    name={params.name}
                    value={
                      params?.type === 'lable-input-select'
                        ? selectedOption?.name || params?.defaultAny || params?.options[0]?.value
                        : currentObject[params?.name] || params?.defaultAny
                    }
                    customStyles={{ width: '100%' }}
                    selectHandler={opt => {
                      handleInputChange(opt, params)
                    }}
                    placeholder={params?.placeholder}
                    onChange={e => handleInputChange(e, params)}
                    defaultData={params?.options}
                    customInputStyles={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                    svg={params?.type === 'lable-input-select' ? selectedOption?.svg : params?.svg}
                  />
                  {params?.rightText && <span className='font-14 referral-code-input-right'>{params?.rightText}</span>}
                </div>
              )
            })}
          </div>
          <Button
            label={buttonLabel}
            size={'btn-lg'}
            type={'btn-primary'}
            element={'button'}
            customStyles={{
              margin: '0',
              width: '100%',
              backgroundColor: '#C38C5C',
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
