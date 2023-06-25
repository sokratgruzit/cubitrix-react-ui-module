import { Link } from 'react-router-dom'
import { useMobileWidth } from '../../hooks/useMobileWidth'

import { LoadingScreen } from '../LoadingScreen'

import './DashboardSharedLayout.css'

export const DashboardSharedLayout = ({ links, children, loading }) => {
  const { width } = useMobileWidth()

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className='dashboard-content-container'>
          <div className='dashboard-sidebar-container'>
            <div className='dashboard-sidebar-links'>
              {links?.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={`${width <= 1025 ? 'font-12' : 'font-14'} dashboard-sidebar-link ${
                    location.pathname === item.to ? 'active' : ''
                  }`}
                >
                  {item.svg}
                  {item.label}
                </Link>
              ))}
            </div>
            <div className='sidebar-footer' style={{ display: `${width <= 1025 ? 'none' : 'flex'}` }}>
              <div className='sidebar-footer-support font-14'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8 22.3199C7.72 22.3199 7.43 22.2499 7.17 22.1099C6.6 21.8099 6.25 21.2099 6.25 20.5699V19.1499C3.23 18.8399 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.97 22.0299C8.68 22.2199 8.34 22.3199 8 22.3199ZM7 3.17994C4.42 3.17994 2.75 4.84994 2.75 7.42994V13.4299C2.75 16.0099 4.42 17.6799 7 17.6799C7.41 17.6799 7.75 18.0199 7.75 18.4299V20.5599C7.75 20.6899 7.83 20.7499 7.88 20.7799C7.93 20.8099 8.03 20.8399 8.14 20.7699L12.59 17.8099C12.71 17.7299 12.86 17.6799 13.01 17.6799H17.01C19.59 17.6799 21.26 16.0099 21.26 13.4299V7.42994C21.26 4.84994 19.59 3.17994 17.01 3.17994H7Z'
                    fill='rgba(255, 255, 255)'
                  />
                  <path
                    d='M11.9998 12.1104C11.5898 12.1104 11.2498 11.7704 11.2498 11.3604V11.1504C11.2498 9.99035 12.0998 9.42035 12.4198 9.20035C12.7898 8.95035 12.9098 8.78035 12.9098 8.52035C12.9098 8.02035 12.4998 7.61035 11.9998 7.61035C11.4998 7.61035 11.0898 8.02035 11.0898 8.52035C11.0898 8.93035 10.7498 9.27035 10.3398 9.27035C9.92984 9.27035 9.58984 8.93035 9.58984 8.52035C9.58984 7.19035 10.6698 6.11035 11.9998 6.11035C13.3298 6.11035 14.4098 7.19035 14.4098 8.52035C14.4098 9.66035 13.5698 10.2304 13.2598 10.4404C12.8698 10.7004 12.7498 10.8704 12.7498 11.1504V11.3604C12.7498 11.7804 12.4098 12.1104 11.9998 12.1104Z'
                    fill='rgba(255, 255, 255)'
                  />
                  <path
                    d='M12 14.6001C11.9016 14.6002 11.8042 14.5809 11.7133 14.5434C11.6224 14.5059 11.5397 14.4508 11.4701 14.3814C11.4004 14.3119 11.3452 14.2294 11.3074 14.1386C11.2696 14.0478 11.2501 13.9504 11.25 13.8521C11.2499 13.7537 11.2691 13.6563 11.3066 13.5653C11.3442 13.4744 11.3992 13.3918 11.4687 13.3221C11.5381 13.2525 11.6206 13.1972 11.7114 13.1594C11.8023 13.1217 11.8996 13.1022 11.998 13.1021C12.1966 13.1018 12.3873 13.1804 12.5279 13.3207C12.6686 13.461 12.7477 13.6514 12.748 13.8501C12.7483 14.0487 12.6696 14.2393 12.5293 14.38C12.3891 14.5206 12.1986 14.5998 12 14.6001Z'
                    fill='rgba(255, 255, 255)'
                  />
                </svg>
                Help & Support
              </div>
              <div className='sidebar-footer-copyright font-14'>
                <Link to='#'>&copy; 2023 All rights reserved</Link>
              </div>
            </div>
          </div>
          <div
            className='dashboard-main-container'
            style={{ width: `${width <= 1025 ? '100%' : 'calc(100% - 255px)'}` }}
          >
            <div className='dashboard-border-container'>
              <div className='dashboard-border' />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
