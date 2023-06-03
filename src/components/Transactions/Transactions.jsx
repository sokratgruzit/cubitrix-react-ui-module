import React, { useState } from 'react'

import './Transactions.css'
import { Table } from '../Table'
import { Visual } from '../Visual'
import { TableElement } from '../TableElement'
import { useMobileWidth } from '../../hooks/useMobileWidth'
import { Link } from 'react-router-dom'
import { FilterBox } from '../FilterBox'
import { Input } from '../Input'

export const Transactions = ({
  tableHead,
  data,
  paginationCurrent,
  paginationTotal,
  paginationEvent,
  header,
  description,
  rightPanelData,
  footer,
  inputs,
  currentObject,
  loading,
  tableEmpty,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null)
  const { width } = useMobileWidth()

  let mobileExpandFunc = id => {
    if (width <= 1300) {
      if (id !== mobileExpand) {
        setMobileExpand(id)
      } else {
        setMobileExpand(null)
      }
    }
  }

  let mobile = width <= 1300

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

  let tableData
  tableData = data?.map((item, index) => {
    const createdAt = new Date(item?.createdAt)
    const createdTime = createdAt.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    })
    return (
      <div
        className={`table-parent ${mobileExpand == item._id ? 'active' : ''} dashboard-table-parent`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item._id)
        }}
      >
        <div className='table'>
          <div
            className={`td col ${tableHead[0].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? tableHead[0].mobileWidth : tableHead[0].width}%`,
            }}
          >
            {/* <Account type={'spl'} /> */}
            <span>{item?.from}</span>
          </div>
          <div
            className={`td col ${tableHead[1].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? tableHead[1].mobileWidth : tableHead[0].width}%`,
            }}
          >
            {/* <Account type={'spl'} /> */}
            <span>{item?.to}</span>
          </div>
          <div
            className={`td ${tableHead[2].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? tableHead[2].mobileWidth : tableHead[2].width}%`,
            }}
          >
            {/* <AccountType type={'top-up'} /> */}
            <span>{item?.tx_type}</span>
          </div>
          <div
            className={`td ${tableHead[3].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? tableHead[3].mobileWidth : tableHead[3].width}%`,
            }}
          >
            <span>{createdTime}</span>
          </div>
          <div
            className={`td ${tableHead[4].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? tableHead[4].mobileWidth : tableHead[4].width}%`,
            }}
          >
            <span>{item?.amount}</span>
          </div>
        </div>
        <div className='table-more' />
        <div className='icon-place' style={{ height: '40px' }}>
          <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325'
              stroke='white'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='table-mobile'>
          <div className='table-mobile-content'>
            <div className='td'>
              <div className='mobile-ttl'>{tableHead[1].name}</div>
              <span>{item?.to}</span>
            </div>
            <div className='td'>
              <div className='mobile-ttl'>{tableHead[2].name}</div>
              <span>{item?.tx_type}</span>
            </div>
            <div className='td'>
              <div className='mobile-ttl'>{tableHead[3].name}</div>
              <span>{createdTime}</span>
            </div>
            {width < 500 && (
              <div className='td'>
                <div className='mobile-ttl'>{tableHead[4].name}</div>
                <span>{item?.amount}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  })

  const handleInputChange = (e, params) => {
    const { name, onChange } = params
    let data = {
      target: {
        value: e,
        name,
      },
    }

    onChange(data)
  }

  return (
    <div className='transactions-page-container'>
      <h1>Transactions History</h1>
      <div className='transaction-selects-container'>
        {inputs?.map((params, index) => (
          <Input
            key={index}
            type={params?.type}
            label={params.title}
            name={params.name}
            value={currentObject[params?.name] || params?.defaultAny}
            customStyles={{ width: '100%' }}
            selectHandler={opt => {
              handleInputChange(opt, params)
            }}
            onChange={e => handleInputChange(e, params)}
            defaultData={params?.options}
            customInputStyles={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
          />
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
              buttons={tableVisualMore}
            />
          </div>
        }
        tableData={tableData}
        tableFooter={tableFooter}
        tableHead={tableHead}
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
        tableEmptyData={tableEmpty}
        loading={loading}
      />
      <TableElement
        customStyle={{ marginTop: '30px' }}
        color={'#45F4EA'}
        type={'pagination'}
        currentPage={paginationCurrent}
        totalCount={paginationTotal}
        onPageChange={paginationEvent}
      />
    </div>
  )
}
