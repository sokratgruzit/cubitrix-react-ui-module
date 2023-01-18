import { storiesOf } from "@storybook/react";
import { DashbordBalance } from "../components/DashbordBalance";

const stories = storiesOf("DashbordBalance", module);

stories.add("DashbordBalance", () => { 
    return (
        <DashbordBalance
            earning={'$8.193010001'}
            usdc={'2.22004 USDC'}
            supply={'$19.1704001'}
            borrow={'$11.9472003'}
        />
    )
})