import './DeveloperApi.css';
import {Visual} from "../Visual";
import {React} from "react";
import {HelpText} from "../HelpText";
import {Input} from "../Input";
import {Button} from "../Button";

export const DeveloperApi = (props) => {
    const changeHandler = (e) => {
        // console.log(e.target.value);
    };

    return (
        <div className={'api-container'}>
            <div className={'api-block'}>
                {props.array.map((item,index) => {
                    return(
                        <>
                            <Visual
                                element={'table-header'}
                                label={item.title}
                                fontSize={'font-20'}
                                customStyles={{marginBottom: '20px'}}
                            />
                            <div className={'api-items'} key={index}>
                                {item.items.map((apiItem, index) => {
                                    return(
                                        <div className={'api-item'} key={apiItem.route + index}>
                                            <div className={'api-item-top'}>
                                                <h3>{apiItem.description}</h3>
                                                <p>{apiItem.route}</p>
                                                <div className={'api-item-type'}>
                                                    <div className={`${apiItem.type === 'GET' ? 'api-get' : 'api-post'}`}>{apiItem.type}</div>
                                                </div>
                                            </div>
                                            <div className={'api-item-params-main active'}>
                                                <div className={'api-item-params-ttl'}>
                                                    <div>Parameters</div>
                                                    <Button
                                                        label={'Try it out'}
                                                        size={'btn-sm'}
                                                        type={'btn-primary'}
                                                        arrow={'arrow-right'}
                                                        element={'button'}
                                                    />
                                                </div>
                                                <div className={'api-item-params-subTtls double'}>
                                                    <div>Name</div>
                                                    <div>Description</div>
                                                </div>
                                                {apiItem.inputs.map((params,index) => {
                                                    return (
                                                        <div className={'api-item-params'} key={apiItem.route + params.name + index}>
                                                            <div className={'api-params'}>
                                                                {props?.currentArray[params?.name]}
                                                                <Input
                                                                    type={"default"}
                                                                    inputType={"text"}
                                                                    icon={false}
                                                                    label={params.title}
                                                                    name={params.name}
                                                                    editable={true}
                                                                    value={props?.currentArray[params?.name]}
                                                                    subLabel={""}
                                                                    placeholder={""}
                                                                    onChange={params.onChange}
                                                                    customStyles={{ width: "100%" }}
                                                                />
                                                            </div>
                                                            <div className={'api-details'}>
                                                                {params.description}
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                            <div className={'api-item-res-container active'}>
                                                <div className={'api-item-params-ttl'}>
                                                    <div>Responses</div>
                                                </div>
                                                <div className={'api-item-params-status green'}>
                                                    Successful operation
                                                </div>
                                                <div className={'api-item-res'}>
                                                    {'{\n' +
                                                        '                                    "message": "OK",\n' +
                                                        '                                    "result": [\n' +
                                                        '                                {\n' +
                                                        '                                    "blockHash": "0x373d339e45a701447367d7b9c7cef84aab79c2b2714271b908cda0ab3ad0849b",\n' +
                                                        '                                    "blockNumber": "65204",\n' +
                                                        '                                    "confirmations": "5994246",\n' +
                                                        '                                    "contractAddress": "",\n' +
                                                        '                                    "cumulativeGasUsed": "122207",\n' +
                                                        '                                    "from": "0x3fb1cd2cd96c6d5c0b5eb3322d807b34482481d4",\n' +
                                                        '                                    "gas": "122261",\n' +
                                                        '                                    "gasPrice": "50000000000",\n' +
                                                        '                                    "gasUsed": "122207",\n' +
                                                        '                                    "hash": "0x98beb27135aa0a25650557005ad962919d6a278c4b3dde7f4f6a3a1e65aa746c",\n' +
                                                        '                                    "input": "0xf00d4b5d000000000000000000000000036c8cecce8d8bbf0831d840d7f29c9e3ddefa63000000000000000000000000c5a96db085dda36ffbe390f455315d30d6d3dc52",\n' +
                                                        '                                    "isError": "0",\n' +
                                                        '                                    "nonce": "0",\n' +
                                                        '                                    "timeStamp": "1439232889",\n' +
                                                        '                                    "to": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",\n' +
                                                        '                                    "transactionIndex": "0",\n' +
                                                        '                                    "txreceipt_status": "1",\n' +
                                                        '                                    "value": "0"\n' +
                                                        '                                }\n' +
                                                        '                                    ],\n' +
                                                        '                                    "status": "1"\n' +
                                                        '                                }'}
                                                </div>
                                                <div className={'api-item-params-status red'}>
                                                    Error
                                                </div>
                                                <div className={'api-item-res'}>
                                                    {'{\n' +
                                                        '                                    "message": "OK",\n' +
                                                        '                                    "result": [\n' +
                                                        '                                {\n' +
                                                        '                                    "blockHash": "0x373d339e45a701447367d7b9c7cef84aab79c2b2714271b908cda0ab3ad0849b",\n' +
                                                        '                                    "blockNumber": "65204",\n' +
                                                        '                                    "confirmations": "5994246",\n' +
                                                        '                                    "contractAddress": "",\n' +
                                                        '                                    "cumulativeGasUsed": "122207",\n' +
                                                        '                                    "from": "0x3fb1cd2cd96c6d5c0b5eb3322d807b34482481d4",\n' +
                                                        '                                    "gas": "122261",\n' +
                                                        '                                    "gasPrice": "50000000000",\n' +
                                                        '                                    "gasUsed": "122207",\n' +
                                                        '                                    "hash": "0x98beb27135aa0a25650557005ad962919d6a278c4b3dde7f4f6a3a1e65aa746c",\n' +
                                                        '                                    "input": "0xf00d4b5d000000000000000000000000036c8cecce8d8bbf0831d840d7f29c9e3ddefa63000000000000000000000000c5a96db085dda36ffbe390f455315d30d6d3dc52",\n' +
                                                        '                                    "isError": "0",\n' +
                                                        '                                    "nonce": "0",\n' +
                                                        '                                    "timeStamp": "1439232889",\n' +
                                                        '                                    "to": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",\n' +
                                                        '                                    "transactionIndex": "0",\n' +
                                                        '                                    "txreceipt_status": "1",\n' +
                                                        '                                    "value": "0"\n' +
                                                        '                                }\n' +
                                                        '                                    ],\n' +
                                                        '                                    "status": "1"\n' +
                                                        '                                }'}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    );
}

