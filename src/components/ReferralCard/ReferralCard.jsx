import { useState } from 'react'
import './ReferralCard.css'
import { useMobileWidth } from '../../hooks/useMobileWidth'

export const ReferralCard = ({ type, label, item, customStyles, labelTwo, totalData, referral }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  const { width } = useMobileWidth()

  const handleCopy = () => {
    navigator.clipboard
      .writeText(referral)
      .then(() => {
        console.log('Text copied to clipboard')
        setShowTooltip(true)
        setShowCopiedMessage(true)
        setTimeout(() => {
          setShowTooltip(false)
        }, 1000)
        setTimeout(() => {
          setShowCopiedMessage(false)
        }, 1500)
      })
      .catch(error => {
        console.error('Error copying text: ', error)
      })
  }

  let element = null

  if (type === 'default') {
    element = (
      <div className={'referral-card-wrapper'} style={customStyles}>
        <div className={'referal-card-body'}>
          <h2 className={'font-20'}>{item.label}</h2>
          <p className={'font-16'}>{item.description}</p>
        </div>
        {item.button}
      </div>
    )
  }

  if (type === 'total-info') {
    element = (
      <div className={'total-referral-info-container'} style={customStyles}>
        <div className={`total-referral-info`}>
          <h2 className='font-20'>{label}</h2>
          <div
            className='referral-copy-container'
            onClick={handleCopy}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => {
              if (!showCopiedMessage) setShowTooltip(false)
            }}
          >
            <p className={`${width <= 767 ? 'font-14' : 'font-16'}`}>{referral}</p>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='referral-copy-svg'
            >
              <path
                d='M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className={`referral-tooltip ${showTooltip ? 'referral-tooltip-visible' : ''} font-14`}>
            {showCopiedMessage ? 'Copied!' : 'Copy to Clipboard'}
          </div>
        </div>
        <div className={'total-referral-rebates'}>
          <h2 className='font-20'>{labelTwo}</h2>
          {totalData.map((item, index) => (
            <div key={index}>
              <span style={{ display: 'block' }}>${item.value}</span>
              <p className='font-16'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return element
}
