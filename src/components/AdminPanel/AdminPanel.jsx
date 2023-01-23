import { useState } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import { FilterBox } from '../FilterBox';

export const AdminPanel = props => {

    return (
        <div className={`admin-container`}>
            <div className={`admin-sidebar`}>
                shmai
            </div>
            <div className={`admin-content`}>
                <FilterBox
                    tableFilterData={props.tableFilterData}
                    tableFilterOutcomingData={props.tableFilterOutcomingData}
                    setTableFilterOutcomingData={props.setTableFilterOutcomingData}
                />
                <Table
                    type={"table-version"}
                    tableHead={props.tableHead}
                    mobile={props.mobile}
                    tableData={props.tableData}
                />
            </div>
        </div>
    )
};
