import { Button } from "../Button";
import "./Table.css";
import {useState} from "react";
import { Functions } from '../../hooks/Functions';

export const Table = (props) => {
    const { mobile } = Functions();
    console.log(mobile)
    return (
        <>
            <div className={`${props.type}`}>
                <div className="table-head">
                    {props.tableHead.map((item) => {
                        return (
                            <div key={item.id} className={`th  ${item.mobileWidth ? true : false }`} style={{width: `${mobile ? item.mobileWidth : item.width}%`}}>
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
