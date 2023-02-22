import { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Calculator } from "../components/Calculator";

const stories = storiesOf("Calculator", module);

stories.add("Calculator", () => {
    const [stakeData, setStakeData] = useState({
        amount: '',
        timeperiod: 0
      });

    const durationOptions = [
    {
        title: "30 D",
        time: 0,
        period: 30,
    },
    {
        title: "60 D",
        time: 1,
        period: 60,
    },
    {
        title: "90 D",
        time: 2,
        period: 90,
    },
    {
        title: "180 D",
        time: 3,
        period: 180,
    },
    {
        title: "360 D",
        time: 4,
        period: 360,
    },
    ];
    return (
        <div style={{ background: '#0C1121', height: '500px'}}>
            <Calculator 
                durationOptions={durationOptions}
                handleCalculatorSubmit={() => console.log('submit')}
                setStakeData={setStakeData}
                stakeData={stakeData}
            />
        </div>
    );
});
