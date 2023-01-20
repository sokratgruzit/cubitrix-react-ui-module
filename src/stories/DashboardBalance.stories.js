import { storiesOf } from "@storybook/react";
import { DashboardBalance } from "../components/DashboardBalance";

const stories = storiesOf("DashboardBalance", module);

stories.add("DashboardBalance", () => { 
    return (
        <DashboardBalance
            earning={'$8.193010001'}
            usdc={'2.22004 USDC'}
            supply={'$19.1704001'}
            borrow={'$11.9472003'}
        />
    )
})