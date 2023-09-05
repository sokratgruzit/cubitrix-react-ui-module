import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
// import { AdminPanel } from "../components/AdminPanel";
import { SignIn } from "../components/Auth/SignIn";

const stories = storiesOf("Test", module);

stories.add("Test", () => {
    const [animate, setAnimate] = useState(true);


    return (
        <div style={{margin: '200px', position: 'relative', width: '100%', height: '100vh'}}>
            <SignIn
                // onClick={""}
                sideBarClose={""}
                signInState={""}
                otpEnabled={false}
                otpState={true}
                handleTFA={""}
                // resetPasswordState={resetPasswordState}
                // handleResetPassword={handleResetPassword}
                // handleDataChange={handleDataChange}
            />
        </div>
    );
});
