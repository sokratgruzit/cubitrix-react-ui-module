import { useState } from 'react';
import './AddTokenPopUp.css';
import { Visual } from '../Visual';
import { Input } from '../Input';
import { Button } from '../Button';
 
export const AddTokenPopUp = ({
    headLabel,
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
    };

    return (
        <div className={`pop-up`}>
            <Visual
                label={headLabel}
                element={"popup-header"}
                customStyles={{ width: "100%" }}
            />
            <div className='pop-body'>
                <div className='pop-item'>
                    <div>
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "tranxType")}
                            customStyles={{}}
                        />
                        <Input
                            type={"date-picker-input"}
                            onChange={(e) => handleUserUpdate(e.target.value, "tranxDate")}
                            label={"Date of Birth"}
                            customStyles={{}}
                        />
                    </div>
                    <div>
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "tokenAddedTo")}
                            customStyles={{}}
                        />
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "tokenForStage")}
                            customStyles={{}}
                        />
                    </div>
                    <div>
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "paymentGateway")}
                            customStyles={{}}
                        />
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "paymentAmount")}
                            customStyles={{}}
                        />
                    </div>
                    <div>
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "tokenAddedTo")}
                            customStyles={{width: '100%'}}
                        />
                    </div>
                    <div>
                        <Input
                            type={"default"}
                            // value={value}
                            icon={true}
                            inputType={'text'}
                            placeholder={"default input"}
                            label={'23123sads'}
                            subLabel={''}
                            onChange={(e) => handleUserUpdate(e.target.value, "tokenAddedTo")}
                            customStyles={{width: '50%'}}
                        />
                        <div>
                            CHECKBOX
                        </div>
                    </div>
                    <div>
                        <Button
                            label={'Sing In'}
                            size={'btn-lg'}
                            type={'btn-primary'}
                            arrow={''}
                            element={'button'}
                            customStyles={{width: '100%'}}
                            onClick={() => onClick(data)}
                        />
                    </div>
                </div>
                
                
            </div>
        </div>
    )
};
