import { useState } from 'react'

// hooks
import { useMobileWidth } from '../../hooks/useMobileWidth'

// components
import { AccountSummary } from '../AccountSummary'
import { Button } from '../Button'
import { Table } from '../Table'
import { Visual } from '../Visual'

// svgs
import { AddSquareIcon } from '../../assets/svgs'

// styles
import '../../assets/css/main-theme.css'
import './Staking.css'
import { Footer } from '../Footer'

export const Staking = ({
  accountSummaryData,
  tableHead,
  stakersRecord,
  loading,
  stackContractInfo,
  handlePopUpOpen,
  tableEmptyData,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null)
  const { width, mobile } = useMobileWidth()

  let mobileExpandFunc = id => {
    if (id !== mobileExpand) {
      setMobileExpand(id)
    } else {
      setMobileExpand(null)
    }
  }

  let tableData =
    stakersRecord?.length > 0 &&
    stakersRecord.map((item, index) => (
      <div className={`table-parent ${mobileExpand === index ? 'active' : ''}`}>
        <div
          className={'table'}
          style={{
            width: 'calc(100% - 50px)',
            cursor: 'pointer',
          }}
          key={index}
          onClick={() => {
            mobileExpandFunc(index)
          }}
        >
          {tableHead?.slice(0, 4).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.mobileWidth ? true : false}`}
              style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
            >
              <span>
                {
                  [item.amount, item.staketime, item.unstaketime, parseFloat(item.realtimeRewardPerBlock).toFixed(10)][
                    index
                  ]
                }
              </span>
            </div>
          ))}
        </div>
        <div className='table-more' />
        <div
          className='icon-place'
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={() => {
            mobileExpandFunc(index)
          }}
        >
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
        <div className='table-mobile' style={{ display: 'block', cursor: 'initial' }}>
          <div className='table-mobile-content'>
            {width <= 1300 && (
              <>
                {[1, 2].map(index => (
                  <div className='td' key={index}>
                    <div className='mobile-ttl'>{tableHead[index].name}</div>
                    <span>
                      {index === 1 && item.staketime}
                      {index === 2 && item.unstaketime}
                    </span>
                  </div>
                ))}
              </>
            )}
            {width <= 400 && (
              <>
                {[3].map(index => (
                  <div className='td' key={index}>
                    <div className='mobile-ttl'>{tableHead[index].name}</div>
                    <span>{parseFloat(item?.realtimeRewardPerBlock).toFixed(10)}</span>
                  </div>
                ))}
              </>
            )}
            <>
              {[3].map(index => (
                <div className='td' key={index}>
                  <div className='mobile-ttl'>Earn Reward</div>
                  <span>CML</span>
                </div>
              ))}
            </>
            <div className='table-buttons'>
              {[5, 6].map(index => (
                <div className='td' key={index}>
                  <Button
                    element='staking-button'
                    label={index === 5 ? 'Unstake' : 'Harvest'}
                    active={index === 5}
                    customStyles={{ borderRadius: '32px' }}
                    onClick={() => tableHead[index].onClick(index)}
                    disabled={index === 5 ? item.unstaked : item.withdrawan}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))

  return (
    <div className='staking-main'>
      <div className='staking-content'>
        <AccountSummary data={accountSummaryData} stackContractInfo={stackContractInfo} label={'Your Stake'} />
        <div className={'staking-content-main'}>
          <Visual
            element={'table-header'}
            label={'Stake'}
            description={'You can stake and then earn complend reward'}
            fontSize={'font-20'}
            customStyles={{ border: 'none', padding: '0' }}
            buttons={
              <Button
                element={'referral-button'}
                label={'Create Staking'}
                icon={<AddSquareIcon color={`#00C6FF`} />}
                onClick={handlePopUpOpen}
              />
            }
          />
          <Table
            type={'table-version'}
            tableHead={tableHead}
            mobile={true}
            tableData={stakersRecord.length ? tableData : false}
            tableEmpty={true}
            tableEmptyData={tableEmptyData}
            loading={loading}
            customTableMoreStyles={{
              height: '80px',
              display: 'flex',
            }}
            customHeadStyles={{
              width: 'calc(100% - 40px)',
            }}
            customStyles={{
              maxHeight: '490px',
              overflowY: 'scroll',
            }}
          />
        </div>
      </div>
      <Footer customStyles={{ background: '#272C57' }} />
    </div>
  )
}
