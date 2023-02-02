import { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Popup } from "../components/Popup";
const stories = storiesOf('AddTokenPopUp', module);

let addTokenSelectData = [
  {
    id: 1,
    title: "option 1",
    list: [],
  },
  {
    id: 2,
    title: "option 2",
    list: [],
  },
  {
    id: 3,
    title: "option 3",
    list: [],
  },
];

stories.add('AddTokenPopUp', () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      {active && (
        <Popup 
          type={'addToken'}
          label={'Manually Add Tokens'}
          addTokenSelectData={addTokenSelectData}
          addTokenInputLabel={'hihihi'}
          addTokenCustomStyles={{width: '596px'}}
          handlePopUpClose={() => setActive(false)}
        />
      )}
    </div>
  );
});
