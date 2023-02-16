import React from 'react';

// styles
import '../../assets/css/main-theme.css';
import './Staking.css';

import { Calculator } from '../Calculator/Calculator';
import { BiddingInfo } from "../BiddingInfo/BiddingInfo";

export const Staking = ({
  durationOptions,
  biddingInfoData,
  handleStake,
  setStakeData,
  stakeData
}) => {
  return (
    <div className={`main`}>
      <div className={`main-sidebar`}>
        <div className={'staking-sidebar'}>
          <BiddingInfo 
            data={biddingInfoData}
          />
          <Calculator 
            durationOptions={durationOptions}
            handleSubmit={handleStake}
            setStakeData={setStakeData}
            stakeData={stakeData}
          />
        </div>
      </div>
      <div className={`main-content`}>
        hihi
      </div>
    </div>
  );
};
