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
      };
    };
  };

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
      id: 1,
    },
    {
      name: "Unstake Date",
      width: 15,
      id: 2,
    },
    {
      name: "Earn Reward",
      width: 15,
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

  let tableData;
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
          {th?.slice(0, 5).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.mobileWidth ? true : false}`}
              style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
            >
              <span>{[item.staked_amount, item.stake_date, item.unstake_date, item.earn_reward, item.harvest][index]}</span>
            </div>
          ))}
          {width > 550 && th.slice(5, 7).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.position} ${i.mobileWidth ? true : false}`}
              style={{
                width: `${mobile ? i.mobileWidth : i.width}%`,
                marginRight: `${width < 1450 ? '10px' : '0'}`,
              }}
            >
              <Button
                element={'staking-button'}
                label={index === 0 ? 'Unstake' : 'Harvest'}
                active={index === 0}
                customStyles={{ borderRadius: '32px' }}
                onClick={i.onClick}
              />
            </div>
          ))}
        </div>
        <div className="table-more" />
        <div className="icon-place">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="table-mobile">
        <div className="table-mobile-content">
          {[1, 2, 3].map(index => (
            <div className="td" key={index}>
              <div className="mobile-ttl">{th[index].name}</div>
              <span>{item[index === 1 ? 'stake_date' : index === 2 ? 'unstake_date' : 'earn_reward']}</span>
            </div>
          ))}
          {width <= 550 && (
            <div className="table-buttons">
              {[5, 6].map(index => (
                <div className="td" key={index}>
                  <Button 
                    element="staking-button"
                    label={index === 5 ? 'Unstake' : 'Harvest'}
                    active={index === 5}
                    customStyles={{ borderRadius: '32px' }}
                    onClick={th[index].onClick}
                  />
                </div>
              ))}
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
