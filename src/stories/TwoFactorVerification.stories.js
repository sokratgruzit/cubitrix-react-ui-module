import { TwoFactorVerification } from "../components/TwoFactorVerification";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("TwoFactorVerification", module);

stories.add("TwoFactorVerification", () => { 
    return (
        <div>
            <TwoFactorVerification
                mainContainer = {'mainContainer'}
            />            
        </div>

    )
})