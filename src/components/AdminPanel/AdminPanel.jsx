import './AdminPanel.css';
import { Table } from "../Table";
import {Button} from "../Button";

export const AdminPanel = props => {
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
    return (
        <div className={`admin-container`}>
            <div className={`admin-sidebar`}>
                shmai
            </div>
            <div className={`admin-content`}>
                <Table type={"table-version"}
                       tableHead={th}
                       tableData={
                           td.map((item) => {
                               return(
                                   <div className="table" key={item.id}>
                                       <div className="td col" style={{width: `${th[0].width}%`}}>
                                           <div className="mobile-ttl">{th[0].name}</div>
                                           <span>{item.id}</span>
                                           <span>{item.hash}</span>
                                       </div>
                                       <div className="td" style={{width: `${th[1].width}%`}}>
                                           <div className="mobile-ttl">{th[1].name}</div>
                                           <span>{item.from}</span>
                                       </div>
                                       <div className="td" style={{width: `${th[2].width}%`}}>
                                           <div className="mobile-ttl">{th[2].name}</div>
                                           <span>{item.to}</span>
                                       </div>
                                       <div className="td" style={{width: `${th[3].width}%`}}>
                                           <div className="mobile-ttl">{th[3].name}</div>
                                           <span>{item.amount}</span>
                                       </div>
                                       <div className="td" style={{width: `${th[4].width}%`}}>
                                           <div className="mobile-ttl">{th[4].name}</div>
                                           <span>{item.domination}</span>
                                       </div>
                                       <div className="td col" style={{width: `${th[5].width}%`}}>
                                           <div className="mobile-ttl">{th[5].name}</div>
                                           <span>{item.date}</span>
                                           <span>{item.time}</span>
                                       </div>
                                       <div className="td" style={{width: `${th[6].width}%`}}>
                                           <div className="mobile-ttl">{th[6].name}</div>
                                           <span>{item.type}</span>
                                       </div>
                                   </div>
                               )
                           })
                       } />
            </div>
        </div>
    )
};
