import { useState, useCallback, useMemo, useEffect } from 'react';

// hooks
import { useValidation } from '../../hooks/useValidation';

// components
import { Input } from '../Input';
import { Button } from '../Button';
import { HelpText } from '../HelpText';

// styles
import './MakeAnOffer.css';

export const MakeAnOffer = ({ 
    inputs, 
    currentArray, 
    setCurrentArray, 
    makeOfferError, 
    handleSubmit 
}) => {
    const [emptyFields, setEmptyFields] = useState({});
    const [notValidated, setNotValidated] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleEmptyFields = useCallback((inputs) => {
        inputs.map((input) => {
            if (input.required === true && currentArray[input.name].length < 1) {
                setEmptyFields(prev => ({ ...prev, [input.name]: true}))
            }
            if (input.required === false) {
                setEmptyFields(prev => ({ ...prev, [input.name]: false}))
            }
        })
    }, [currentArray]);

    const handleSetFields = useCallback((inputs) => {
        inputs?.map((input) => {
            if (input.required) {
                setCurrentArray((prev) => ({ ...prev, [input.name]: "" }))
            }
        }
        );
    }, []);

    useEffect(() => {
        handleSetFields(inputs)
    }, []);

    const handleInputChange = (e, params) => {
        const { name, validation, onChange, successText, failureText } = params;
        const inputValue = e.target.value.trim();
        if (params.validation) {
            let helpText = {
                [name]: {
                    validationType: [validation],
                    success: successText,
                    failure: failureText
                }
            };

            let formError = useValidation({ [name]: inputValue || '' }, helpText);

            let error = formError[name];

            error?.failure && setNotValidated(true);

            if (error?.success || inputValue?.length < 1) {
                setNotValidated(false);
            }

            setFormErrors(prev => ({ ...prev, ...formError}));
        }

        inputValue?.length > 0 && setEmptyFields(prev => ({ ...prev, [name]: false }));

        onChange(e);
    };

    const handleInputChangeWithType = (e, params) => {
        const { name, onChange } = params;
        setEmptyFields(prev => ({ ...prev, [name]: false }));
        let data = {
            target: {
                value: e,
                name
            }
        };

        onChange(data)
    };

    const notEmptyList = useMemo(() => Object.keys(currentArray)?.filter((key) => !currentArray[key]) ?? [], [currentArray]);

    const handleSubmitClick = (inputs) => notEmptyList.length > 0 ? handleEmptyFields(inputs) : handleSubmit();

    return (
        <div className='make-offer-wrap'>
            <div className='make-offer-inputs'>
                {inputs?.map((params, index) => {
                    return (
                        <div className='make-offer-input-container'>
                            <Input
                                Key={index}
                                type={
                                    params.type === "select" 
                                        ? "lable-input-select" 
                                            : "default" 
                                }                                                                   
                                inputType={params?.inputType}
                                label={params.title}
                                name={params.name}
                                value={params.type === "select" ? 'Any' : currentArray[params?.name] || ''}
                                onChange={(e) => !params.type ? handleInputChange(e, params) : handleInputChangeWithType(e, params)}
                                emptyFieldErr={params.required && emptyFields[params?.name]}
                                customStyles={{ width: "100%" }}
                                statusCard= {
                                    formErrors[params?.name] && currentArray[params?.name]?.length > 0 && (
                                        <HelpText
                                            status={formErrors[params.name].failure ? 'error' : 'success'}
                                            title={formErrors[params.name].failure || formErrors[params.name].success}
                                            fontSize={'font-12'}
                                            icon={true}
                                        />
                                    )
                                }
                                selectHandler={(opt) => handleInputChangeWithType(opt, params)}
                                defaultData={params?.options}
                            />
                            {params.handleMax && <p className='font-12 make-offer-max' onClick={params.handleMax}>MAX</p>}
                        </div>
                        )
                    })}
            </div>
            <Button
                label={"Approve"}
                size={"btn-lg"}
                type={"btn-primary"}
                element={"button"}
                customStyles={{ margin: "0", width: "100%" }}
                onClick={() => handleSubmitClick(inputs)}
                disabled={notValidated || (makeOfferError && true)}
            />
            {makeOfferError && (
                <HelpText
                    status={"warning"}
                    title={makeOfferError}
                    color={"#9CCC65"}
                    fontSize={"font-12"}
                    icon={true}
                    customStyles={{ marginRight: 'auto' }}
                />
            )}
        </div>
    )
}
