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
          <div className={`referral-tooltip ${showTooltip ? 'referral-tooltip-visible' : ''}`}>
            <svg width='185' height='73' viewBox='0 0 185 73' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_d_153_416)'>
                <mask id='path-1-inside-1_153_416' fill='white'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24 4C15.1634 4 8 11.1634 8 20V38C8 46.8366 15.1634 54 24 54H85.0718L90.5785 59.5638C91.3612 60.3546 92.6388 60.3546 93.4215 59.5638L98.9282 54H161C169.837 54 177 46.8366 177 38V20C177 11.1634 169.837 4 161 4H24Z'
                  />
                </mask>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M24 4C15.1634 4 8 11.1634 8 20V38C8 46.8366 15.1634 54 24 54H85.0718L90.5785 59.5638C91.3612 60.3546 92.6388 60.3546 93.4215 59.5638L98.9282 54H161C169.837 54 177 46.8366 177 38V20C177 11.1634 169.837 4 161 4H24Z'
                  fill='#0D1E21'
                />
                <path
                  d='M85.0718 54L85.7825 53.2965L85.489 53H85.0718V54ZM90.5785 59.5638L89.8678 60.2672L90.5785 59.5638ZM93.4215 59.5638L94.1322 60.2672L93.4215 59.5638ZM98.9282 54V53H98.511L98.2175 53.2965L98.9282 54ZM9 20C9 11.7157 15.7157 5 24 5V3C14.6112 3 7 10.6112 7 20H9ZM9 38V20H7V38H9ZM24 53C15.7157 53 9 46.2843 9 38H7C7 47.3888 14.6112 55 24 55V53ZM85.0718 53H24V55H85.0718V53ZM91.2893 58.8603L85.7825 53.2965L84.3611 54.7035L89.8678 60.2672L91.2893 58.8603ZM92.7107 58.8603C92.3194 59.2557 91.6806 59.2557 91.2893 58.8603L89.8678 60.2672C91.0418 61.4534 92.9582 61.4534 94.1322 60.2672L92.7107 58.8603ZM98.2175 53.2965L92.7107 58.8603L94.1322 60.2672L99.6389 54.7035L98.2175 53.2965ZM161 53H98.9282V55H161V53ZM176 38C176 46.2843 169.284 53 161 53V55C170.389 55 178 47.3888 178 38H176ZM176 20V38H178V20H176ZM161 5C169.284 5 176 11.7157 176 20H178C178 10.6112 170.389 3 161 3V5ZM24 5H161V3H24V5Z'
                  fill='#C38C5C'
                  mask='url(#path-1-inside-1_153_416)'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_153_416'
                  x='0'
                  y='0'
                  width='185'
                  height='72.1569'
                  filterUnits='userSpaceOnUse'
                  colorInterpolation='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0' />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_153_416' />
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_153_416' result='shape' />
                </filter>
              </defs>
            </svg>
            <p className='font-14'>{showCopiedMessage ? 'Copied!' : 'Copy to Clipboard'}</p>
          </div>
        </div>
        <div className={'total-referral-rebates'}>
          <h2 className='font-20'>{labelTwo}</h2>
          {totalData.map((item, index) => (
            <div key={index}>
              <span style={{ display: 'block' }}>{item.value}</span>
              <p className='font-16'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return element
}
