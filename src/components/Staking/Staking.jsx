import './Staking.css';

import { BiddingInfo } from "../BiddingInfo";
import { Calculator } from "../Calculator";
import { Table } from '../Table';
import { StakeInfo } from "../StakeInfo";
import { Button } from '../Button';

import { HeaderIcon } from '../../assets/svgs';
import { useState } from 'react';

let th = [
    {
      stakedAmountTitle: "Staked Amount",
      stakedDateTitle: "Stake Date",
      unstakedDateTitle: "Unstake Date",
      earnRewardTitle: "Earn Reward",
      harvestTitle: "Harvest",
    },
  ];
  
  let td = [
    {
      stakedAmount: "1,220,000.2",
      stakedDate: "01.02.2023 10:00AM",
      unstakedDate: "01.02.2023 08:15PM",
      earnReward: "CML",
      harvest: "1,132,000.1",
      id: 0,
    },
    {
      stakedAmount: "1,220,000.2",
      stakedDate: "01.02.2023 10:00AM",
      unstakedDate: "01.02.2023 08:15PM",
      earnReward: "CML",
      harvest: "1,132,000.1",
      id: 1,
    },
    {
      stakedAmount: "1,220,000.2",
      stakedDate: "01.02.2023 10:00AM",
      unstakedDate: "01.02.2023 08:15PM",
      earnReward: "CML",
      harvest: "1,132,000.1",
      id: 2,
    },
  ];

export const Staking = (props) => {
  const [showCalculator, setShowCalculator] = useState(false);
  return (
    <div className='staking-main'>
        <div className='staking-main-sidebar'>
            <div>
                <BiddingInfo />
                <Calculator />
            </div>
        </div>
        <div className={showCalculator ? 'staking-main-content show' : 'staking-main-content'}>
          <h2 className='font-16 staking-header'>
            <HeaderIcon />
            Staking
          </h2>
          <BiddingInfo type="bidding-none" />
          <StakeInfo />      
          <Table type='table-version' tableHead={th} tableData={td} />
        </div>
        <div>
          {showCalculator && (
            <Calculator type='show-calculator' />
          )}
          <Button 
            customStyles={{ position: 'absolute', top: '942px', left: '38%', zIndex: '3'}}
            label={showCalculator ? 'Close' : 'Staking Calculator'}
            size='btn-m-lg'
            type={showCalculator ? 'btn-secondary show-calculator-btn' : 'btn-primary show-calculator-btn'}
            onClick={() => setShowCalculator(!showCalculator)}
          />
        </div>
    </div>
  );
};
