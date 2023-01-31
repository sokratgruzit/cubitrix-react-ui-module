import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
const stories = storiesOf('AddAdminPopUp', module);

stories.add('AddAdminPopUp', () => {
    const [active, setActive] = useState(true);
    
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

    const handleAddAdminBtnClick = (data) => {
        console.log(data);
    };

    return (
      <div>
        {active && (
            <Popup 
                type={'addAdmin'}
                label={'Add Admin'}
                addAdminSelect={addAdminSelect}
                handleAddAdminBtnClick={handleAddAdminBtnClick}
                addAdminError={'cant add admin'}
                handlePopUpClose={() => setActive(false)}
            />
        )}
      </div>
    );
});
