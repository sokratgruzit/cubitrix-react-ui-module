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
                    data={props.data}
                    setData={props.setData}
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
