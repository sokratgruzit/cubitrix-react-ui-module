import { storiesOf } from "@storybook/react";
import { AddTokenPopUp } from "../components/AddTokenPopUp/AddTokenPopUp";
const stories = storiesOf('AddTokenPopUp', module);

let selectData = [
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

stories.add('AddTokenPopUp', ({
  headLabel,
  selectData,
  inputLabel,
  customStyles,
}) => {
    return (
      <AddTokenPopUp 
        headLabel={'Manually Add Tokens'}
        selectData={selectData}
        inputLabel={'hihihi'}
        customStyles={{width: '596px'}}
      />
    )
})
