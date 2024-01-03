import { Arrow } from "../../assets/svgs";

import "./Header.css";

export const TradeBar = ({ tradePriceData, showBalance }) => {
    return (
        <div 
            className="tradeBarContainer"
            style={{ top: showBalance ? "0px" : "70px" }}
        >
            <div className="tradeBarItem">
                <div className="tradeBarBalanceTitle">Balance</div>
                <div className="tradeBarBalance">
                    {tradePriceData.balance.currency}{" "}{tradePriceData.balance.value}
                </div>
            </div>
            <div className="tradeBarItem">
                <div className="tradeBarBalanceTitle">Free Margin</div>
                <div className="tradeBarBalance">
                    {tradePriceData.freeMargin.currency}{" "}{tradePriceData.freeMargin.value}
                </div>
            </div>
            <div className="tradeBarItem">
                <div className="tradeBarBalanceTitle">Used Margin</div>
                <div className="tradeBarBalance">
                    {tradePriceData.usedMargin.currency}{" "}{tradePriceData.usedMargin.value}
                </div>
            </div>
            <div className="tradeBarItem">
                <div className="tradeBarBalanceTitle">Profit</div>
                <div className="tradeBarBalance">
                    {tradePriceData.profit.currency}{" "}{tradePriceData.profit.value}
                </div>
            </div>
            <div className="tradeBarItem">
                <div className="tradeBarBalanceTitle">Equity</div>
                <div className="tradeBarBalance">
                    {tradePriceData.equity.currency}{" "}{tradePriceData.equity.value}
                </div>
            </div>
            <div className="tradeBarItem">
                <div className="tradeBarBalanceTitle">Margin Level</div>
                <div 
                    className="tradeBarBalance tabBarFlex"
                    style={{ color: tradePriceData.marginLevel.dir ? "rgba(103, 190, 122, 1)" : "rgba(232, 116, 80, 1)"}}
                >
                    <div 
                        className="tradeBarArrow"
                        style={{ 
                            borderRight: tradePriceData.marginLevel.dir ? "1px solid rgba(103, 190, 122, 1)" : "1px solid rgba(232, 116, 80, 1)",
                            borderBottom: tradePriceData.marginLevel.dir ? "1px solid rgba(103, 190, 122, 1)" : "1px solid rgba(232, 116, 80, 1)"
                        }}
                    ></div>
                    {tradePriceData.marginLevel.value}{" "}{tradePriceData.marginLevel.measure}
                </div>
            </div>
        </div>
    );
};
