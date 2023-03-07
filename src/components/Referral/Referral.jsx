import React from 'react'

// components
import { Visual } from '../Visual/Visual';
import { Table } from '../Table';

// svgs
import { AddSquareIcon } from '../../assets/svgs';

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
}) => {
    return (
        <div className={'main'}>
            <div className={'main-sidebar'}>
                <div className={'referral-sidebar'}>
                    
                </div>
            </div>
            <div className={'main-content'}>
                <Visual
                    element={'table-header'}
                    label={'Referral'}
                    description={'After creating your first code, you will receive a Casual status to start, granting you a 2.5% rebate on your referee’s trading fees.'}
                    fontSize={'font-20'}
                    customStyles={{ marginBottom: '20px', border: 'none', paddingTop: '0' }}
                />
                <div className={'referral-cards-container'}>
                    {cards?.map((item, index) => <ReferralCard item={item} key={index} />)}
                </div>
                <Visual
                    element={'table-header'}
                    label={'Referral Code'}
                    description={'You can create multiple referral codes to attract traders'}
                    fontSize={'font-20'}
                    customStyles={{ marginBottom: '20px', border: 'none' }}
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
                    customStyles={{ marginBottom: '20px', border: 'none' }}
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
