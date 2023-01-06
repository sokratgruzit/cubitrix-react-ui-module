import { storiesOf } from "@storybook/react";
import { HelpCard } from "../components/HelpCard";
import '../assets/css/main-theme.css';
import { useState } from "react";

const stories = storiesOf("Help Card", module);

stories.add("Help Card", (props) => {
    
    const [active, setActive] = useState(true);

    let closeHandler = () => {
        setActive(false)
    }

    return (
        <div>
            <HelpCard
                status={'info'}
                color={'#fff'}
                body={true}
                onClick={closeHandler}
                active={active}
                content={'your text your text your text your text your text your text your text'}
            />
            <HelpCard
                status={'warning'}
                color={'#FFA726'}
                body={true}
                onClick={closeHandler}
                active={active}
                content={'your text your text your text your text your text your text your text'}
            />
            <HelpCard
                status={'error'}
                color={'#EF5350'}
                body={true}
                onClick={closeHandler}
                active={active}
                content={'your text your text your text your text your text your text your text'}
            />
            <HelpCard
                status={'success'}
                color={'#9CCC65'}
                body={true}
                onClick={closeHandler}
                active={active}
                content={'your text your text your text your text your text your text your text'}
            />
            {/* without text bottom */}
            <HelpCard
                status={'info'}
                color={'#fff'}
                body={false}
                onClick={closeHandler}
                active={active}
            />
            <HelpCard
                status={'warning'}
                color={'#FFA726'}
                body={false}
                onClick={closeHandler}
                active={active}
            />
            <HelpCard
                status={'error'}
                color={'#EF5350'}
                body={false}
                onClick={closeHandler}
                active={active}
            />
            <HelpCard
                status={'success'}
                color={'#9CCC65'}
                body={false}
                onClick={closeHandler}
                active={active}
            />
        </div>
    );
});
