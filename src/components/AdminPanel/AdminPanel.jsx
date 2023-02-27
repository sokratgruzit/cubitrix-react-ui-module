import { React } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import { FilterBox } from '../FilterBox';
import { Visual } from "../Visual";
import { TableElement } from "../TableElement";
import { DashboardCard } from "../DashboardCard";
import { DeveloperApi } from "../DeveloperApi";

export const AdminPanel = props => {
    let filter;
    if(props.tableFilter === true) {
        filter =  <FilterBox
                    tableFilterData={props.tableFilterData}
                    setTableFilterOutcomingData={props.setTableFilterOutcomingData}
                    tableSearchSelect={props.tableSearchSelect}
                    tableHeader={props.tableHeader}
                    customStyles={{marginBottom: '20px'}}
                />
    }
    return (
        <div className={`admin-content`}>
            {props.adminPage === 'dashboard' && (
                <div style={{ display: 'flex', gap: '20px', paddingTop: '40px'}}>
                    <DashboardCard
                        type={'sale-card'}
                        cardHeader={'TOKEN SALE - DEMO STAGE 2'}
                        saleNumber={'850,000'}
                        salePercentage={'1.6'}
                        lastSaleInfo={'0 since last week'}
                        onViewClick={() => console.log('view')}
                        customStyles={{ width: '372px'}}
                    />
                    <DashboardCard
                        type={'sale-card'}
                        cardHeader={'TOKEN SALE - DEMO STAGE 2'}
                        saleNumber={'7'}
                        salePercentage={'100'}
                        lastSaleInfo={'0 since last week'}
                        onViewClick={() => console.log('view')}
                        cardHeaderButtons={[ { name: 'KYC' }, { name: 'Users' }]}
                        handleHeaderBtnClick={(item) => console.log(item)}
                        customStyles={{ width: '372px'}}
                    />
                    <DashboardCard
                        type={'amount-card'}
                        cardHeader={'AMOUNT COLLECTED'}
                        cardHeaderButtons={[ { name: 'FIAT' }, { name: 'Crypto' }]}
                        usdtNumber={'255'}
                        handleHeaderBtnClick={(item) => console.log(item)}
                        customStyles={{ width: '372px'}}
                    />
                </div>
            )}
            {props.adminPage === 'table' && (
                <>
                    <Visual
                        element={'table-header'}
                        label={props.pageLabel}
                        buttons={props.tableHeaderButtons}
                        fontSize={'font-20'}
                        customStyles={{marginBottom: '20px'}}
                    />
                    {filter}
                    <Table
                        type={"table-version"}
                        tableHead={props.tableHead}
                        mobile={props.mobile}
                        tableData={props.tableData}
                        handleViewAll={props.handleViewAll}
                    />
                    <TableElement
                        customStyle={{marginTop: '30px', paddingBottom: '100px'}}
                        type={'pagination'}
                        currentPage={props.paginationCurrent}
                        totalCount={props.paginationTotal}
                        onPageChange={props.paginationEvent}
                    />
                </>
            )}
            {props.adminPage === 'developerApi' && (
                <>
                    <DeveloperApi
                        array={props.developersApi}
                        currentArray={props.developersApiValues}
                    />
                </>
            )}
        </div>
    )
};
