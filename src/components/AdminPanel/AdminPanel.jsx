import { useState } from 'react';
import './AdminPanel.css';
import { Table } from "../Table";
import {Button} from "../Button";
import { FilterBox } from '../FilterBox';

export const AdminPanel = props => {
    const [filterTitle, setFilterTitle] = useState('All');
    let th = [
        {
            name: "Tranx ID",
            width: 15,
            mobileSlide: false,
            id: 0,
        },
        {
            name: "From",
            width: 15,
            mobileSlide: false,
            id: 1,
        },
        {
            name: "To",
            width: 15,
            mobileSlide: false,
            id: 2,
        },
        {
            name: "Amount",
            width: 15,
            mobileSlide: true,
            id: 3,
        },
        {
            name: "Domination",
            width: 10,
            mobileSlide: true,
            id: 4,
        },
        {
            name: "Time",
            width: 10,
            mobileSlide: true,
            id: 5,
        },
        {
            name: "Tranx Type",
            width: 10,
            position: 'right',
            mobileSlide: true,
            id: 6,
        },
    ];
    // let countBy = (arr, prop) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});
    // console.log(countBy(th, 'mobileSlide'))

    let td = [
        {
            id:12123,
            hash: "0xae0cf2498c23422340xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c0xae0cf2498c2342234",
            to: "0xae0cf2498c0xae0cf2498c0xae0cf2498c2342234",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'All Deposit',

        },
        {
            id:121223323,
            hash: "0xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c",
            to: "0xae0cf2498c0xae0cf2498c",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'All Deposit',

        },
        {
            id:1212323,
            hash: "0xae0cf2498c2342234",
            from: "0xae0cf2498c0xae0cf2498c",
            to: "0xae0cf2498c0xae0cf2498c",
            amount: "$123, 241, 241, 423.8",
            domination: "1,132,000.1",
            date: "01.02.2023",
            time: '08:15 PM',
            type: 'All Deposit',

        },
    ];

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
                       tableHead={th}
                       tableData={
                           td.map((item) => {
                               return(
                                  <>
                                      <div className="table-parent">
                                          <div className="table" key={item.id}>
                                              <div className={`td col ${th[0].mobileSlide}`} style={{width: `${th[0].width}%`}}>
                                                  <span>{item.id}</span>
                                                  <span>{item.hash}</span>
                                              </div>
                                              <div className={`td ${th[1].mobileSlide}`} style={{width: `${th[1].width}%`}}>
                                                  <span>{item.from}</span>
                                              </div>
                                              <div className={`td ${th[2].mobileSlide}`} style={{width: `${th[2].width}%`}}>
                                                  <span>{item.to}</span>
                                              </div>
                                              <div className={`td ${th[3].mobileSlide}`} style={{width: `${th[3].width}%`}}>
                                                  <span>{item.amount}</span>
                                              </div>
                                              <div className={`td ${th[4].mobileSlide}`} style={{width: `${th[4].width}%`}}>
                                                  <span>{item.domination}</span>
                                              </div>
                                              <div className={`td ${th[5].mobileSlide}`} style={{width: `${th[5].width}%`}}>
                                                  <span>{item.date}</span>
                                                  <span>{item.time}</span>
                                              </div>
                                              <div className={`td ${th[6].mobileSlide}`} style={{width: `${th[6].width}%`}}>
                                                  <span>{item.type}</span>
                                              </div>
                                          </div>
                                          <div className="icon-place">
                                              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                              </svg>
                                          </div>
                                          <div className="table-mobile">
                                              <div className="table-mobile-content">
                                                  <div className="td">
                                                      <div className="mobile-ttl">{th[2].name}</div>
                                                      <span>{item.to}</span>
                                                  </div>
                                                  <div className="td">
                                                      <div className="mobile-ttl">{th[3].name}</div>
                                                      <span>{item.amount}</span>
                                                  </div>
                                                  <div className="td">
                                                      <div className="mobile-ttl">{th[4].name}</div>
                                                      <span>{item.domination}</span>
                                                  </div>
                                                  <div className="td col">
                                                      <div className="mobile-ttl">{th[5].name}</div>
                                                      <span>{item.date}</span>
                                                      <span>{item.time}</span>
                                                  </div>
                                                  <div className="td">
                                                      <div className="mobile-ttl">{th[6].name}</div>
                                                      <span>{item.type}</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </>
                               )
                           })
                       } />
            </div>
        </div>
    )
};
