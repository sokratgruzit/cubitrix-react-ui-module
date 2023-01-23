import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Button } from "../components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const stories = storiesOf("Button", module);

stories.add("Button", () => {
  const [toggle, setToggle] = useState(false);
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;
  let testSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0833 10.4915L10.9083 14.6748" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.916687 10.4917L15.0834 10.4917" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.916687 5.5083L5.09169 1.32497" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.0834 5.5083L0.916687 5.5083" stroke="#CDCED1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
    return (
        <div style={{marginLeft: '100px'}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={
                        <Button
                            label={'Dashboard'}
                            element={'side-admin-button'}
                            svg={testSvg}
                            customStyles={{width: '340px'}}
                            onClick={() => setToggle((prevState) => !prevState)}
                        />
                    } />
                </Routes>
            </BrowserRouter>
            <Button
                label={'User Account'}
                element={'side-button'}
                customStyles={{width: '340px'}}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Metamask'}
                element={'image-button'}
                image={image}
                customStyles={{width: '340px'}}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-primary'}
                arrow={'arrow-right'}
                element={'button'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-secondary'}
                labelSetting={'no-label'}
                arrow={'arrow-right'}
                element={'button'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-tertiary'}
                arrow={'arrow-both'}
                element={'button'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
        </div>
    );
});
