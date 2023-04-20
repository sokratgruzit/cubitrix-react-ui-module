import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
import { PopupElement } from "../components/PopupElement";
const stories = storiesOf("EditUserPopUp", module);

stories.add("EditUserPopUp", () => {
  const [active, setActive] = useState(true);
  const [createCodeObject, setCreateCodeObject] = useState({});

  // const inputs = [
  //   {
  //     title: "Full Name",
  //     directType: true,
  //     type: "textarea",
  //     name: "textarea",
  //     placeholder: "Enter Code",
  //     required: true,
  //     validation: "text",
  //     successText: "it is valid",
  //     failureText: "its not valid",
  //     onChange: (e) =>
  //       setCreateCodeObject({
  //         ...createCodeObject,
  //         [e.target.name]: e.target.value,
  //       }),
  //   },
  //   {
  //     title: "Organization",
  //     directType: true,
  //     type: "textarea",
  //     name: "textarea",
  //     placeholder: "Enter Code",
  //     required: true,
  //     validation: "text",
  //     successText: "it is valid",
  //     failureText: "its not valid",
  //     onChange: (e) =>
  //       setCreateCodeObject({
  //         ...createCodeObject,
  //         [e.target.name]: e.target.value,
  //       }),
  //   },
  //   {
  //     title: "Website",
  //     directType: true,
  //     type: "textarea",
  //     name: "textarea",
  //     placeholder: "Enter Code",
  //     required: true,
  //     validation: "text",
  //     successText: "it is valid",
  //     failureText: "its not valid",
  //     onChange: (e) =>
  //       setCreateCodeObject({
  //         ...createCodeObject,
  //         [e.target.name]: e.target.value,
  //       }),
  //   },
  // ];

  const inputs = [
    {
      title: "Full Name",
      name: "fullname",
      required: true,
      placeholder: "Full Name",
      onChange: (e) =>
        setCreateCodeObject((prev) => ({ ...prev, fullname: e.target.value })),
    },
    {
      title: "Email",
      name: "email",
      required: true,
      placeholder: "Email",
      onChange: (e) =>
        setCreateCodeObject((prev) => ({ ...prev, email: e.target.value })),
    },
    {
      title: "Roles",
      name: "roles",
      required: true,
      type: "select",
      options: [
        { name: "token1", value: "token1" },
        { name: "token2", value: "token2" },
      ],
      onChange: (e) =>
        setCreateCodeObject((prev) => ({
          ...prev,
          roles: e.target.value,
        })),
    },
    {
      title: "Organization",
      name: "organization",
      required: true,
      placeholder: "Organization",
      onChange: (e) =>
        setCreateCodeObject((prev) => ({
          ...prev,
          organization: e.target.value,
        })),
    },
    {
      title: "Website",
      name: "website",
      required: true,
      placeholder: "Website",
      onChange: (e) =>
        setCreateCodeObject((prev) => ({
          ...prev,
          website: e.target.value,
        })),
    },
    {
      title: "Image",
      name: "image",
      required: false,
      directType: true,
      type: "label-input-upload",
      // onChange: (e) =>
      //   // setCreateCodeObject((prev) => ({
      //   //   ...prev,
      //   //   image: e.target.value,
      //   // })),
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
              handleSubmit={() => console.log("submit", createCodeObject)}
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
