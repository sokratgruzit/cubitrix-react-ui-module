import "./MarketCard.css";
import { Button } from "../Button";
import React, { useState } from "react";

export const MarketCard = (props) => {
    const [search, setSearch] = useState(false);
    const [markets, setMarkets] = useState(false);
    const searchToggle = () => {
        setSearch(!search)
    }
    return (
        <div
            className={`market-card`}
            style={props.customStyles}
        >
            <div className={`market-card-head ${props.active == true && markets == false ? 'active' : ''}`}>
                <div className={`market-card-currency`}>
                    <div className={`market-card-logo`}>
                        <img src={require(`../../assets/img/currency/tether.png`)} alt="country" />
                    </div>
                    <div className="market-card-currency-price">
                        <div>ETH-USD</div>
                        <span className={'plus-market'}>$1,245.0</span>
                    </div>
                </div>
                <div className={`market-card-head-button`}>
                    <Button
                        label={'All Markets'}
                        type={'btn-tertiary'}
                        arrow={'arrow-right'}
                        element={'button'}
                        onClick={() => setMarkets((prevState) => !prevState)}
                    />
                </div>
                <div className={`market-card-head-active ${markets == true ? 'active' : ''}`}>
                    <div> Select Market</div>
                    <span onClick={() => setMarkets((prevState) => !prevState)}>
                        Close
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.299 9.16666L6.47141 5.33902C6.01937 4.88698 5.27968 4.88698 4.82764 5.33902L1 9.16666" stroke="#3D5AFE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.299 1L6.47141 4.82764C6.01937 5.27968 5.27968 5.27968 4.82764 4.82764L1 1" stroke="#3D5AFE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className={`market-card-content ${markets == true ? 'active' : ''}`}>
                <div className={'market-card-tabs'}>
                    <div className={`market-card-tabs-btns ${search ? 'disable' : ''}`}>
                        <div className={'market-card-tab'}>All</div>
                        <div className={'market-card-tab'}>Layer 1</div>
                        <div className={'market-card-tab'}>DeFi</div>
                        <div className={'market-card-tab'}>
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 0.833313H16.5" stroke="#9C9DA3" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M4 5H14" stroke="#9C9DA3" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M7.33331 9.16663H10.6666" stroke="#9C9DA3" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <input type="text" className={`market-card-search-input ${search ? 'active' : ''}`} placeholder='Type name'/>
                    <div
                        className={`market-card-tab-search  ${search ? 'active' : ''}`}
                        onClick={searchToggle}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.65 14.3C8.52329 14.3 9.38803 14.128 10.1948 13.7938C11.0017 13.4596 11.7348 12.9698 12.3523 12.3523C12.9698 11.7348 13.4596 11.0017 13.7938 10.1948C14.128 9.38803 14.3 8.52329 14.3 7.65C14.3 6.77671 14.128 5.91197 13.7938 5.10515C13.4596 4.29834 12.9698 3.56525 12.3523 2.94774C11.7348 2.33023 11.0017 1.84039 10.1948 1.5062C9.38803 1.17201 8.52329 1 7.65 1C5.88631 1 4.19486 1.70062 2.94774 2.94774C1.70062 4.19486 1 5.88631 1 7.65C1 9.41369 1.70062 11.1051 2.94774 12.3523C4.19486 13.5994 5.88631 14.3 7.65 14.3V14.3Z" stroke="#9C9DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 15L13.6 13.6" stroke="#9C9DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={'market-card-items'}>
                    <div className={'market-card-item'}>
                        <div className={'market-card-item-inn'}>
                            <div className={'market-card-favorite'}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2977 2.6325L11.6177 5.2725C11.7977 5.64 12.2777 5.9925 12.6827 6.06L15.0752 6.4575C16.6052 6.7125 16.9652 7.8225 15.8627 8.9175L14.0027 10.7775C13.6877 11.0925 13.5152 11.7 13.6127 12.135L14.1452 14.4375C14.5652 16.26 13.5977 16.965 11.9852 16.0125L9.74268 14.685C9.33768 14.445 8.67018 14.445 8.25768 14.685L6.01518 16.0125C4.41018 16.965 3.43518 16.2525 3.85518 14.4375L4.38768 12.135C4.48518 11.7 4.31268 11.0925 3.99768 10.7775L2.13768 8.9175C1.04268 7.8225 1.39518 6.7125 2.92518 6.4575L5.31768 6.06C5.71518 5.9925 6.19518 5.64 6.37518 5.2725L7.69518 2.6325C8.41518 1.2 9.58518 1.2 10.2977 2.6325V2.6325Z" fill="rgba(255,255,255,0)" stroke="#393C48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={`market-card-currency`}>
                                <div className={`market-card-logo`}>
                                    <img src={require(`../../assets/img/currency/tether.png`)} alt="country" />
                                </div>
                                <div className="market-card-currency-name">
                                    <div>Ethereum</div>
                                    <span className="font-12">ETH</span>
                                </div>
                            </div>
                            <div className="market-card-currency-price">
                                <div>ETH-USD</div>
                                <span className={'plus-market'}>
                                        <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.86334 2.4877L4.48717 1.11153L3.6469 0.26697C3.47569 0.0960182 3.24363 0 3.00169 0C2.75974 0 2.52769 0.0960182 2.35648 0.26697L0.135753 2.4877C-0.155771 2.77922 0.0542977 3.27652 0.461574 3.27652H5.53752C5.94908 3.27652 6.15486 2.77922 5.86334 2.4877Z" fill="#9CCC65"/>
                                        </svg>
                                        0.18%
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className={'market-card-item'}>
                        <div className={'market-card-item-inn'}>
                            <div className={'market-card-favorite'}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2977 2.6325L11.6177 5.2725C11.7977 5.64 12.2777 5.9925 12.6827 6.06L15.0752 6.4575C16.6052 6.7125 16.9652 7.8225 15.8627 8.9175L14.0027 10.7775C13.6877 11.0925 13.5152 11.7 13.6127 12.135L14.1452 14.4375C14.5652 16.26 13.5977 16.965 11.9852 16.0125L9.74268 14.685C9.33768 14.445 8.67018 14.445 8.25768 14.685L6.01518 16.0125C4.41018 16.965 3.43518 16.2525 3.85518 14.4375L4.38768 12.135C4.48518 11.7 4.31268 11.0925 3.99768 10.7775L2.13768 8.9175C1.04268 7.8225 1.39518 6.7125 2.92518 6.4575L5.31768 6.06C5.71518 5.9925 6.19518 5.64 6.37518 5.2725L7.69518 2.6325C8.41518 1.2 9.58518 1.2 10.2977 2.6325V2.6325Z" fill="rgba(255,255,255,0)" stroke="#393C48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={`market-card-currency`}>
                                <div className={`market-card-logo`}>
                                    <img src={require(`../../assets/img/currency/tether.png`)} alt="country" />
                                </div>
                                <div className="market-card-currency-name">
                                    <div>Ethereum</div>
                                    <span className="font-12">ETH</span>
                                </div>
                            </div>
                            <div className="market-card-currency-price">
                                <div>ETH-USD</div>
                                <span className={'minus-market'}>
                                        <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.86334 2.4877L4.48717 1.11153L3.6469 0.26697C3.47569 0.0960182 3.24363 0 3.00169 0C2.75974 0 2.52769 0.0960182 2.35648 0.26697L0.135753 2.4877C-0.155771 2.77922 0.0542977 3.27652 0.461574 3.27652H5.53752C5.94908 3.27652 6.15486 2.77922 5.86334 2.4877Z" fill="#9CCC65"/>
                                        </svg>
                                        0.18%
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
