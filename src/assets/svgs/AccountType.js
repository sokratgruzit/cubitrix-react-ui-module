import React from 'react'

const AccountType = ({ className, type, ...props }) => {
  let element = null

  if (type === 'top-up') {
    return (element = (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        {...props}
      >
        <path d='M6 12H18' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M12 18V6' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ))
  }

  if (type === 'withraw') {
    return (element = (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        {...props}
      >
        <path
          d='M18.0697 11.07L11.9997 5L5.92969 11.07'
          stroke='white'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 18.5L12 5.5'
          stroke='white'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ))
  }

  if (type === 'exchange') {
    return (element = (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        {...props}
      >
        <path
          d='M13.6756 4L15.8444 6.08L8.77778 6.06222C5.60444 6.06222 3 8.66667 3 11.8578C3 13.4489 3.64889 14.8978 4.69778 15.9467'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.1201 20.0001L7.95117 17.9201L15.0178 17.9379C18.1912 17.9379 20.7956 15.3335 20.7956 12.1424C20.7956 10.5512 20.1467 9.10236 19.0978 8.05347'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ))
  }

  if (type === 'transfer') {
    return (element = (
      <svg
        className={className}
        {...props}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.00005 11.3422C7.00005 16.5 18 16 21.9938 10.62M21.9938 10.62L19 10.5M21.9938 10.62L21.9938 13.5'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ))
  }

  return element
}

export default AccountType
