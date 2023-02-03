import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
const stories = storiesOf('AddTransactionPopUp', module);

const addTransactionSelects = {
  tx_type: {
    name: 'Tranx Type',
    value: 'tx_type',
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
  },
  account_type: {
    name: 'Account Type',
    value: 'account_type',
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
  },
  tx_currency: {
    name: 'Tranx Currency',
    value: 'tx_currency',
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
  },
};

stories.add('AddTransactionPopUp', () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      {active && (
        <Popup 
          type={'addTransaction'}
          label={'Manually Add Transaction'}
          addTokenCustomStyles={{width: '596px'}}
          handlePopUpClose={() => setActive(false)}
          addTransactionSelects={addTransactionSelects}
          handleAddTransaction={(data) => {
            console.log(data);
          }}
        />
      )}
    </div>
  );
});
  