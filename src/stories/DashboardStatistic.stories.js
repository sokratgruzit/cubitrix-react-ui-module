import { storiesOf } from "@storybook/react";
import { DashboardStatistic } from '../components/DashboardStatistic';
const stories = storiesOf("DashboardStatistic", module);

stories.add("DashboardStatistic", () => {
    let data = [
    

                {
                    id: 1,
                    sizeNum: '12312',
                    priceNum: '333',
                    mineNum: '-'
                },
                {
                    id: 2,
                    sizeNum: '2222222',
                    priceNum: '1222223',
                    mineNum: '-'
                },
                {
                    id: 3,
                    sizeNum: '33333333',
                    priceNum: '333333333',
                    mineNum: '-'
                },
                {
                    id: 4,
                    sizeNum: '444444444',
                    priceNum: '44444444',
                    mineNum: '-'
                },
                {
                    id: 5,
                    sizeNum: '5555555',
                    priceNum: '123553',
                    mineNum: '-'
                },
                {
                    id: 6,
                    sizeNum: '156565656512',
                    priceNum: '156565',
                    mineNum: '-'
                },
                {
                    id: 7,
                    sizeNum: '7777777',
                    priceNum: '777777',
                    mineNum: '-'
                },
                {
                    id: 8,
                    sizeNum: '888888888',
                    priceNum: '8888888',
                    mineNum: '-'
                },
                {
                    id: 9,
                    sizeNum: '999999999',
                    priceNum: '999999',
                    mineNum: '-'
                },
                {
                    id: 10,
                    sizeNum: '0000000',
                    priceNum: '000000',
                    mineNum: '-'
                },
    ]            
    let data2 =[    
                {
                    id: 1,
                    sizeNum: '1111111',
                    priceNum: '111111',
                    mineNum: '-'
                },
                {
                    id: 2,
                    sizeNum: '1212121212112',
                    priceNum: '12121112',
                    mineNum: '-'
                },
                {
                    id: 3,
                    sizeNum: '1313131313',
                    priceNum: '13131313',
                    mineNum: '-'
                },
                {
                    id: 4,
                    sizeNum: '1414141414',
                    priceNum: '1144141414',
                    mineNum: '-'
                },
                {
                    id: 5,
                    sizeNum: '15151515',
                    priceNum: '15151515',
                    mineNum: '-'
                },
                {
                    id: 6,
                    sizeNum: '16161616161616',
                    priceNum: '161616161616',
                    mineNum: '-'
                },
                {
                    id: 7,
                    sizeNum: '1717171717',
                    priceNum: '1717171717',
                    mineNum: '-'
                },
                {
                    id: 8,
                    sizeNum: '1818181818',
                    priceNum: '1818181818',
                    mineNum: '-'
                },
                {
                    id: 9,
                    sizeNum: '19919191919',
                    priceNum: '191991919',
                    mineNum: '-'
                },
                {
                    id: 10,
                    sizeNum: '2020202020',
                    priceNum: '2020202020',
                    mineNum: '-'
                },
                
]
    
    return (
        <div>
            <DashboardStatistic
                data={data}
                data2={data2}
            />
        </div>
    )
})