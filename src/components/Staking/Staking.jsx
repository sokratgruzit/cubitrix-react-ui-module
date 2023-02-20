import { useState } from 'react';

// hooks
import { Functions } from '../../hooks/Functions';

// components
import { Calculator } from '../Calculator';
import { BiddingInfo } from "../BiddingInfo";
import { AccountSummary } from '../AccountSummary';
import { Button } from '../Button';
import { Table } from "../Table";

// svgs
import { 
  HeaderIcon,
  CalculatorIcon,
  CloseIcon,
} from '../../assets/svgs';

// styles
import '../../assets/css/main-theme.css';
import './Staking.css';

export const Staking = ({
  durationOptions,
  biddingInfoData,
  handleCalculatorSubmit,
  setStakeData,
  stakeData,
  handleMaxClick,
  AccountSummaryData,
  tableHead,
  tableData,
  handleViewAll,
  loading, 
  isAllowance,
  isActive
}) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const { width } = Functions();
  return (
    <div className={`main`} style={{ flexDirection: `${width < 1025 ? 'column' : 'row'}`}}>
      <div className={`main-sidebar`} style={{ display: `${width > 1025 ? 'flex' : 'none'}`}}>
        <div className={'staking-sidebar'}>
          <BiddingInfo 
            data={biddingInfoData}
            customStyles={{ display: `${width > 1025 ? 'block' : 'none'}`}}
          />
          <Calculator 
            {...{ durationOptions, handleCalculatorSubmit, setStakeData, stakeData, handleMaxClick, loading, isAllowance, isActive}}
          />
        </div>
      </div>
      {showCalculator && <div className={'show-calculator-dark-bg'} />}
      <div className={`main-content`}>
        <h2 
          className={`font-16 staking-header`}
        >
          <HeaderIcon />
          Staking
        </h2>
        <BiddingInfo 
          data={biddingInfoData}
          customStyles={{ display: `${width <= 1025 ? 'block' : 'none'}`}}
        />
        <h3 className={`${width < 1025 ? 'font-14' : 'font-20'}`}>Your Stake</h3>
        <div className={'account-summary-container'}>
          {AccountSummaryData?.map((data, index) => <AccountSummary key={index} data={data} />)}     
        </div>
        <Table
          type={"table-version"}
          tableHead={tableHead}
          mobile={width < 1280}
          tableData={tableData}
          handleViewAll={handleViewAll}
        />
      </div>
      <div className={'hidden-calculator-wrapper'}>
        <div className={`hidden-calculator-container ${showCalculator && 'active'}`}>
          {showCalculator && (
            <Calculator 
              {...{ durationOptions, handleCalculatorSubmit, setStakeData, stakeData, handleMaxClick, loading, isAllowance, isActive }}
            />
          )}
          <Button 
            element={'staking-button'}
            customStyles={{ position: 'absolute', bottom: '20px', zIndex: '999', width: '190px'}}
            label={showCalculator ? 'Close' : 'Staking Calculator'}
            active={showCalculator}
            onClick={() => setShowCalculator(!showCalculator)}
            icon={(
              showCalculator ? <CloseIcon /> : <CalculatorIcon />
            )}
          />
        </div>
      </div>
    </div>
  );
};
