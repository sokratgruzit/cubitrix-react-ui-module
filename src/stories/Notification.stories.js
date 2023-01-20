import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Notification } from "../components/Notification";
import { useState } from "react";

const stories = storiesOf("Notification", module);

stories.add("Notification", () => {
  let [readed, setReaded] = useState(false);

  let NotificationData = [
    {
      notification:
        "Critical risus scatter slinks landscape follow nestor stream fancies wisest shaped.",
      id: 0,
    },
    {
      notification:
        "Beechen cras magnificent merchantibility whirr midsummer risus atlantic foremost start.",
      id: 1,
    },
    {
      notification: "Chased seas inly befriended slinks",
      id: 2,
    },
    {
      notification:
        "Succession holds rumoured presently inly thus seemed jay dues",
      id: 3,
    },
  ];

  return (
    <div>
      <Notification
        data={NotificationData}
        onClick={() => setReaded((prevState) => !prevState)}
      />
    </div>
  );
});
