import { React, useState } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import { FilterBox } from '../FilterBox';
import { Button } from '../Button';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Visual} from "../Visual";
import {TableElement} from "../TableElement";

export const AdminPanel = props => {
    let filter;
    if(props.tableFilter === true) {
        filter =  <FilterBox
                    tableFilterData={props.tableFilterData}
                    setTableFilterOutcomingData={props.setTableFilterOutcomingData}
                    tableHeader={props.tableHeader}
                    customStyles={{marginBottom: '20px'}}
                />
    }
    return (
        <div className={`admin-content`}>

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
            />
            <TableElement
                customStyle={{marginTop: '30px', paddingBottom: '100px'}}
                type={'pagination'}
                currentPage={props.paginationCurrent}
                totalCount={props.paginationTotal}
                onPageChange={props.paginationEvent}
            />
        </div>
    )
};
