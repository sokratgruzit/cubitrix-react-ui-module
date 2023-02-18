import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Staking } from "../components/Staking/Staking";
import { Button } from "../components/Button";

const stories = storiesOf("Staking", module);

import { EarnIcon } from '../assets/svgs';
import { Functions } from "../hooks/Functions";

stories.add("Staking", () => {
  const [stakeData, setStakeData] = useState({
    amount: '',
    duration: '30'
  });
  // console.log(stakeData);
  const [mobileExpand, setMobileExpand] = useState(null);

  let mobileExpandFunc = (id) => {
    if(width <= 1300) {
      if(id !== mobileExpand) {
          setMobileExpand(id);
      } else {
          setMobileExpand(null);
      }
    }
  }

  const { width } = Functions();

  const durationOptions = [
    {
      title: "30",
      value: '15 % APY On 30 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "60",
      value: '20 % APY On 60 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "90",
      value: '25 % APY On 90 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "180",
      value: '30 % APY On 180 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "360",
      value: '40 % APY On 360 Days. Locked Until 02/02/2023 2:33 PM'
    },
  ];

  const AccountSummaryData = [
    [
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      } 
    ],
    [
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      } 
    ]
  ];

  let th = [
    {
      name: "Staked Amount",
      width: 15,
      mobileWidth: 45,
      id: 0,
    },
    {
      name: "Stake Date ",
      width: 15,
      mobileSlide: true,
      id: 1,
    },
    {
      name: "Unstake Date",
      width: 15,
      mobileSlide: true,
      id: 2,
    },
    {
      name: "Earn Reward",
      width: 15,
      mobileSlide: true,
      id: 3,
    },
    { 
      name: "Harvest",
      width: 15,
      mobileWidth: 45,
      id: 4,
    },
    {
      name: "",
      width: 10,
      id: 5,
      mobileWidth: 35,
      position: 'right',
      className: 'buttons-th',
      onClick: () => console.log('unstake')
    },
    {
      name: "",
      width: 10,
      id: 6,
      mobileWidth: 35,
      position: 'right',
      className: 'buttons-th',
      onClick: () => console.log('harvest')
    },
  ];

  let td = [
      {
        id:12123,
        staked_amount: "1,220,000.2",
        stake_date: "01.02.2023 10:00AM",
        unstake_date: "01.02.2023 08:15PM",
        earn_reward: "CML",
        harvest: "1,132,000.1",
      },
      {
        id:121223323,
        staked_amount: "1,220,000.2",
        stake_date: "01.02.2023 10:00AM",
        unstake_date: "01.02.2023 08:15PM",
        earn_reward: "CML",
        harvest: "1,132,000.1",
      },
      {
        id:1212323,
        staked_amount: "1,220,000.2",
        stake_date: "01.02.2023 10:00AM",
        unstake_date: "01.02.2023 08:15PM",
        earn_reward: "CML",
        harvest: "1,132,000.1",   
      },
  ];

  let mobile = width < 1300;

  let tableData
  tableData = td.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item.id ? 'active' : ''}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item.id)
        }}
      >
        <div className={'table'}>
          <div className={`td col ${th[0].mobileWidth ? true : false }`} style={{width: `${mobile ? th[0].mobileWidth : th[0].width}%`}}>
            <span>{item.staked_amount}</span>
          </div>
          <div className={`td col ${th[1].mobileWidth ? true : false }`} style={{width: `${mobile ? th[1].mobileWidth : th[1].width}%`}}>
            <span>{item.stake_date}</span>
          </div>
          <div className={`td col ${th[2].mobileWidth ? true : false }`} style={{width: `${mobile ? th[2].mobileWidth : th[2].width}%`}}>
            <span>{item.unstake_date}</span>
          </div>
          <div className={`td col ${th[3].mobileWidth ? true : false }`} style={{width: `${mobile ? th[3].mobileWidth : th[3].width}%`}}>
            <span>{item.earn_reward}</span>
          </div>
          <div className={`td col ${th[4].mobileWidth ? true : false }`} style={{width: `${mobile ? th[4].mobileWidth : th[4].width}%`}}>
            <span>{item.harvest}</span>
          </div>
          {width > 550 && (
            <>
              <div className={`td col ${th[5].position} ${th[5].mobileWidth ? true : false }`} style={{width: `${mobile ? th[5].mobileWidth : th[5].width}%`, marginRight: `${width < 1450 ? '10px' : '0'}`}}>
                <Button 
                  element={'staking-button'}
                  label={'Unstake'}
                  active={true}
                  customStyles={{ borderRadius: '32px' }}
                  onClick={th[5].onClick}
                />
              </div>
              <div className={`td col ${th[6].position} ${th[6].mobileWidth ? true : false }`} style={{width: `${mobile ? th[6].mobileWidth : th[6].width}%`}}>
                <Button 
                  element={'staking-button'}
                  label={'Harvest'}
                  active={false}
                  customStyles={{ borderRadius: '32px' }}
                  onClick={th[6].onClick}
                />
              </div>
            </>
          )}
        </div>
        {mobile && <div className="table-more" />}
        <div className="icon-place">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={`${'table-mobile'}`}>
          <div className="table-mobile-content">
            <div className="td">
              <div className="mobile-ttl">{th[1].name}</div>
              <span>{item.stake_date}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{th[2].name}</div>
              <span>{item.unstake_date}</span>
            </div>
            <div className="td">
              <div className="mobile-ttl">{th[3].name}</div>
              <span>{item.earn_reward}</span>
            </div>
            {width <= 550 && (
              <div className="table-buttons">
                <div className="td">
                  <Button 
                    element={'staking-button'}
                    label={'Unstake'}
                    active={true}
                    customStyles={{ borderRadius: '32px' }}
                    onClick={th[5].onClick}
                  />
                </div>
                <div className="td">
                  <Button 
                    element={'staking-button'}
                    label={'Harvest'}
                    active={false}
                    customStyles={{ borderRadius: '32px' }}
                    onClick={th[6].onClick}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>  
    );
  });


  return (
    <>
      <Staking
        durationOptions={durationOptions}
        biddingInfoData={{
          stakers: '1',
          balance: '0'
        }}
        handleStake={() => console.log(stakeData)}
        stakeData={stakeData}
        setStakeData={setStakeData}
        handleMaxClick={() => console.log('max!!!')}
        AccountSummaryData={AccountSummaryData}
        tableData={tableData}
        handleViewAll={() => console.log('view all')}
        tableHead={th}
      />
    </>
  );
});
