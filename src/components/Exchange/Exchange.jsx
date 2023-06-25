import './Exchange.css'
import React, { useState } from 'react'
import { Visual } from '../Visual'
import { Account } from '../../assets/svgs'
import { Button } from '../Button'
import { Input } from '../Input'
import { HelpText } from '../HelpText'

export const Exchange = ({
  accountType,
  sideBarClose,
  inputs,
  currentObject,
  cardImg,
  accounts,
  handleSubmit,
  buttonLabel,
  showHelpText,
  helpText,
  success,
  accountBalance,
  accountBalanceSecond,
  label,
}) => {
  const [card, setCard] = useState({})
  const [cardsSelectOpen, setCardsSelectOpen] = useState(true)
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
        <div className='exchange-container'>
          <div className='exchange-card'>
            <img src={cardImg} className='exchange-card-img' />
            <div className='exchange-card_header'>
              <Account type={accountType.toLowerCase()} />
              <h4 className='font-16'>{accountType.toUpperCase()} account</h4>
            </div>
            <div className='exchange-card_content'>
              <h4 className='font-14'>{accountType.toUpperCase()} Balance</h4>
              <p>{accountBalance}</p>
              <span className='font-14'>{accountBalanceSecond}</span>
            </div>
          </div>

          {!cardsSelectOpen && (
            <div className='exchange-accounts-card-container'>
              <p className='font-12'>Account</p>
              <div
                className='exchange-accounts-card'
                onClick={() => {
                  setCardsSelectOpen(true)
                }}
              >
                <div className='exchange-account-titles'>
                  {card?.svg}
                  <p className='font-14'>{card?.title}</p>
                </div>
                <div className='exchange-account-values-container'>
                  <div className='exchange-account-values'>
                    <p className='font-12'>{card?.value}</p>
                    <span className='font-12'>{card?.price}</span>
                  </div>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4.99919 7.08332C5.10888 7.0826 5.21762 7.10358 5.31917 7.14505C5.42071 7.18653 5.51305 7.24768 5.59086 7.32499L9.40753 11.15C9.48511 11.2279 9.57731 11.2897 9.67885 11.3319C9.78038 11.3741 9.88925 11.3958 9.99919 11.3958C10.1091 11.3958 10.218 11.3741 10.3195 11.3319C10.4211 11.2897 10.5133 11.2279 10.5909 11.15L14.4075 7.32499C14.4852 7.24729 14.5775 7.18566 14.679 7.14361C14.7805 7.10155 14.8893 7.07991 14.9992 7.07991C15.1091 7.07991 15.2179 7.10155 15.3194 7.14361C15.4209 7.18566 15.5132 7.24729 15.5909 7.32499C15.6686 7.40269 15.7302 7.49493 15.7722 7.59645C15.8143 7.69797 15.8359 7.80677 15.8359 7.91666C15.8359 8.02654 15.8143 8.13534 15.7722 8.23686C15.7302 8.33838 15.6686 8.43062 15.5909 8.50832L11.7659 12.325C11.2909 12.7813 10.6578 13.0361 9.99919 13.0361C9.34056 13.0361 8.70748 12.7813 8.23253 12.325L4.40753 8.50832C4.29042 8.39161 4.21063 8.24272 4.17831 8.08057C4.14598 7.91841 4.16258 7.75031 4.22598 7.59761C4.28938 7.44491 4.39673 7.31449 4.53441 7.22292C4.67208 7.13136 4.83385 7.08276 4.99919 7.08332Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {cardsSelectOpen && (
            <div className='exchange-accounts-container'>
              <h2>Choose the Account</h2>
              {accounts?.map((item, index) => (
                <div
                  className='exchange-accounts-card'
                  key={index}
                  onClick={() => {
                    setCard(item)
                    setCardsSelectOpen(false)
                  }}
                >
                  <div className='exchange-account-titles'>
                    {item?.svg}
                    <p className='font-14'>{item?.title}</p>
                  </div>
                  <div className='exchange-account-values'>
                    <p className='font-12'>{item?.value}</p>
                    <span className='font-12'>{item?.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!cardsSelectOpen && (
            <div className='exchange-inputs-wrapper'>
              <h3 className='font-20'>Transfer Amount</h3>
              <div className='exchange-inputs'>
                {inputs?.map((params, index) => {
                  let selectedOption
                  if (params.type === 'lable-input-select') {
                    selectedOption = params?.options.find(option => option.value === currentObject[params?.name])
                  }
                  return (
                    <div className='exchange-input-wrapper' key={index}>
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
                      {params?.rightText && <span className='font-14 exchange-input-right'>{params?.rightText}</span>}
                    </div>
                  )
                })}
              </div>
              <div className='exchange-rate-card'>
                <h4 className='font-14'>Rate</h4>
                <p className='font-14'>1 CPL = 0.3403.43 BTC</p>
              </div>
            </div>
          )}

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
