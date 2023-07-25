import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { LevelSystem } from "../components/LevelSystem";
import { Popup } from "../components/Popup";
const stories = storiesOf("LevelSystem", module);

stories.add("LevelSystem", () => {
    const [lvlType,setLvlType] = useState('binary');
    let popUpTd = [
        {
            level: "UNI LVL",
            complandHolding: "-",
            rebaseRate: "-",
        },
        {
            level: "VIP 1",
            complandHolding: "-",
            rebaseRate: "-"
        },
    ];
    let uniTh = [
        "Level", "Percentage"
    ]
    let binaryTh = [
        "From", "To", "Price"
    ]
    let binaryData = {
        "name": "Binary Bv",
        "active": false,
        "level": "3",
        "calculated": "monthly",
        "maxUsers": "11",
        "bv": "5000",
        "flush_out": 0,
        "options": [
            {
                from: "0",
                to: "100000",
                price: "500"
            },
            {
                "from": "100000",
                "to": "300000",
                "price": "300"
            },
            {
                "from": "300000",
                "to": null,
                "price": "100"
            }
        ],
        "flushed_out": "3"
    }
    let uniData = [
        "5",
        "2",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
    ]
    let tableType = (
        <div className={`referral-inner-table-more`}>
            <div
                className={`referral-table-more-svg ${
                    lvlType === "uni" ? "referral-table-more-svg_active" : ""
                }`}
                onClick={() => setLvlType("uni")}>
                Uni
            </div>
            <div
                className={`referral-table-more-svg ${
                    lvlType === "binary" ? "referral-table-more-svg_active" : ""
                }`}
                onClick={() => setLvlType("binary")}>
                Binary
            </div>
        </div>
    );
    return (
        <div>
            <Popup
                popUpElement={
                    <LevelSystem tableHead={lvlType == 'uni' ? uniTh : binaryTh} tableData={lvlType == 'uni' ? uniData :  binaryData.options} bv={binaryData.bv} mobile={false} type={lvlType} typeBns={tableType} />
                }
                label={"Referrer Level System"}
                handlePopUpClose={() => setLevelSystemPopupActive(false)}
                description={
                    "Everyone starts with the Casual tier, and you can level up the tier by increasing your Comland holding"
                }
                headerCustomStyles={{ background: "rgba(16, 40, 43, 1)" }}
            />
        </div>
    );
});
