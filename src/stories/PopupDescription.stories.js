import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
import { PopupDescription } from "../components/PopupDescription";
const stories = storiesOf("WriteToEmailPopUp", module);

stories.add("WriteToEmailPopUp", () => {
  const [active, setActive] = useState(true);

  const data = [
    {
      title: "hi",
      value:
        "admasssssdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnasdadandamsd,amda,dma,dmasda",
    },
    {
      title: "hi",
      value:
        "admasssssdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnasdadandamsd,amda,dma,dmasda",
    },
    {
      title: "hi",
      value:
        "admasssssdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnasdadandamsd,amda,dma,dmasda",
    },
    {
      title: "hi",
      value:
        "admasssssdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnasdadandamsd,amda,dma,dmasda",
    },
    {
      title: "hi",
      value:
        "admasssssdnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnasdadandamsd,amda,dma,dmasda",
    },
  ];

  return (
    <div>
      {active && (
        <Popup
          popUpElement={<PopupDescription data={data} />}
          label={"Create Referral Code"}
          handlePopUpClose={() => setActive(true)}
          customStyles={{ width: "623px" }}
          headerCustomStyles={{ background: "#272C57" }}
        />
      )}
    </div>
  );
});
