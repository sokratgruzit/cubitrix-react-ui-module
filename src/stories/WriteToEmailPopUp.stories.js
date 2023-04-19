import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
import { PopupElement } from "../components/PopupElement";
const stories = storiesOf("WriteToEmailPopUp", module);

stories.add("WriteToEmailPopUp", () => {
  const [active, setActive] = useState(true);
  const [createCodeObject, setCreateCodeObject] = useState({
    emails: [],
  });

  let defaultData = [
    {
      name: "email1",
      value: "email1",
    },
    {
      name: "email2",
      value: "email2",
    },
    {
      name: "email3",
      value: "email3",
    },
    {
      name: "email4",
      value: "email4",
    },
  ];

  let handleChange = (e) => {
    if (!createCodeObject.emails.includes(e.target.value)) {
      return setCreateCodeObject((prev) => ({
        ...prev,
        [e.target.name]: [...prev[e.target.name], e.target.value],
      }));
    }
    console.log("email is added already");
  };

  console.log(createCodeObject);

  const handleItemRemove = (item) => {
    setCreateCodeObject((prevState) => {
      const updatedEmails = prevState.emails.filter((email) => email !== item);
      return { ...prevState, emails: updatedEmails };
    });
  };

  const inputs = [
    {
      title: "Choose Emails",
      directType: true,
      type: "lable-input-multi-select",
      name: "emails",
      placeholder: "Enter Code",
      required: true,
      validation: "text",
      successText: "it is valid",
      failureText: "its not valid",
      multiplyData: createCodeObject.emails,
      options: defaultData,
      defaultValue: [],
      onChange: (e) => handleChange(e),
      handleItemRemove: (item) => handleItemRemove(item),
      onChangeDropdown: (value) => console.log(value),
    },
    {
      title: "Choose Emails",
      directType: true,
      type: "textarea",
      name: "textarea",
      placeholder: "Enter Code",
      required: true,
      validation: "text",
      successText: "it is valid",
      failureText: "its not valid",
      onChange: (e) =>
        setCreateCodeObject({
          ...createCodeObject,
          [e.target.name]: e.target.value,
        }),
    },
  ];

  return (
    <div>
      {active && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentObject={createCodeObject}
              setCurrentObject={setCreateCodeObject}
              handleSubmit={() => console.log("submit")}
              submitButtonLabel={"Enter a Code"}
              customStyles={{ gridTemplateColumns: "100%" }}
              // popUpElementError={"there is some error"}
            />
          }
          label={"Create Referral Code"}
          handlePopUpClose={() => setActive(true)}
          customStyles={{ width: "623px" }}
          headerCustomStyles={{ background: "#272C57" }}
        />
      )}
    </div>
  );
});
