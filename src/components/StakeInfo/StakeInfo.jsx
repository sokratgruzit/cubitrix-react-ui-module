import './StakeInfo.css';

import { 
    InfoCircleIcon,
    CurrentStakeIcon,
    EarnIcon,
    RewardIcon,
    WalletMoneyIcon,
    TotalStakedIcon,
    TotalUnstakedIcon
  } from '../../assets/svgs/index';

export const StakeInfo = props => {
    return (
        <div className='stake-info-container'>
          <h2 className="stake-info__header">Your Stake</h2>
          <div className="stake-info">
            <div className="stake-info__item">
                <div className="stake-info__item-element">
                    <p>
                      <CurrentStakeIcon />
                      Current Stake
                    </p>
                    <p>
                        0000000 CMCX
                    </p>
                </div>
                <div className="stake-info__item-element">
                    <p>
                      <EarnIcon />
                      Earn
                    </p>
                    <p>
                      0000000 CMCX
                    </p>
                </div>
                <div className="stake-info__item-element">
                    <p>
                      <RewardIcon />
                      Claimed Reward
                    </p>
                    <p>
                    0000000 CMCX
                    </p>
                </div>
            </div>
            <div className="stake-info__item">
                <div className="stake-info__item-element">
                    <p>
                      <WalletMoneyIcon />
                      Your Wallet Balance
                    </p>
                    <p>000000 CMCX</p>
                </div>
                <div className="stake-info__item-element">
                    <p>
                      <TotalStakedIcon />
                      Total Staked
                    </p>
                    <p>
                      0000000 CMCX
                    </p>
                </div>
                <div className="stake-info__item-element">
                    <p>
                      <TotalUnstakedIcon />
                      Total Unstaked
                    </p>
                    <p>
                    0000000 CMCX
                    </p>
                </div>
            </div>
          </div>
        </div>
    )
}