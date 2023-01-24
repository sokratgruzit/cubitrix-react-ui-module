import { Button } from "../Button";
import "./Table.css";

export const Table = (props) => {
    return (
        <>
            <div className={`${props.type}`}>
                <div className="table-head">
                    {props.tableHead.map((item) => {
                        return (
                            <div key={item.id} className={`th  ${item.mobileWidth ? true : false }`} style={{width: `${props.mobile ? item.mobileWidth : item.width}%`}}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>
                <div className="icon-place"></div>
                {props.tableData}
            </div>
        </>
    );
};
