import './TransferFromAcc.css'
import React from 'react'
import { Visual } from '../Visual'
import { Account } from '../../assets/svgs'
import { Button } from '../Button'
import { Input } from '../Input'

export const TransferFromAcc = ({ sideBarClose, inputs, currentObject, cardImg, handleSubmit }) => {
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
        label={'Withdraw'}
        element={'popup-header'}
        customStyles={{ width: '100%', maxWidth: '100%' }}
        onClick={sideBarClose}
      />
      <div className='sidebar-body'>
        <div className='withdraw-to-acc-container'>
          <div className='withdraw-to-acc-card'>
            <img src={cardImg} className='withdraw-to-acc-card-img' />
            <div className='withdraw-to-acc-card_header'>
              <Account type={'cpl'} />
              <h4 className='font-16'>CPL account</h4>
            </div>
            <div className='withdraw-to-acc-card_content'>
              <h4 className='font-14'>Account Balance</h4>
              <p>1,400.00</p>
              <span className='font-14'>$203532</span>
            </div>
          </div>
          <div className='withdraw-to-acc-inputs'>
            {inputs?.map((params, index) => (
              <div className='withdraw-to-acc-input-wrapper' key={index}>
                <Input
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
                {params?.rightText && <span className='font-14 withdraw-to-acc-input-right'>{params?.rightText}</span>}
              </div>
            ))}
          </div>
          <Button
            label={'Continue'}
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
      </div>
    </>
  )
}
