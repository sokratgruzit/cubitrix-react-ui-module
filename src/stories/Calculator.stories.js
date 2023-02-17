import { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Calculator } from "../components/Calculator";

const stories = storiesOf("Calculator", module);

stories.add("Calculator", () => {
    const [stakeData, setStakeData] = useState({
        amount: '',
        duration: '30'
      });
    const durationOptions = [
        {
            title: "30",
        },
        {
            title: "60",
        },
        {
            title: "90",
        },
        {
            title: "180",
        },
        {
            title: "360",
        },
    ];
    return (
        <div style={{ background: '#0C1121', height: '500px'}}>
            <Calculator 
                durationOptions={durationOptions}
                handleSubmit={() => console.log('submit')}
                setStakeData={setStakeData}
                stakeData={stakeData}
            />
        </div>
    );
});
