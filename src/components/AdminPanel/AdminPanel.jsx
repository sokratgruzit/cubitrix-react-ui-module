import { useState } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import {Button} from "../Button";
import { FilterBox } from '../FilterBox';

export const AdminPanel = props => {
    const [filterTitle, setFilterTitle] = useState('All');


    const FilterBoxDefaultData = [
        {
            title: 'All',
        }, {
            title: 'Pending',
        }, {
            title: 'Cenceled',
        }, {
            title: 'Approved',
        }, {
            title: 'Bonuses',
        }, {
            title: 'Claimed',
        },

    ]

    const filterData = {
        head: [
            {
                title: 'All',
            }, {
                title: 'Pending',
            }, {
                title: 'Cenceled',
            }, {
                title: 'Approved',
            }, {
                title: 'Bonuses',
            }, {
                title: 'Claimed',
            },

        ],
        search: {
            options: [{
                name: 'Transaction'
            }, {
                name: 'Hash'
            }]
        },
        selects: [
            {
                name: 'Tranx Type',
                options: [{
                    name: 'Transaction'
                }, {
                    name: 'Hash'
                }]
            },
            {
                name: 'Date Within',
                options: [{
                    name: 'Transaction'
                }, {
                    name: 'Hash'
                }]
            },
        ]
    }
    // console.log(filterTitle)
    return (
        <div className={`admin-container`}>
            <div className={`admin-sidebar`}>
                shmai
            </div>
            <div className={`admin-content`}>
                <FilterBox
                    filterData={FilterBoxDefaultData}
                    setFilterTitle={setFilterTitle}
                    filterTitle={filterTitle}
                />
                <Table type={"table-version"}
                       tableHead={props.tableHead}
                       mobile={props.mobile}
                       tableData={props.tableData} />
            </div>
        </div>
    )
};
