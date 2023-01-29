import { storiesOf } from "@storybook/react";
import { WithdrawSettingsPopUp } from "../components/WithdrawSettingsPopUp";

const stories = storiesOf("WithdrawSettingsPopUp", module);

stories.add("WithdrawSettingsPopUp", () => {
  const markSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.59872 3.59872 0 8 0C12.4013 0 16 3.59872 16 8C16 12.4013 12.4013 16 8 16C3.59872 16 0 12.4013 0 8ZM8 1.11628C4.21523 1.11628 1.11628 4.21523 1.11628 8C1.11628 11.7848 4.21523 14.8837 8 14.8837C11.7848 14.8837 14.8837 11.7848 14.8837 8C14.8837 4.21523 11.7848 1.11628 8 1.11628Z"
        fill="#6A6D76"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99948 11.7207C7.69123 11.7207 7.44134 11.4708 7.44134 11.1626L7.44134 7.44163C7.44134 7.13338 7.69123 6.88349 7.99948 6.88349C8.30773 6.88349 8.55762 7.13338 8.55762 7.44163L8.55762 11.1626C8.55762 11.4708 8.30773 11.7207 7.99948 11.7207Z"
        fill="#6A6D76"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74707 5.20943C8.74707 5.62043 8.41389 5.95361 8.00288 5.95361L7.99619 5.95361C7.58518 5.95361 7.252 5.62043 7.252 5.20943C7.252 4.79842 7.58518 4.46524 7.99619 4.46524L8.00288 4.46524C8.41389 4.46524 8.74707 4.79842 8.74707 5.20943Z"
        fill="#6A6D76"
      />
    </svg>
  );

  const data = {
    header: {
      h: "Settings",
    },
    text: "You can manage your withdraw system from here. You can sepecify minimum and maximum token number for each withdraw request and also disable new request.",
    switches: "Withdraw System",
    inputs: {
      input1: "Minimum Token",
      input2: "Minimum Token",
      inputDropDown: "Active Stage",
      inputDropDownLabel: "Withdraw Token Price From",
      input3: "Withdraw Notes",
      placeHolder1: "0",
      placeHolder2: "0",
      placeHolder3: "Withdraw Footer Notes",
    },
    definitions: {
      svg: markSvg,
      definition1: "Set minimum limit of withdrawal per request.",
      definition2: "Set maximum limit of withdrawal per request.",
      definition3: "Set token price based on base currency(USDT)",
      definition4: "Add a footer note on withdraw request dialog box.",
      definition5:
        "If you want to temporarily stop new withdrawal request from users.",
    },
    button: "Update",
  };

  return <WithdrawSettingsPopUp cardBody={data} />;
});
