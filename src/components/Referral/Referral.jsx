import React from 'react'

// components
import { Visual } from '../Visual';
import { Table } from '../Table';

// svgs
import { AddSquareIcon, ReferralIcon } from '../../assets/svgs';

// hooks
import { useMobileWidth } from '../../hooks/useMobileWidth';

// styles
import './Referral.css';
import { Button } from '../Button';
import { ReferralCard } from '../ReferralCard';

export const Referral = ({ 
    cards, 
    handleCreateCode, 
    referralCodeTableHead, 
    referralCodeTableData,  
    referalHistoryTableHead, 
    referralHistoryTableData,
    mobile,
    referralCodeTableEmpty,
    referralHistoryTableEmpty,
    totalReferralRebates,
    totalReferralRebatesLabel
}) => {
    const { width } = useMobileWidth();
    return (
        <div className={'main'}>
            <div className={'main-sidebar'} style={{ display: `${width > 1025 ? "flex" : "none"}` }}>
                <div className={'referral-sidebar'}>
                    <ReferralCard 
                        type={'total-info'} 
                        item={totalReferralRebates} 
                        label={totalReferralRebatesLabel}  
                        customStyles={{ display: `${width > 1025 ? "block" : "none"}` }}
                    />
                </div>
            </div>
            <div className={'main-content'} style={{ gap: '20px'}}>
                <h2 className={`font-16 referral-header`}>
                    <ReferralIcon />
                    Referral
                </h2>
                <ReferralCard 
                    type={'total-info'} 
                    item={totalReferralRebates} 
                    label={totalReferralRebatesLabel}  
                    customStyles={{ display: `${width <= 1025 ? "block" : "none"}` }}
                    />
                <Visual
                    element={'table-header'}
                    label={'Referral'}
                    description={'After creating your first code, you will receive a Casual status to start, granting you a 2.5% rebate on your referee’s trading fees.'}
                    fontSize={'font-20'}
                    customStyles={{  border: 'none', paddingTop: '0' }}
                />
                <div className={'referral-cards-container'}>
                    {cards?.map((item, index) => <ReferralCard type={"default"} item={item} key={index} />)}
                </div>
                <Visual
                    element={'table-header'}
                    label={'Referral Code'}
                    description={'You can create multiple referral codes to attract traders'}
                    fontSize={'font-20'}
                    customStyles={{  border: 'none' }}
                    buttons={
                        <Button 
                            element={'referral-button'}
                            label={'Create Code'}
                            icon={<AddSquareIcon color={`#3D5AFE`} />}
                            onClick={handleCreateCode}
                        />
                    }
                />
                <Table
                    type={"table-version"}
                    tableHead={referralCodeTableHead}
                    mobile={mobile}
                    tableData={referralCodeTableData}
                    tableEmpty={true}
                    tableEmptyData={referralCodeTableEmpty}
                />
                <Visual
                    element={'table-header'}
                    label={'Referral Rebates History'}
                    description={'The airdrop history of your weekly referral rebates.'}
                    fontSize={'font-20'}
                    customStyles={{  border: 'none' }}
                />
                <Table
                    type={"table-version"}
                    tableHead={referalHistoryTableHead}
                    mobile={mobile}
                    tableData={referralHistoryTableData}
                    tableEmptyData={referralHistoryTableEmpty}
                />
            </div>
        </div>
    )
}
