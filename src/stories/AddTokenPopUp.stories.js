import { storiesOf } from "@storybook/react";
import { AddTokenPopUp } from "../components/AddTokenPopUp/AddTokenPopUp";
const stories = storiesOf('AddTokenPopUp', module);


stories.add('AddTokenPopUp', () => {
    return (
      <AddTokenPopUp
        headLabel={'Manually Add Tokens'}
      />
    )
})
