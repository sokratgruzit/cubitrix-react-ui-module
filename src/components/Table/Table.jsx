import { Button } from "../Button";
import "./Table.css";

export const Table = (props) => {
    return (
        <>
            <div className={`${props.type}`}>
                <div className="table-head">
                    {props.tableHead.map((item) => {
                        return (
                            <div key={item.id} className="th">
                                {item.name}
                            </div>
                        );
                    })}
                </div>
                {props.tableData.map((item) => {
                    return (
                        <div key={item.id} className="table">
                            <div className="td">{item.stakedAmount}</div>
                            <div className="td">{item.stakedDate}</div>
                            <div className="td">{item.unstakedDate}</div>
                            <div className="td">{item.earnReward}</div>
                            <div className="td">{item.harvest}</div>
                            <div className="btn-adjust">
                                <Button
                                    label={"Unstake"}
                                    size={"btn-lg"}
                                    type={"btn-secondary"}
                                    onClick={() => setToggle((prevState) => !prevState)}
                                />
                                <Button
                                    label={"Harvest"}
                                    size={"btn-lg"}
                                    type={"btn-secondary"}
                                    onClick={() => setToggle((prevState) => !prevState)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
