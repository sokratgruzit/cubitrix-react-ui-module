import React, { useState } from 'react'

// components
import { Visual } from '../Visual'
import { Table } from '../Table'
import { TableElement } from '../TableElement'
import { DashboardTable } from '../Dashboard/components/DashboardTable/DashboardTable'

// svgs
import { StickyNoteIcon, AddSquareIcon, ReferralPattern, Root } from '../../assets/svgs'

// hooks
import { useMobileWidth } from '../../hooks/useMobileWidth'

// styles
import './Referral.css'
import { Button } from '../Button'
import { ReferralCard } from '../ReferralCard'
import { Footer } from '../Footer'

export const Referral = ({
  handleCreateCode,
  referralCodeTableHead,
  codesTableData,
  referralHistoryTableHead,
  rebatesTableData,
  referralCodeTableEmpty,
  referralHistoryTableEmpty,
  referralRebatesTotal,
  referralHistoryTableLoading,
  referralCodeTableLoading,
  handleLevelSystem,
  referralBinaryTableEmpty,
  totalBinaryMembers,
  referralHistoryPaginationCurrent,
  referralHistoryPaginationTotal,
  referralHistoryPaginationEvent,
  referralCodePaginationCurrent,
  referralCodePaginationTotal,
  referralCodePaginationEvent,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null)
  const [referralBinaryType, setReferralBinaryType] = useState('table')

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

  const tableVisualMore = (
    <div className={`referral-inner-table-more`}>
      <div
        className={`referral-table-more-svg ${referralBinaryType === 'visual' ? 'referral-table-more-svg_active' : ''}`}
        onClick={() => setReferralBinaryType('visual')}
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M11.25 19C11.25 19.41 11.59 19.75 12 19.75C12.41 19.75 12.75 19.41 12.75 19L12.75 11.75L17 11.75C18.58 11.75 19.25 12.42 19.25 14L19.25 19C19.25 19.41 19.59 19.75 20 19.75C20.41 19.75 20.75 19.41 20.75 19L20.75 14C20.75 11.58 19.42 10.25 17 10.25L12.75 10.25L12.75 5C12.75 4.59 12.41 4.25 12 4.25C11.59 4.25 11.25 4.59 11.25 5L11.25 10.25L7 10.25C4.58 10.25 3.25 11.58 3.25 14L3.25 19C3.25 19.41 3.59 19.75 4 19.75C4.41 19.75 4.75 19.41 4.75 19L4.75 14C4.75 12.42 5.42 11.75 7 11.75L11.25 11.75L11.25 19Z'
            fill='#B3B3B3'
          />
          <path
            d='M9.75 20C9.75 20.5967 9.98705 21.169 10.409 21.591C10.831 22.0129 11.4033 22.25 12 22.25C12.5967 22.25 13.169 22.0129 13.591 21.591C14.0129 21.169 14.25 20.5967 14.25 20C14.25 19.4033 14.0129 18.831 13.591 18.409C13.169 17.9871 12.5967 17.75 12 17.75C11.4033 17.75 10.831 17.9871 10.409 18.409C9.98705 18.831 9.75 19.4033 9.75 20Z'
            fill='white'
          />
          <path
            d='M17.75 20C17.75 20.5967 17.9871 21.169 18.409 21.591C18.831 22.0129 19.4033 22.25 20 22.25C20.5967 22.25 21.169 22.0129 21.591 21.591C22.0129 21.169 22.25 20.5967 22.25 20C22.25 19.4033 22.0129 18.831 21.591 18.409C21.169 17.9871 20.5967 17.75 20 17.75C19.4033 17.75 18.831 17.9871 18.409 18.409C17.9871 18.831 17.75 19.4033 17.75 20Z'
            fill='white'
          />
          <path
            d='M1.75 20C1.75 20.2955 1.8082 20.5881 1.92127 20.861C2.03434 21.134 2.20008 21.3821 2.40901 21.591C2.61794 21.7999 2.86598 21.9657 3.13896 22.0787C3.41194 22.1918 3.70453 22.25 4 22.25C4.29547 22.25 4.58806 22.1918 4.86104 22.0787C5.13402 21.9657 5.38206 21.7999 5.59099 21.591C5.79992 21.3821 5.96566 21.134 6.07873 20.861C6.1918 20.5881 6.25 20.2955 6.25 20C6.25 19.4033 6.01295 18.831 5.59099 18.409C5.16903 17.9871 4.59674 17.75 4 17.75C3.40326 17.75 2.83097 17.9871 2.40901 18.409C1.98705 18.831 1.75 19.4033 1.75 20Z'
            fill='white'
          />
          <path
            d='M9.75 4C9.75 4.59674 9.98705 5.16903 10.409 5.59099C10.831 6.01295 11.4033 6.25 12 6.25C12.5967 6.25 13.169 6.01295 13.591 5.59099C14.0129 5.16903 14.25 4.59674 14.25 4C14.25 3.40326 14.0129 2.83097 13.591 2.40901C13.169 1.98705 12.5967 1.75 12 1.75C11.4033 1.75 10.831 1.98705 10.409 2.40901C9.98705 2.83097 9.75 3.40326 9.75 4Z'
            fill='white'
          />
        </svg>
      </div>
      <div
        className={`referral-table-more-svg ${referralBinaryType === 'table' ? 'referral-table-more-svg_active' : ''}`}
        onClick={() => setReferralBinaryType('table')}
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z'
            fill='#C38C5C'
          />
          <path
            d='M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z'
            fill='white'
          />
        </svg>
      </div>
    </div>
  )

  let mobile = width <= 1300

  let referralCodeTableData
  referralCodeTableData = codesTableData?.map((item, index) => {
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
            className={`td col ${referralCodeTableHead[0].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? referralCodeTableHead[0].mobileWidth : referralCodeTableHead[0].width}%`,
            }}
          >
            <span>{item._id.referrral}</span>
          </div>
          <div
            className={`td ${referralCodeTableHead[1].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? referralCodeTableHead[1].mobileWidth : referralCodeTableHead[1].width}%`,
            }}
          >
            <span>{item._id.from}</span>
          </div>
          <div
            className={`td ${referralCodeTableHead[2].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? referralCodeTableHead[2].mobileWidth : referralCodeTableHead[2].width}%`,
            }}
          >
            <span>{item._id.referral_module === 'uni' ? 'UNI LVL' : `VIP ${item._id.lvl}`}</span>
          </div>
          <div
            className={`td ${referralCodeTableHead[3].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? referralCodeTableHead[3].mobileWidth : referralCodeTableHead[3].width}%`,
            }}
          >
            <span>{item._id.percent}</span>
          </div>
          <div
            className={`td col ${referralCodeTableHead[4].mobileWidth ? true : false} dashboard-td`}
            style={{
              width: `${mobile ? referralCodeTableHead[4].mobileWidth : referralCodeTableHead[4].width}%`,
            }}
          >
            <span>{item.amount}</span>
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
              <div className='mobile-ttl'>{referralCodeTableHead[0].name}</div>
              <span>{item._id.referrral}</span>
            </div>
            <div className='td'>
              <div className='mobile-ttl'>{referralCodeTableHead[2].name}</div>
              {item._id.referral_module === 'uni' ? 'UNI LVL' : `VIP ${item._id.lvl}`}
            </div>
            <div className='td'>
              <div className='mobile-ttl'>{referralCodeTableHead[3].name}</div>
              <span>{item._id.percent}</span>
            </div>
          </div>
        </div>
      </div>
    )
  })

  let referralHistoryTableData
  referralHistoryTableData = rebatesTableData?.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item._id ? 'active' : ''}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item._id)
        }}
      >
        <div className='table'>
          <div
            className={`td col ${referralHistoryTableHead[0].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? referralHistoryTableHead[0].mobileWidth : referralHistoryTableHead[0].width}%`,
            }}
          >
            <span>{item.from.address}</span>
          </div>
          <div
            className={`td ${referralHistoryTableHead[1].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? referralHistoryTableHead[1].mobileWidth : referralHistoryTableHead[1].width}%`,
            }}
          >
            <span>{item?.tx_options?.referral}</span>
          </div>
          <div
            className={`td ${referralHistoryTableHead[2].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? referralHistoryTableHead[2].mobileWidth : referralHistoryTableHead[2].width}%`,
            }}
          >
            <span>{item?.tx_options?.referral_module === 'uni' ? 'UNI LVL' : `VIP ${item?.tx_options?.lvl}`}</span>
          </div>
          <div
            className={`td col ${referralHistoryTableHead[3].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? referralHistoryTableHead[3].mobileWidth : referralHistoryTableHead[3].width}%`,
            }}
          >
            <span>{item.amount}</span>
          </div>
        </div>
        <div className='table-more' />
        <div className='icon-place'>
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
              <div className='mobile-ttl'>{referralHistoryTableHead[1].name}</div>
              {item?.tx_options?.referral}
            </div>
            <div className='td'>
              <div className='mobile-ttl'>{referralHistoryTableHead[2].name}</div>
              {item?.tx_options?.referral_module === 'uni' ? 'UNI LVL' : `VIP ${item?.tx_options?.lvl}`}
            </div>
          </div>
        </div>
      </div>
    )
  })

  const tables = [
    {
      type: 'referral-code',
      header: 'Referral Code',
      description: `You can create multiple referral codes to attract traders`,
      tableHeader: referralCodeTableHead,
      data: codesTableData,
      tableEmpty: referralCodeTableEmpty,
      loading: referralCodeTableLoading,
      tableButtons: [
        <Button
          element={'referral-button'}
          label={'Create Code'}
          icon={<AddSquareIcon color={'#C38C5C'} />}
          onClick={handleCreateCode}
        />,
      ],
      tablePagination: true,
      paginationCurrent: referralCodePaginationCurrent,
      paginationTotal: referralCodePaginationTotal,
      paginationEvent: referralCodePaginationEvent,
    },
    {
      type: 'referral-history',
      header: 'Referral Revates History',
      description: `The airdrop history of your weekly referral rebates.`,
      tableHeader: referralHistoryTableHead,
      data: rebatesTableData,
      tableEmpty: referralHistoryTableEmpty,
      loading: referralHistoryTableLoading,
      tablePagination: true,
      paginationCurrent: referralHistoryPaginationCurrent,
      paginationTotal: referralHistoryPaginationTotal,
      paginationEvent: referralHistoryPaginationEvent,
    },
  ]

  const tableFooterPagination = (
    <div
      className={'dashboard-table-footer'}
      style={{
        display: `${codesTableData?.length ? 'flex' : 'none'}`,
        padding: `${codesTableData?.length ? '20px' : '0px'}`,
      }}
    >
      <TableElement
        color={'#C38C5C'}
        type={'pagination'}
        currentPage={1}
        totalCount={3}
        onPageChange={() => console.log('hi')}
      />
    </div>
  )

  return (
    <div className='referral-main-wrap'>
      <div className={'referral-main'}>
        <div className='referral-content'>
          <div className='referral-content-container'>
            <div className={'referral-content-main'}>
              <h2>Referral</h2>
              <div className='referral-content-info'>
                <span className='font-20'>You can earn rebates by inviting traders to trade on Complend</span>
                <p className='font-16'>
                  After creating your first code, you will receive a Casual status to start, granting you a 2.5% rebate
                  on your referee’s trading fees.
                </p>
              </div>
              <div className='referral-content-info_buttons'>
                <Button
                  element={'referral-button'}
                  label={'Level System'}
                  icon={<StickyNoteIcon className={'referral-button-icon'} />}
                  active={true}
                  onClick={handleLevelSystem}
                />
              </div>
              <ReferralPattern className={'referral-content-svg'} />
            </div>
            <div className='referral-card-container'>
              <ReferralCard
                type={'total-info'}
                referral={'0xae0cf2498c1A1zP1eP5QGefi2DMPTfTL5SLm'}
                totalData={referralRebatesTotal}
                label={'Your Referral Code'}
                labelTwo={'Total Referral Rebates'}
              />
            </div>
          </div>
          <div className='referral-content-bg' />
        </div>
        <div className='referral-binary-wrapper'>
          {referralBinaryType === 'table' && (
            <div className='referral-table-container'>
              <Root className={'referral-table-bg-svg'} />
              <Table
                tableHeadMore={
                  <div className='dashboard-table-header-container'>
                    <Visual
                      element={'table-header'}
                      label={'Binary Tree'}
                      description={`Total Downline Members: ${totalBinaryMembers}`}
                      fontSize={'font-20'}
                      customStyles={{ border: 'none', padding: '0' }}
                      buttons={tableVisualMore}
                      labelCustomStyles={{ color: '#C38C5C' }}
                    />
                  </div>
                }
                tableData={codesTableData?.length ? referralCodeTableData : false}
                tableFooter={tableFooterPagination}
                tableHead={referralCodeTableHead}
                customStyles={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  zIndex: '1',
                  position: 'relative',
                }}
                customHeadStyles={{
                  background: 'none',
                  padding: '10px 20px',
                  borderBottom: 'px solid rgba(255, 255, 255, 0.1)',
                  width: '100%',
                }}
                customTableMoreStyles={{
                  display: 'none',
                }}
                tableEmptyData={referralBinaryTableEmpty}
                loading={false}
              />
            </div>
          )}
          {referralBinaryType === 'visual' && <div>hi</div>}
        </div>
        <div className='referral-tables-container'>
          {tables?.map((item, index) => (
            <DashboardTable
              key={index}
              type={item?.type}
              header={item?.header}
              description={item?.description}
              footer={item?.footer}
              rightPanelData={item?.rightPanelData}
              tableHeader={item?.tableHeader}
              referralCardsData={item?.referralCardsData}
              data={item?.data}
              tableEmpty={item?.tableEmpty}
              loading={item?.loading}
              tableButtons={item?.tableButtons}
              tableEmptyValue={item?.tableEmptyValue}
              tablePagination={item?.tablePagination}
              paginationCurrent={item?.paginationCurrent}
              paginationTotal={item?.paginationTotal}
              paginationEvent={item?.paginationEvent}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
