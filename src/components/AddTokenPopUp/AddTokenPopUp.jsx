import './AddTokenPopUp.css';
import { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { HelpText } from '../HelpText';
import { Popup } from '../Popup';
 
export const AddTokenPopUp = ({
    headLabel,
    selectData,
    inputLabel,
    customStyles
}) => {

    const [data, setData] = useState({
        tranxType: '',
        tranxDate: '',
        tokenAddedTo: '',
        tokenForStage: '',
        paymentGateWay: '',
        paymentAmount: '',
        paymentAddress: '',
        numberToken: '',
        checkBox: false
    });

    const handlerDataUpdate = (value, field) => {
        setData((prevState) => ({ ...prevState, [field]: value }));
        console.log(data)
    };

    
    let popupElement = (
        <div style={customStyles} className='pop-body'>
            <div className='body-row sc'>
                <Input
                    type={"lable-input-select"}
                    // icon={false}
                    selectData={selectData}
                    // defaultData={defaultData}
                    label={inputLabel}
                    // selectHandler={selectHandler}
                    // selectLabel={"select"}
                    // active={active}
                    // status={"warning"}
                    // title={"your text"}
                    // color={"#FFA726"}
                    customStyles={{width: 'calc(50% - 10px)'}}
                    onChange={(e) => handlerDataUpdate(e.target.value, "tranxType")}

                />
                {/* <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={""}
                    label={'Tranx Type'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "tranxType")}
                    customStyles={{width: 'calc(50% - 10px)'}}
                /> */}
                <Input
                    type={"date-picker-input"}
                    onChange={(e) => handlerDataUpdate(e.target.value, "tranxDate")}
                    label={"Tranx Date"}
                    customStyles={{width: 'calc(50% - 10px)'}}
                />
            </div>
            <div className='body-row sc'>
                <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={"default input"}
                    label={'Token Added To'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "tokenAddedTo")}
                    customStyles={{width: 'calc(50% - 10px)'}}
                />
                <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={"default input"}
                    label={'Token for Stage'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "tokenForStage")}
                    customStyles={{width: 'calc(50% - 10px)'}}
                />
            </div>
            <div className='body-row sc'>
                <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={"Manual"}
                    label={'Payment Gateway'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "paymentGateway")}
                    customStyles={{width: 'calc(50% - 10px)'}}
                />
                <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={"0"}
                    label={'Payment Amount'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "paymentAmount")}
                    customStyles={{width: 'calc(50% - 10px)'}}
                />
            </div>
            <div className='body-row'>
                <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={"Optional"}
                    label={'Payment Address'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "paymentAddress")}
                    customStyles={{width: '100%'}}
                />
            </div>
            <div className='body-row'>
                <Input
                    type={"default"}
                    // value={value}
                    icon={true}
                    inputType={'text'}
                    placeholder={"0"}
                    label={'Number of Token'}
                    subLabel={''}
                    onChange={(e) => handlerDataUpdate(e.target.value, "numberToken")}
                    customStyles={{width: 'calc(50% - 10px)'}}
                />
                <div style={{width: 'calc(50% - 10px)', background: 'red'}}>
                    <input htmlFor={'checkbox'} type={'checkbox'}  />
                </div>
            </div>
            <div className='body-row'>
                <Button
                    label={'Add Token'}
                    size={'btn-lg'}
                    type={'btn-primary'}
                    arrow={''}
                    element={'button'}
                    customStyles={{width: '100%'}}
                    onClick={() => handlerDataUpdate(data)}
                />
            </div>
            <div className='body-row'>
                <HelpText
                    status={'success'}
                    title={'your text'}
                    color={'#9CCC65'}
                    fontSize={'font-12'}
                    icon={true}
                />
            </div>
        </div>
    );


    
    return (
        <Popup  label={headLabel} body={popupElement} />
    )
};
