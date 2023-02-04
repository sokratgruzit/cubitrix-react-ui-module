import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
const stories = storiesOf("AddAdminPopUp", module);

stories.add("AddAdminPopUp", () => {
  const [active, setActive] = useState(true);
  const [popUpData, setPopUpData] = useState({
    roles: 'option1',
    email: '',
    password: ''
  });

  const addAdminSelect = {
    name: "Roles",
    value: "roles",
    options: [
      {
        name: "Option1",
        value: "option1",
      },
      {
        name: "Option2",
        value: "option2",
      },
    ],
  };

  console.log(popUpData)

  const handleAddAdminBtnClick = (data) => {
    console.log(data);
    console.log('hhiii');
  };

  return (
    <div>
      {active && (
        <Popup
          type={"addAdmin"}
          label={"Add Admin"}
          addAdminSelect={addAdminSelect}
          handleAddAdminBtnClick={handleAddAdminBtnClick}
          addAdminError={"cant add admin"}
          handlePopUpClose={() => setActive(false)}
          popUpData={popUpData}
          setPopUpData={setPopUpData}
        />
      )}
    </div>
  );
});
