import "./WithdrawSettingsPopUp.css";
import { Visual } from "../Visual";
import { Switches } from "../Switches";
import { Input } from "../Input";

export const WithdrawSettingsPopUp = ({ cardBody }) => {

    const currrencies = ["Binance coin", "Bitcoin", "USDT"]

    return (
        <div className="withdraw-settings-main-fixed-container">
            <div className={`withdraw-settings-main-wrapp`} >
                <Visual
                    label={cardBody.header.h}
                    element={"popup-header"}
                    customStyles={{ width: "100%" }}
                />
                <div className="withdraw-settings-body">
                    <p>{cardBody.text}</p>
                    <div className="withdraw-settings-flex">
                        <p>{cardBody.switches}</p>
                        <Switches type={"sm-switches"} size={"size"} />
                    </div>
                    <div className="withdraw-settings-flex">
                        <div className="withdraw-input-wrapp">
                            <Input
                                type={"default"}
                                // value={value}
                                icon={true}
                                inputType={'text'}
                                placeholder={cardBody.inputs.placeHolder1}
                                label={cardBody.inputs.input1}
                                subLabel={''}
                                // onChange={changeHandler}
                                customStyles={{ width: "100%" }}
                            />
                            <div className="input-and-form-definition">
                                {cardBody.definitions.svg}
                                <p>{cardBody.definitions.definition1}</p>
                            </div>
                        </div>
                        <div className="withdraw-input-wrapp">
                            <Input
                                type={"default"}
                                // value={value}
                                icon={true}
                                inputType={'text'}
                                placeholder={cardBody.inputs.placeHolder2}
                                label={cardBody.inputs.input2}
                                subLabel={''}
                                // onChange={changeHandler}
                                customStyles={{ width: "100%" }}
                            />
                            <div className="input-and-form-definition">
                                {cardBody.definitions.svg}
                                <p>{cardBody.definitions.definition2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="withdraw-input-wrapp">
                        <p>{cardBody.inputs.inputDropDownLabel}</p>
                        <Input
                            type={"lable-input-select"}
                            // icon={false}
                            // selectData={selectData}
                            // defaultData={defaultData}
                            // selectHandler={selectHandler}
                            selectLabel={cardBody.inputs.inputDropDown}
                            // active={active}
                            status={"warning"}
                            // title={'your text'}
                            color={"#FFA726"}
                            customStyles={{ width: "100%" }}
                        />
                        <div className="input-and-form-definition">
                            {cardBody.definitions.svg}
                            <p>{cardBody.definitions.definition3}</p>
                        </div>
                    </div>
                    <div>
                        <h2>Withdraw With</h2>
                        <div>
                        </div>
                    </div>
                    <div className="withdraw-input-wrapp">
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={cardBody.inputs.input3}
                            label={cardBody.inputs.input3}
                            subLabel={''}
                            // onChange={changeHandler}
                            customStyles={{ width: "100%" }}
                        />
                        <div className="input-and-form-definition">
                            {cardBody.definitions.svg}
                            <p>{cardBody.definitions.definition4}</p>
                        </div>
                    </div>
                    <div>
                        <div className="withdraw-settings-flex">
                            <p>{cardBody.switches}</p>
                            <Switches type={"sm-switches"} size={"size"} />
                        </div>
                        <div className="input-and-form-definition">
                            {cardBody.definitions.svg}
                            <p>{cardBody.definitions.definition5}</p>
                        </div>
                    </div>
                    <div className="withdraw-settings-button">{cardBody.button}</div>
                </div>
            </div>
        </div>
    )
}