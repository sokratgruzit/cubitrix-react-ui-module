import { React, useState } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import { FilterBox } from '../FilterBox';
import { Button } from '../Button';
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const AdminPanel = props => {

    return (
        <div className={`admin-container`}>
            <div className={`admin-sidebar`}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={
                            props.sideBarData.map((item) => {
                                    return (
                                        <Button
                                            label={item.name}
                                            route={item.route}
                                            element={'side-admin-button'}
                                            svg={item.svg}
                                            customStyles={{width: '100%'}}
                                        />
                                    )
                                })
                        } />
                    </Routes>
                </BrowserRouter>
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
