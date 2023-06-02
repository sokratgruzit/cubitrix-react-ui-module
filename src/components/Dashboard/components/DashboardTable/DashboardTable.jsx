import React, { Fragment, useState } from 'react'

import { Table } from '../../../Table'

import './DashboardTable.css'
import { Visual } from '../../../Visual/Visual'
import { Link } from 'react-router-dom'
import { useMobileWidth } from '../../../../hooks/useMobileWidth'
import { Account, AccountType } from '../../../../assets/svgs'

export const DashboardTable = ({
  type,
  header,
  description,
  rightPanelData,
  data,
  footer,
  tableHeader,
  referralCardsData,
  tableData,
}) => {
  let element = null

  const tableVisualMore = (
    <div className={'dashboard-table-head-wrap'}>
      {rightPanelData?.map((item, index) => (
        <div key={index} className={'dashboard-table-head'}>
          <h3 className={`font-20`}>{item?.value}</h3>
          <p className={`font-16`}>{item?.title}</p>
        </div>
      ))}
    </div>
  )

  const tableFooter = (
    <div className={'dashboard-table-footer'}>
      <Link to={footer?.link}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.50018 17.9999C8.49931 17.8683 8.52448 17.7378 8.57426 17.616C8.62403 17.4941 8.69741 17.3833 8.79018 17.2899L13.3802 12.7099C13.4737 12.6168 13.5479 12.5062 13.5985 12.3844C13.6491 12.2625 13.6751 12.1319 13.6751 11.9999C13.6751 11.868 13.6491 11.7374 13.5985 11.6155C13.5479 11.4937 13.4737 11.383 13.3802 11.2899L8.79018 6.70994C8.69694 6.6167 8.62298 6.50601 8.57252 6.38419C8.52206 6.26237 8.49609 6.1318 8.49609 5.99994C8.49609 5.86808 8.52206 5.73751 8.57252 5.61569C8.62298 5.49387 8.69694 5.38318 8.79018 5.28994C8.88342 5.1967 8.99411 5.12274 9.11593 5.07228C9.23775 5.02182 9.36832 4.99585 9.50018 4.99585C9.63204 4.99585 9.76261 5.02182 9.88443 5.07228C10.0063 5.12274 10.1169 5.1967 10.2102 5.28994L14.7902 9.87994C15.3377 10.4499 15.6436 11.2096 15.6436 11.9999C15.6436 12.7903 15.3377 13.55 14.7902 14.1199L10.2102 18.7099C10.0701 18.8505 9.89145 18.9462 9.69687 18.985C9.50229 19.0238 9.30057 19.0039 9.11733 18.9278C8.93408 18.8517 8.77758 18.7229 8.6677 18.5577C8.55782 18.3925 8.49951 18.1983 8.50018 17.9999Z'
            fill='#45F4EA'
          />
        </svg>
        <p className={`font-16`}>{footer?.label}</p>
      </Link>
    </div>
  )

  if (type === 'transactions') {
    return (element = (
      <>
        <Table
          tableHeadMore={
            <div className='dashboard-table-header-container'>
              <Visual
                element={'table-header'}
                label={header}
                description={description}
                fontSize={'font-20'}
                customStyles={{ border: 'none', padding: '0' }}
                buttons={tableVisualMore}
              />
            </div>
          }
          tableData={tableData}
          tableFooter={tableFooter}
          customStyles={{ border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px' }}
          customTableMoreStyles={{
            display: 'none',
          }}
        />
      </>
    ))
  }

  if (type === 'referral-code') {
    return (element = (
      <div className='dashboard-table-referral-wrapper'>
        <h2 className='dashboard-table-header-title'>Referral</h2>
        <div className='dashboard-table-referral-card-container'>
          {referralCardsData?.map((item, index) => (
            <div
              key={index}
              className={`dashboard-table-referral-card-wrap ${
                item.active ? 'dashboard-table-referral-card-wrap__active' : ''
              }`}
            >
              <h3>{item.title}</h3>
              <div className='dashboard-table-referral-card'>
                {item?.data?.map((item, index) => (
                  <Fragment key={index}>
                    <div className={'dashboard-table-referral-card-content'}>
                      <h4 className={`font-12`}>{item?.title}</h4>
                      <p>{item?.value}</p>
                    </div>
                    {index === 0 && (
                      <svg width='1' height='26' viewBox='0 0 1 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <line opacity='0.1' x1='0.5' y1='2.18557e-08' x2='0.499999' y2='26' stroke='white' />
                      </svg>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Table
          tableHeadMore={
            <div className='dashboard-table-header-container'>
              <Visual
                element={'table-header'}
                label={header}
                description={description}
                fontSize={'font-20'}
                customStyles={{ border: 'none', padding: '0' }}
              />
            </div>
          }
          tableData={tableData}
          tableFooter={tableFooter}
          tableHead={tableHeader}
          customStyles={{ border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px' }}
          customHeadStyles={{
            background: 'none',
            padding: '10px 20px',
            borderBottom: 'px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
          }}
          customTableMoreStyles={{
            display: 'none',
          }}
        />
      </div>
    ))
  }

  if (type === 'referral-history') {
    return (element = (
      <>
        <Table
          tableHeadMore={
            <div className='dashboard-table-header-container'>
              <Visual
                element={'table-header'}
                label={header}
                description={description}
                fontSize={'font-20'}
                customStyles={{ border: 'none', padding: '0' }}
              />
            </div>
          }
          tableData={tableData}
          tableFooter={tableFooter}
          tableHead={tableHeader}
          customStyles={{ border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px' }}
          customHeadStyles={{
            background: 'none',
            padding: '10px 20px',
            borderBottom: 'px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
          }}
          customTableMoreStyles={{
            display: 'none',
          }}
        />
      </>
    ))
  }

  return element
}
