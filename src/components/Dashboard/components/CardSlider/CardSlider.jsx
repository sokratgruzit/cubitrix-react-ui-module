import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './CardSlider.css'

export const CardSlider = () => {
  const [accountType, setAccountType] = useState('main')
  const swiperRef = useRef(null)
  const [isPrevDisabled, setIsPrevDisabled] = useState(true)
  const [isNextDisabled, setIsNextDisabled] = useState(false)
  const [slidePercentage, setSlidePercentage] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper

      const updateNavigation = () => {
        setIsPrevDisabled(swiperInstance.isBeginning)
        setIsNextDisabled(swiperInstance.isEnd)

        const { translate, width } = swiperInstance
        const slideWidth = width / swiperInstance.slides.length
        const slideIndex = Math.round(-translate / slideWidth)
        const percentage = (slideIndex / (swiperInstance.slides.length - 1)) * 100
        setSlidePercentage(percentage)
      }

      swiperInstance.on('slideChange', updateNavigation)

      return () => {
        swiperInstance.off('slideChange', updateNavigation)
      }
    }
  }, [])

  const moveNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const movePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const data = [
    {
      svg: (
        <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.9349 14.6869C30.4628 11.0751 27.7123 9.13038 23.9478 7.82461L25.1702 2.9349L22.1975 2.18478L21.0028 6.90779C20.2249 6.69942 19.4192 6.51883 18.6136 6.33825L19.8082 1.53189L16.8355 0.795654L15.613 5.68536L13.7238 5.24084L9.55648 4.199L8.80636 7.38009C8.80636 7.38009 11.0151 7.89406 10.9734 7.92184C11.3801 7.98064 11.7485 8.19389 12.002 8.51727C12.2555 8.84064 12.3747 9.24928 12.3347 9.65825L10.9456 15.2147C11.0512 15.2339 11.1539 15.2666 11.2512 15.312L10.9456 15.2564L9.01473 23.0216C8.97063 23.1597 8.8996 23.2877 8.80574 23.3982C8.71188 23.5088 8.59705 23.5996 8.46788 23.6655C8.33872 23.7313 8.19778 23.771 8.05321 23.782C7.90864 23.7931 7.7633 23.7755 7.62561 23.73L5.45858 23.1883L4 26.6611L7.87565 27.6196L10.001 28.1752L8.76468 33.1205L11.7513 33.8706L12.9737 28.967C13.7794 29.1893 14.5712 29.3977 15.3491 29.5782L14.1267 34.4679L17.1133 35.2042L18.3496 30.2589C23.4338 31.2174 27.2539 30.8423 28.8653 26.2305C30.1571 22.5354 28.8653 20.3962 26.087 19.007C27.1135 18.8088 28.0463 18.2785 28.7417 17.4978C29.437 16.7171 29.8563 15.7294 29.9349 14.6869ZM23.1143 24.2301C22.1975 27.9391 15.9603 25.9387 13.9461 25.4387L15.5714 18.8542C17.5995 19.3265 24.0728 20.3267 23.1143 24.1746V24.2301ZM24.045 14.6313C23.1977 17.993 18.0162 16.2844 16.3215 15.8676L17.8079 9.86661C19.4887 10.2834 24.9202 11.0613 24.045 14.5757V14.6313Z'
            fill='white'
          />
        </svg>
      ),
      title: 'CPL Account',
      value: '1,400.00',
    },
    {
      svg: (
        <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.9349 14.6869C30.4628 11.0751 27.7123 9.13038 23.9478 7.82461L25.1702 2.9349L22.1975 2.18478L21.0028 6.90779C20.2249 6.69942 19.4192 6.51883 18.6136 6.33825L19.8082 1.53189L16.8355 0.795654L15.613 5.68536L13.7238 5.24084L9.55648 4.199L8.80636 7.38009C8.80636 7.38009 11.0151 7.89406 10.9734 7.92184C11.3801 7.98064 11.7485 8.19389 12.002 8.51727C12.2555 8.84064 12.3747 9.24928 12.3347 9.65825L10.9456 15.2147C11.0512 15.2339 11.1539 15.2666 11.2512 15.312L10.9456 15.2564L9.01473 23.0216C8.97063 23.1597 8.8996 23.2877 8.80574 23.3982C8.71188 23.5088 8.59705 23.5996 8.46788 23.6655C8.33872 23.7313 8.19778 23.771 8.05321 23.782C7.90864 23.7931 7.7633 23.7755 7.62561 23.73L5.45858 23.1883L4 26.6611L7.87565 27.6196L10.001 28.1752L8.76468 33.1205L11.7513 33.8706L12.9737 28.967C13.7794 29.1893 14.5712 29.3977 15.3491 29.5782L14.1267 34.4679L17.1133 35.2042L18.3496 30.2589C23.4338 31.2174 27.2539 30.8423 28.8653 26.2305C30.1571 22.5354 28.8653 20.3962 26.087 19.007C27.1135 18.8088 28.0463 18.2785 28.7417 17.4978C29.437 16.7171 29.8563 15.7294 29.9349 14.6869ZM23.1143 24.2301C22.1975 27.9391 15.9603 25.9387 13.9461 25.4387L15.5714 18.8542C17.5995 19.3265 24.0728 20.3267 23.1143 24.1746V24.2301ZM24.045 14.6313C23.1977 17.993 18.0162 16.2844 16.3215 15.8676L17.8079 9.86661C19.4887 10.2834 24.9202 11.0613 24.045 14.5757V14.6313Z'
            fill='white'
          />
        </svg>
      ),
      title: 'CPL Account',
      value: '1,400.00',
    },
    {
      svg: (
        <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.9349 14.6869C30.4628 11.0751 27.7123 9.13038 23.9478 7.82461L25.1702 2.9349L22.1975 2.18478L21.0028 6.90779C20.2249 6.69942 19.4192 6.51883 18.6136 6.33825L19.8082 1.53189L16.8355 0.795654L15.613 5.68536L13.7238 5.24084L9.55648 4.199L8.80636 7.38009C8.80636 7.38009 11.0151 7.89406 10.9734 7.92184C11.3801 7.98064 11.7485 8.19389 12.002 8.51727C12.2555 8.84064 12.3747 9.24928 12.3347 9.65825L10.9456 15.2147C11.0512 15.2339 11.1539 15.2666 11.2512 15.312L10.9456 15.2564L9.01473 23.0216C8.97063 23.1597 8.8996 23.2877 8.80574 23.3982C8.71188 23.5088 8.59705 23.5996 8.46788 23.6655C8.33872 23.7313 8.19778 23.771 8.05321 23.782C7.90864 23.7931 7.7633 23.7755 7.62561 23.73L5.45858 23.1883L4 26.6611L7.87565 27.6196L10.001 28.1752L8.76468 33.1205L11.7513 33.8706L12.9737 28.967C13.7794 29.1893 14.5712 29.3977 15.3491 29.5782L14.1267 34.4679L17.1133 35.2042L18.3496 30.2589C23.4338 31.2174 27.2539 30.8423 28.8653 26.2305C30.1571 22.5354 28.8653 20.3962 26.087 19.007C27.1135 18.8088 28.0463 18.2785 28.7417 17.4978C29.437 16.7171 29.8563 15.7294 29.9349 14.6869ZM23.1143 24.2301C22.1975 27.9391 15.9603 25.9387 13.9461 25.4387L15.5714 18.8542C17.5995 19.3265 24.0728 20.3267 23.1143 24.1746V24.2301ZM24.045 14.6313C23.1977 17.993 18.0162 16.2844 16.3215 15.8676L17.8079 9.86661C19.4887 10.2834 24.9202 11.0613 24.045 14.5757V14.6313Z'
            fill='white'
          />
        </svg>
      ),
      title: 'CPL Account',
      value: '1,400.00',
    },
    {
      svg: (
        <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.9349 14.6869C30.4628 11.0751 27.7123 9.13038 23.9478 7.82461L25.1702 2.9349L22.1975 2.18478L21.0028 6.90779C20.2249 6.69942 19.4192 6.51883 18.6136 6.33825L19.8082 1.53189L16.8355 0.795654L15.613 5.68536L13.7238 5.24084L9.55648 4.199L8.80636 7.38009C8.80636 7.38009 11.0151 7.89406 10.9734 7.92184C11.3801 7.98064 11.7485 8.19389 12.002 8.51727C12.2555 8.84064 12.3747 9.24928 12.3347 9.65825L10.9456 15.2147C11.0512 15.2339 11.1539 15.2666 11.2512 15.312L10.9456 15.2564L9.01473 23.0216C8.97063 23.1597 8.8996 23.2877 8.80574 23.3982C8.71188 23.5088 8.59705 23.5996 8.46788 23.6655C8.33872 23.7313 8.19778 23.771 8.05321 23.782C7.90864 23.7931 7.7633 23.7755 7.62561 23.73L5.45858 23.1883L4 26.6611L7.87565 27.6196L10.001 28.1752L8.76468 33.1205L11.7513 33.8706L12.9737 28.967C13.7794 29.1893 14.5712 29.3977 15.3491 29.5782L14.1267 34.4679L17.1133 35.2042L18.3496 30.2589C23.4338 31.2174 27.2539 30.8423 28.8653 26.2305C30.1571 22.5354 28.8653 20.3962 26.087 19.007C27.1135 18.8088 28.0463 18.2785 28.7417 17.4978C29.437 16.7171 29.8563 15.7294 29.9349 14.6869ZM23.1143 24.2301C22.1975 27.9391 15.9603 25.9387 13.9461 25.4387L15.5714 18.8542C17.5995 19.3265 24.0728 20.3267 23.1143 24.1746V24.2301ZM24.045 14.6313C23.1977 17.993 18.0162 16.2844 16.3215 15.8676L17.8079 9.86661C19.4887 10.2834 24.9202 11.0613 24.045 14.5757V14.6313Z'
            fill='white'
          />
        </svg>
      ),
      title: 'CPL Account',
      value: '1,400.00',
    },
    {
      svg: (
        <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.9349 14.6869C30.4628 11.0751 27.7123 9.13038 23.9478 7.82461L25.1702 2.9349L22.1975 2.18478L21.0028 6.90779C20.2249 6.69942 19.4192 6.51883 18.6136 6.33825L19.8082 1.53189L16.8355 0.795654L15.613 5.68536L13.7238 5.24084L9.55648 4.199L8.80636 7.38009C8.80636 7.38009 11.0151 7.89406 10.9734 7.92184C11.3801 7.98064 11.7485 8.19389 12.002 8.51727C12.2555 8.84064 12.3747 9.24928 12.3347 9.65825L10.9456 15.2147C11.0512 15.2339 11.1539 15.2666 11.2512 15.312L10.9456 15.2564L9.01473 23.0216C8.97063 23.1597 8.8996 23.2877 8.80574 23.3982C8.71188 23.5088 8.59705 23.5996 8.46788 23.6655C8.33872 23.7313 8.19778 23.771 8.05321 23.782C7.90864 23.7931 7.7633 23.7755 7.62561 23.73L5.45858 23.1883L4 26.6611L7.87565 27.6196L10.001 28.1752L8.76468 33.1205L11.7513 33.8706L12.9737 28.967C13.7794 29.1893 14.5712 29.3977 15.3491 29.5782L14.1267 34.4679L17.1133 35.2042L18.3496 30.2589C23.4338 31.2174 27.2539 30.8423 28.8653 26.2305C30.1571 22.5354 28.8653 20.3962 26.087 19.007C27.1135 18.8088 28.0463 18.2785 28.7417 17.4978C29.437 16.7171 29.8563 15.7294 29.9349 14.6869ZM23.1143 24.2301C22.1975 27.9391 15.9603 25.9387 13.9461 25.4387L15.5714 18.8542C17.5995 19.3265 24.0728 20.3267 23.1143 24.1746V24.2301ZM24.045 14.6313C23.1977 17.993 18.0162 16.2844 16.3215 15.8676L17.8079 9.86661C19.4887 10.2834 24.9202 11.0613 24.045 14.5757V14.6313Z'
            fill='white'
          />
        </svg>
      ),
      title: 'CPL Account',
      value: '1,400.00',
    },
    {
      svg: (
        <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.9349 14.6869C30.4628 11.0751 27.7123 9.13038 23.9478 7.82461L25.1702 2.9349L22.1975 2.18478L21.0028 6.90779C20.2249 6.69942 19.4192 6.51883 18.6136 6.33825L19.8082 1.53189L16.8355 0.795654L15.613 5.68536L13.7238 5.24084L9.55648 4.199L8.80636 7.38009C8.80636 7.38009 11.0151 7.89406 10.9734 7.92184C11.3801 7.98064 11.7485 8.19389 12.002 8.51727C12.2555 8.84064 12.3747 9.24928 12.3347 9.65825L10.9456 15.2147C11.0512 15.2339 11.1539 15.2666 11.2512 15.312L10.9456 15.2564L9.01473 23.0216C8.97063 23.1597 8.8996 23.2877 8.80574 23.3982C8.71188 23.5088 8.59705 23.5996 8.46788 23.6655C8.33872 23.7313 8.19778 23.771 8.05321 23.782C7.90864 23.7931 7.7633 23.7755 7.62561 23.73L5.45858 23.1883L4 26.6611L7.87565 27.6196L10.001 28.1752L8.76468 33.1205L11.7513 33.8706L12.9737 28.967C13.7794 29.1893 14.5712 29.3977 15.3491 29.5782L14.1267 34.4679L17.1133 35.2042L18.3496 30.2589C23.4338 31.2174 27.2539 30.8423 28.8653 26.2305C30.1571 22.5354 28.8653 20.3962 26.087 19.007C27.1135 18.8088 28.0463 18.2785 28.7417 17.4978C29.437 16.7171 29.8563 15.7294 29.9349 14.6869ZM23.1143 24.2301C22.1975 27.9391 15.9603 25.9387 13.9461 25.4387L15.5714 18.8542C17.5995 19.3265 24.0728 20.3267 23.1143 24.1746V24.2301ZM24.045 14.6313C23.1977 17.993 18.0162 16.2844 16.3215 15.8676L17.8079 9.86661C19.4887 10.2834 24.9202 11.0613 24.045 14.5757V14.6313Z'
            fill='white'
          />
        </svg>
      ),
      title: 'CPL Account',
      value: '1,400.00',
    },
  ]

  const accounts = [
    {
      title: 'Main account',
      value: 'main',
    },
    {
      title: 'Investment account',
      value: 'investment',
    },
    {
      title: 'Trade account',
      value: 'trade',
    },
    {
      title: 'Loan account',
      value: 'loan',
    },
  ]

  const cardFooterData = [
    {
      title: 'Deposit',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='card-slider-card_footer-item-svg'
        >
          <path d='M6 12H18' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 18V6' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      ),
    },
    {
      title: 'Withdraw',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='card-slider-card_footer-item-svg'
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
      ),
    },
    {
      title: 'Exchange',
      svg: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='card-slider-card_footer-item-svg'
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
      ),
    },
  ]

  return (
    <div className='card-slider-wrapper'>
      <div className='card-slider-navigation'>
        {accounts?.map((item, index) => (
          <div
            className={`card-slider-navigation_item ${accountType === item.value ? 'active' : ''} font-16`}
            key={index}
            onClick={() => setAccountType(item.value)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className='card-slider-content'>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={'auto'}
          className='card-slider-cards-container'
          mousewheel={true}
          freeMode={true}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='card-slider-card'>
                <div className='card-slider-card_header-container'>
                  <div className='card-slider-card_header'>
                    {item.svg}
                    <h4 className='font-16'>{item.title}</h4>
                  </div>
                  <p className='card-slider-card_content'>{item.value}</p>
                </div>
                <div className='card-slider-card_footer'>
                  {cardFooterData?.map((item, index) => (
                    <div className='card-slider-card_footer-item' key={index} onClick={() => console.log(item.title)}>
                      {item.svg}
                      <p className='font-10'>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='card-slider-cards-mover'>
          <div className='card-slider-cards-mover-icons'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={movePrev}
              className={isPrevDisabled ? 'card-slider-cards-mover-icons_active' : ''}
            >
              <path
                d='M9.57 5.92993L3.5 11.9999L9.57 18.0699'
                stroke='white'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M20.4999 12H3.66992'
                stroke='white'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={moveNext}
              className={isNextDisabled ? 'card-slider-cards-mover-icons_active' : ''}
            >
              <path
                d='M14.43 5.92993L20.5 11.9999L14.43 18.0699'
                stroke='white'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.50008 12H20.3301'
                stroke='white'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='card-slider-cards-mover-line-container'>
            <div className='card-slider-cards-mover-line' style={{ width: `${slidePercentage}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
