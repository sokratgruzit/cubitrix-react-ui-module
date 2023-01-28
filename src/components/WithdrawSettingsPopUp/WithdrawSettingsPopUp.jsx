import "./WithdrawSettingsPopUp.css";
import { Visual } from "../Visual";
import { Switches } from "../Switches";
import { Input } from "../Input";

export const WithdrawSettingsPopUp = ({ cardBody, active, customStyle }) => {
    return (
        <div className={`withdraw-settings-main-fixed-container ${active === !true ? "animation" : "not-active"}`}>
            <div className={`withdraw-settings-main-wrapp not-active`} style={customStyle}>
                <div className="withdrow-card-header not-active">
                    <Visual
                        label={cardBody.header.h}
                        element={"popup-header"}
                        customStyles={{ width: "100%" }}
                    />
                </div>
                <div className="withdraw-settings-body">
                    <div className="withdraw-card-body-description not-active">
                        <p>{cardBody.text}</p>
                        <div className="withdraw-settings-flex">
                            <p>{cardBody.switches}</p>
                            <Switches type={"sm-switches"} size={"size"} />
                        </div>
                    </div>
                    <div className="withdraw-settings-flex not-active">
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
                    <div className="withdraw-input-wrapp not-active">
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
                    <div className="not-active withdraw-currencies-list-container">
                        <h2>Withdraw With</h2>
                        <div className="withdraw-currencies-list">
                            {cardBody.currencies.map((item, index) => {
                                return (
                                    <div className="checkbox-curencies" key={index}>
                                        <label for={index}>
                                            <input type="checkbox" id={index} defaultChecked="checked" />
                                            {item}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="withdraw-input-wrapp not-active">
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
                    <div className="not-active withdraw-card-footer">
                        <div className="withdraw-settings-flex">
                            <p>{cardBody.switches}</p>
                            <Switches type={"sm-switches"} size={"size"} />
                        </div>
                        <div className="input-and-form-definition">
                            {cardBody.definitions.svg}
                            <p>{cardBody.definitions.definition5}</p>
                        </div>
                    </div>
                    <div className="withdraw-settings-button-wrapp not-active">
                        <div className="withdraw-settings-button">{cardBody.button}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}