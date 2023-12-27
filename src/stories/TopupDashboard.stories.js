import TopupDashboard from "../components/TopUpDashboard/TopUpDashboard";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("TopupDashboard", module);

stories.add("TopupDashboard", () => {
  const props = {
    topup: {
      amount: number("amount", 100),
      currency: text("currency", "EUR"),
      status: text("status", "pending"),
      createdAt: date("createdAt", new Date()),
      updatedAt: date("updatedAt", new Date()),
    },
  };

  return <TopupDashboard {...props} />;
});
