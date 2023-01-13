import { useState } from "react";
import { storiesOf } from "@storybook/react";
import { HelpCard } from "../components/HelpCard";
import '../assets/css/main-theme.css';

const stories = storiesOf("HelpCard", module);

stories.add("HelpCard", (props) => {
    
    const [active, setActive] = useState(true);

    let closeHandler = () => {
        setActive(false)
    }

    return (
        <div>
            <HelpCard
                status={'info'}
                color={'#fff'}
                body={'normal'}
                onClick={closeHandler}
                active={active}
                content={'your text your text your text your text your text your text your text'}
                title={'Help Text'}
            />
            <HelpCard
                status={'warning'}
                color={'#FFA726'}
                title={'Help Text'}
                content={'your text your text your text your text your text your text your text'}
                body={'normal'}
                active={active}
                onClick={closeHandler}
            />
            <HelpCard
                status={'error'}
                title={'Help Text'}
                color={'#EF5350'}
                content={'your text your text your text your text your text your text your text'}
                body={'normal'}
                active={active}
                onClick={closeHandler}
            />
            <HelpCard
                status={'success'}
                color={'#9CCC65'}
                body={'normal'}
                onClick={closeHandler}
                active={active}
                content={'your text your text your text your text your text your text your text'}
                title={'Help Text'}
            />
            {/* without text  */}
            <HelpCard
                status={'info'}
                color={'#fff'}
                body={false}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            <HelpCard
                status={'warning'}
                color={'#FFA726'}
                body={false}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            <HelpCard
                status={'error'}
                color={'#EF5350'}
                body={false}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            <HelpCard
                status={'success'}
                color={'#9CCC65'}
                body={false}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            {/* verificaton variant */}
            <HelpCard
                status={'info'}
                color={'#fff'}
                body={'long'}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            <HelpCard
                status={'warning'}
                color={'#FFA726'}
                body={'long'}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            <HelpCard
                status={'error'}
                color={'#EF5350'}
                body={'long'}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
            <HelpCard
                status={'success'}
                color={'#9CCC65'}
                body={'long'}
                onClick={closeHandler}
                active={active}
                title={'Help Text'}
            />
        </div>
    );
});
