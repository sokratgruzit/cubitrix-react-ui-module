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
                </div>
                {props.tableData}
            </div>
        </>
    );
};
