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

const addAdminSelect = {
  name: 'Some Select',
  value: 'some_select',
  options: [
      {
          name: 'Option1',
          value: 'option1'
      },
      {
          name: 'Option2',
          value: 'option2'
      }
  ]
};

stories.add('AddTokenPopUp', () => {
    return (
      <Popup 
        type={'nikasPopUp'}
        label={'Manually Add Tokens'}
        addTokenSelectData={addTokenSelectData}
        addTokenInputLabel={'hihihi'}
        addTokenCustomStyles={{width: '596px'}}
        // customStyles={{ width: '100px' }}
      />
    )
})
