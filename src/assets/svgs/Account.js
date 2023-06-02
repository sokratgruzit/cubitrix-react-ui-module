import React from 'react'

const Account = ({ className, type, ...props }) => {
  let element = null

  if (type === 'spl') {
    return (element = (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        {...props}
      >
        <g filter='url(#filter0_b_3172_9955)'>
          <rect width='40' height='40' rx='16' fill='white' fillOpacity='0.05' />
        </g>
        <g clipPath='url(#clip0_3172_9955)'>
          <path
            d='M20.0029 8.99992C19.9991 8.99872 19.995 8.99872 19.9912 8.99992C16.9513 10.7539 14.4271 13.278 12.6731 16.318C10.9191 19.3579 9.99711 22.8064 10 26.3161C13.0386 28.0705 16.4855 28.994 19.9942 28.994C23.5028 28.994 26.9497 28.0705 29.9883 26.3161C29.9904 22.8073 29.0687 19.3597 27.3159 16.32C25.5631 13.2804 23.0409 10.7557 20.0029 8.99992V8.99992ZM23.9994 22.9292C22.7844 23.6319 21.4056 24.0019 20.002 24.0019C18.5984 24.0019 17.2195 23.6319 16.0045 22.9292C16.004 21.5271 16.3728 20.1496 17.0737 18.9352C17.7745 17.7208 18.7828 16.7124 19.9971 16.0113C21.2122 16.7117 22.2217 17.7195 22.9242 18.9334C23.6267 20.1473 23.9976 21.5247 23.9994 22.9273V22.9292Z'
            fill='white'
          />
          <path
            d='M20.0029 9V15.9997C21.2183 16.7018 22.2274 17.7115 22.9289 18.9272C23.6305 20.1429 23.9997 21.5218 23.9994 22.9254L30 26.3201C30.0012 22.8095 29.0779 19.3605 27.323 16.3201C25.568 13.2796 23.0434 10.7549 20.0029 9V9Z'
            fill='white'
          />
          <path
            d='M20.0029 9V15.9997C21.2183 16.7018 22.2274 17.7115 22.9289 18.9272C23.6305 20.1429 23.9997 21.5218 23.9994 22.9254L30 26.3201C30.0012 22.8095 29.0779 19.3605 27.323 16.3201C25.568 13.2796 23.0434 10.7549 20.0029 9V9Z'
            fill='url(#paint0_linear_3172_9955)'
          />
          <path
            d='M19.9912 8.99985C16.9513 10.7538 14.4271 13.2779 12.6731 16.3179C10.9191 19.3579 9.99711 22.8064 10 26.316L16.0025 22.9272C16.0024 21.5254 16.3714 20.1483 17.0722 18.9343C17.7731 17.7203 18.7811 16.7121 19.9951 16.0112V8.99985C19.9938 8.99972 19.9925 8.99972 19.9912 8.99985Z'
            fill='white'
          />
          <path
            d='M19.9912 8.99985C16.9513 10.7538 14.4271 13.2779 12.6731 16.3179C10.9191 19.3579 9.99711 22.8064 10 26.316L16.0025 22.9272C16.0024 21.5254 16.3714 20.1483 17.0722 18.9343C17.7731 17.7203 18.7811 16.7121 19.9951 16.0112V8.99985C19.9938 8.99972 19.9925 8.99972 19.9912 8.99985Z'
            fill='url(#paint1_linear_3172_9955)'
          />
          <path
            d='M23.9994 22.9272C22.7844 23.6299 21.4056 23.9999 20.0019 23.9999C18.5983 23.9999 17.2195 23.6299 16.0045 22.9272L10 26.3161C13.036 28.0742 16.4829 28.9981 19.9912 28.9941C23.5014 28.9986 26.9504 28.0747 29.9883 26.3161L23.9994 22.9272Z'
            fill='white'
          />
          <path
            d='M23.9994 22.9272C22.7844 23.6299 21.4056 23.9999 20.0019 23.9999C18.5983 23.9999 17.2195 23.6299 16.0045 22.9272L10 26.3161C13.036 28.0742 16.4829 28.9981 19.9912 28.9941C23.5014 28.9986 26.9504 28.0747 29.9883 26.3161L23.9994 22.9272Z'
            fill='url(#paint2_linear_3172_9955)'
          />
        </g>
        <defs>
          <filter
            id='filter0_b_3172_9955'
            x='-40'
            y='-40'
            width='120'
            height='120'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feGaussianBlur in='BackgroundImageFix' stdDeviation='20' />
            <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_3172_9955' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_3172_9955' result='shape' />
          </filter>
          <linearGradient
            id='paint0_linear_3172_9955'
            x1='21'
            y1='19.8'
            x2='27.25'
            y2='16.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_3172_9955'
            x1='12.25'
            y1='16.4999'
            x2='20'
            y2='20.3999'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_3172_9955'
            x1='20.001'
            y1='27.4999'
            x2='20'
            y2='21.9999'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <clipPath id='clip0_3172_9955'>
            <rect width='20' height='20' fill='white' transform='translate(10 9)' />
          </clipPath>
        </defs>
      </svg>
    ))
  }

  return element
}

export default Account
