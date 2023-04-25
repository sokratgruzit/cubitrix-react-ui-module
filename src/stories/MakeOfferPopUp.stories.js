import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
import { PopupElement } from "../components/PopupElement";

const stories = storiesOf("MakeOfferPopUp", module);

stories.add("MakeOfferPopUp", () => {
  const [makeAnOfferActive, setMakeAnOfferActive] = useState(true);
  const [makeAnOfferObject, setMakeAnOfferObject] = useState({});

  let handleChange = (e) => {
    const { name, value } = e.target;
    setMakeAnOfferObject((prev) => ({ ...prev, [name]: value }));
  };

  console.log("makeAnOfferObject", makeAnOfferObject);

  const inputs = [
    {
      title: "Name",
      name: "last_nameaaa1",
      required: true,
      type: "select",
      options: [
        { name: "option1", value: "option1" },
        { name: "option2", value: "option2" },
      ],
      onChange: (e) => handleChange(e),
    },
    {
      title: "Name",
      name: "last_nameaaa2",
      required: true,
      type: "select",
      defaultValue: "option1",
      options: [
        { name: "option1", value: "option1" },
        { name: "option2", value: "option2" },
      ],
      onChange: (e) => handleChange(e),
    },
    {
      title: "Last Name",
      name: "last_nameasd1",
      required: true,
      validation: "text",
      placeholder: "Enter lastname",
      successText: "it is valid",
      failureText: "its not valid",
      handleMax: (e) => console.log("max"),
      onChange: (e) => handleChange(e),
    },
    {
      title: "Last Name",
      description: "Name of trade",
      name: "last_nameasd2",
      required: true,
      placeholder: "Enter lastname",
      validation: "text",
      successText: "it is valid",
      failureText: "its not valid",
      //   handleMax: (e) => console.log("max"),
      onChange: (e) => handleChange(e),
    },
  ];

  return (
    <>
      {makeAnOfferActive && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentObject={makeAnOfferObject}
              setCurrentObject={setMakeAnOfferObject}
              handleSubmit={() => console.log("hi hi")}
              submitButtonLabel={"Approve"}
              //   popUpElementError={"there is some error"}
            />
          }
          label={"Make an offer"}
          handlePopUpClose={() => setMakeAnOfferActive(false)}
        />
      )}
    </>
  );
});
