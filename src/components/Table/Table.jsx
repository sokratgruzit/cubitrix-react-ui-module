import { Button } from "../Button";
import "./Table.css";

export const Table = (props) => {
    return (
        <>
            <div className={`${props.type}`}>
                <div className="table-head">
                    {props.tableHead.map((item) => {
                        return (
                            <div key={item.id} className="th" style={{width: `${item.width}%`}}>
                                {item.name}
                            </div>
                        );
                    })}
                    <div className="icon-place"></div>
                </div>
                {props.tableData}
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="table-mobile">
                    <div className="table-mobile-content">
                        {props.tableData}
                    </div>
                </div>
            </div>
        </>
    );
};
