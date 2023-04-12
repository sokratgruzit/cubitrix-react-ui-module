import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
import {PopupElement} from "../components/PopupElement";
const stories = storiesOf("WriteToEmailPopUp", module);

stories.add("WriteToEmailPopUp", () => {
    const [active, setActive] = useState(true);
    const [createCodeObject, setCreateCodeObject] = useState({});
    const [createCodePopupActive, setCreateCodePopupActive] = useState(true);
    const [multiplyData, setMultiplyData] = useState(["admin@gmail.com","ad2@gmail.com","admin2@il.com","a@g.com","admin2@gil.com","adm@gmail.com","admin2@gmil.com","ad2@mail.com"]);
    const [popUpData, setPopUpData] = useState({
        roles: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    let defaultData = [
        {
            name: "Transaction",
            value: 'hi'
        },
        {
            name: "Hash",
            value: 'hi2'
        },
    ];
    let handleChange = (e) => {
        console.log(e)
    };
    const inputs = [
        {
            title: "Choose Emails",
            type:"lable-input-multi-select",
            name: "referral",
            placeholder: "Enter Code",
            required: true,
            validation: "text",
            successText: "it is valid",
            failureText: "its not valid",
            multiplyData: multiplyData,
            options: defaultData,
            onChange: (e) => handleChange(e),
        },
    ];

    const handleAddAdminBtnClick = () => {
        console.log('hhiii');
        console.log(popUpData)
    };
    const handleCreateCodeSubmit = async () => {
        // const response = await fetch(
        //     "http://localhost:4000/api/referral/assign_refferal_to_user",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             referral: createCodeObject.referral,
        //             address: "koko123aaa",
        //         }),
        //     },
        // );
        // const data = await response.json();

    };

    return (
        <div>
            {active && (
                // <Popup
                //     type={"writeEmail"}
                //     label={"Send Email"}
                //     writeEmailMultiplyData={multiplyData}
                //     witeEmailEmailsData={defaultData}
                //     // addAdminError={"cant add admin"}
                //     handlePopUpClose={() => setActive(false)}
                // />
                <Popup
                popUpElement={
                <PopupElement
                    inputs={inputs}
                    currentObject={createCodeObject}
                    setCurrentObject={setCreateCodeObject}
                    handleSubmit={handleCreateCodeSubmit}
                    submitButtonLabel={"Enter a Code"}
                    customStyles={{ gridTemplateColumns: "100%" }}
                    multiplyData={multiplyData}
                    // popUpElementError={"there is some error"}
                    />
                }
                label={"Create Referral Code"}
                handlePopUpClose={() => setCreateCodePopupActive(false)}
                customStyles={{ width: "623px" }}
                headerCustomStyles={{ background: "#272C57" }}
                />
            )}
        </div>
    );
});
