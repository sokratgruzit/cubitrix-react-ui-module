import { storiesOf } from "@storybook/react";
import { DashboardCard } from "../components/DashboardCard";
import "../assets/css/main-theme.css";

const stories = storiesOf("DashboardCard", module);

stories.add("DashboardCard", () => { 
    return (
        <DashboardCard 
            type={'sale-card'}
            cardHeader={'TOKEN SALE - DEMO STAGE 2'}
            saleNumber={'850,000'}
            salePercentage={'1.6'}
        />
    );
});