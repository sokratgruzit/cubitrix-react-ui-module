import { storiesOf } from "@storybook/react";
import { HelpText } from "../components/HelpText";
import '../assets/css/main-theme.css';

const stories = storiesOf("Help Text", module);

stories.add("Help Text", (props) => {

    return (
        <div>
            <HelpText
                type={'success'}
                title={'Help Text'}
                color={'#9CCC65'}
            />
            <HelpText
                type={'warning'}
                title={'Help Text'}
                color={'#FFA726'}

            />
            <HelpText
                type={'error'}
                title={'Help Text'}
                color={'#EF5350'}
            />
            <HelpText
                type={'info'}
                title={'Help Text'}
                color={'#6A6D76'}
            />
        </div>
    );
});
