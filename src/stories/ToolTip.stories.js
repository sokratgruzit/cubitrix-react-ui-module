import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { ToolTip } from "../components/ToolTip/ToolTip";

const stories = storiesOf("Tool Tip", module);

stories.add("ToolTip", () => {
  return (
    <div style={{display: 'flex', gap: '30px'}}>
      <ToolTip
        title={'your title'}
        content={'Stop and take profit orders are important tools for safe and effective trading. Learn more about how they work on dYdX Academy.'}
        body={true}
        head={true}
      />
      <ToolTip
        title={'your title'}
        body={true}
        content={'Stop and take profit orders are important tools for safe and effective trading. Learn more about how they work on dYdX Academy.'}
        head={false}
      />
      <ToolTip
        title={'your title'}
        body={false}
        head={true}
      />
    </div>
  );
});
