import { React, useState } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import { FilterBox } from '../FilterBox';
import { Button } from '../Button';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Visual} from "../Visual";

export const AdminPanel = props => {
    return (
        <div className={`admin-content`}>
            <Visual
                element={'table-header'}
                label={props.pageLabel}
                fontSize={'font-20'}
                customStyles={{}}
            />
            <FilterBox
                tableFilterData={props.tableFilterData}
                tableFilterOutcomingData={props.tableFilterOutcomingData}
                setTableFilterOutcomingData={props.setTableFilterOutcomingData}
                header={props.header}
                customStyles={{margin:'20px 0px'}}
            />
            <Table
                type={"table-version"}
                tableHead={props.tableHead}
                mobile={props.mobile}
                tableData={props.tableData}
            />
        </div>
    )
};
