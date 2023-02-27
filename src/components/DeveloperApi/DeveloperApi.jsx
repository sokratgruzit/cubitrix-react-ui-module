import './DeveloperApi.css';
import { Visual } from "../Visual";
import { React } from "react";
import { HelpText } from "../HelpText";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState, useMemo, useCallback } from 'react';
import { useValidation } from '../../hooks/useValidation';

export const DeveloperApi = (props) => {
    const [active, setActive] = useState(false);
    const [emptyFields, setEmptyFields] = useState({});
    const [notValidated, setNotValidated] = useState(false); 

    const handleEmptyFields = useCallback(() => {
        const updatedState = {};
      
        Object?.keys(props?.currentArray)?.forEach(i => {
          if (props?.currentArray[i].length < 1) {
            updatedState[i] = true;
          } else {
            updatedState[i] = false;
          }
        });
        
        setEmptyFields({...updatedState});
      }, [props.currentArray]);

    const handleInputChange = (e, onChange) => {
        if (e.target.value.length > 0) {
            setEmptyFields(prev => ({ ...prev, [e.target.name]: false }));
        }   
        onChange(e);
    };

    let notEmptyList = useMemo(() => {
        if (props.currentArray) {
          return Object.keys(props?.currentArray).filter((key) => !props.currentArray[key]);
        }
    }, [props.currentArray]);
    
    const handleTryItOut = (route) => {
        if (notEmptyList.length > 0 ) {
            handleEmptyFields();
        } else {
            props.handleSubmit(route);
        }
    };

    return (
        <div className={'api-container'}>
            <div className={'api-block'}>
                {props.array.map((item,index) => {
                    return(
                        <div key={index}>
                            <Visual
                                element={'table-header'}
                                label={item.title}
                                fontSize={'font-20'}
                                customStyles={{marginBottom: '20px'}}
                            />
                            <div className={'api-items'}>
                                {item.items.map((apiItem, index) => {
                                    return(
                                        <div className={'api-item'} key={index}>
                                            <div className={'api-item-top'} onClick={() => {
                                                props.setCurrentArray({})
                                                setActive(prev => prev === apiItem.route ? false : apiItem.route)
                                            }}>
                                                <h3>{apiItem.description}</h3>
                                                <p>{apiItem.route}</p>
                                                <div className={'api-item-type'}>
                                                    <div className={`${apiItem.type === 'GET' ? 'api-get' : 'api-post'}`}>{apiItem.type}</div>
                                                </div>
                                            </div>
                                            <div className={`api-item-params-main ${active === apiItem.route ? 'active' : ''}`}>
                                                <div className={'api-item-params-ttl'}>
                                                    <div>Parameters</div>
                                                    <Button
                                                        label={'Try it out'}
                                                        size={'btn-sm'}
                                                        type={'btn-primary'}
                                                        arrow={'arrow-right'}
                                                        element={'button'}
                                                        onClick={() => handleTryItOut(apiItem.route, apiItem.id)}
                                                        disabled={notValidated}
                                                    />
                                                </div>
                                                <div className={'api-item-params-subTtls double'}>
                                                    <div>Name</div>
                                                    <div>Description</div>
                                                </div>
                                                {apiItem.inputs.map((params,index) => {
                                                    const helpText = useMemo(() => ({
                                                        [params.name]: {
                                                        validationType: [params.validation],
                                                        success: `It is valid ${params.title}`,
                                                        failure: `must be valid ${params.title}`
                                                        }
                                                    }), [params.name, params.validation, params.title]);
                                                    
                                                    const formError = useMemo(() => useValidation({ 
                                                        [params?.name]: props.currentArray[params?.name] || ''
                                                    }, helpText), [props.currentArray[params?.name]]);


                                                    
                                                    return (
                                                        <div className={'api-item-params'} key={apiItem.route + params.name + index}>
                                                            <div className={'api-params'}>
                                                                <Input
                                                                    type={"default"}
                                                                    inputType={"text"}
                                                                    label={params.title}
                                                                    name={params.name}
                                                                    editable={true}
                                                                    value={props?.currentArray[params?.name] || ''}
                                                                    onChange={(e) => {
                                                                        if (formError[params?.name]?.failure) {
                                                                            setNotValidated(true);
                                                                        } 
                                                                        if (e.target.value.length < 1 ){
                                                                            setNotValidated(false);
                                                                        }
                                                                        if (formError[params?.name]?.success) {
                                                                            setNotValidated(false);
                                                                        }
                                                                        handleInputChange(e, params.onChange);
                                                                    }}
                                                                    emptyFieldErr={params.required && emptyFields[params?.name]}
                                                                    customStyles={{ width: "100%" }}
                                                                    statusCard= {
                                                                        formError[params?.name] && (
                                                                            <HelpText
                                                                                status={formError[params.name].failure ? 'error' : 'success'}
                                                                                title={formError[params.name].failure || formError[params.name].success}
                                                                                fontSize={'font-12'}
                                                                                icon={true}
                                                                            />
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                            <div className={'api-details'}>
                                                                {params.description}
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                            <div className={`api-item-res-container ${props.responseActive === apiItem.route && active === apiItem.route  ? 'active' : ''}`}>
                                                <div className={'api-item-params-ttl'}>
                                                    <div>Responses</div>
                                                </div>
                                                <div className={'api-item-params-status green'}>
                                                    Successful operation
                                                </div>
                                                <div className={'api-item-res'}>
                                                    <pre className="json-result">
                                                        {JSON.stringify(props.successResponse, null, 2)}
                                                    </pre>
                                                </div>
                                                <div className={'api-item-params-status red'}>
                                                    Error
                                                </div>
                                                <div className={'api-item-res'}>
                                                    <pre className="json-result">
                                                        {JSON.stringify(props.failResponse, null, 2)}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

