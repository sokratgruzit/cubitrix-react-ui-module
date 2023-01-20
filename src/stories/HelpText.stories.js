import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { HelpText } from "../components/HelpText/HelpText";

const stories = storiesOf("HelpText", module);

stories.add("HelpText", () => {
    return (
        <div>
            <HelpText
                status={'success'}
                title={'your text'}
                color={'#9CCC65'}
                icon={true}
            />
            <HelpText
                status={'warning'}
                title={'your text'}
                color={'#FFA726'}
                icon={true}

            />
            <HelpText
                status={'error'}
                title={'your text'}
                color={'#EF5350'}
                icon={true}

            />
            <HelpText
                status={'info'}
                title={'your text'}
                color={'#6A6D76'}
                icon={true}

            />
             <HelpText
                status={'success'}
                title={'your text'}
                color={'#9CCC65'}
                icon={false}
            />
            <HelpText
                status={'warning'}
                title={'your text'}
                color={'#FFA726'}
                icon={false}

            />
            <HelpText
                status={'error'}
                title={'your text'}
                color={'#EF5350'}
                icon={false}

            />
            <HelpText
                status={'info'}
                title={'your text'}
                color={'#6A6D76'}
                icon={false}
            />
        </div>
    );
});
