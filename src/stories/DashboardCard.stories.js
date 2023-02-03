import { storiesOf } from "@storybook/react";
import { DashboardCard } from "../components/DashboardCard";
import "../assets/css/main-theme.css";

const stories = storiesOf("DashboardCard", module);

stories.add("DashboardCard", () => { 
    return (
        <div style={{ display: 'flex', gap: '40px'}}>
            <DashboardCard 
                type={'sale-card'}
                cardHeader={'TOKEN SALE - DEMO STAGE 2'}
                saleNumber={'850,000'}
                salePercentage={'1.6'}
                lastSaleInfo={'0 since last week'}
                onViewClick={() => console.log('view')}
                cardHeaderButtons={[ { name: 'KYC' }, { name: 'Users' }]}
                handleHeaderBtnClick={(item) => console.log(item)}
            />
            <DashboardCard 
                type={'amount-card'}
                cardHeader={'AMOUNT COLLECTED'}
                cardHeaderButtons={[ { name: 'FIAT' }, { name: 'Crypto' }]}
                usdtNumber={'255'}
                handleHeaderBtnClick={(item) => console.log(item)}
            />
        </div>
    );
});