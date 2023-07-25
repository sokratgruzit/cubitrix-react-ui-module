import { DashboardCards } from "../components/DashboardCards";
import { storiesOf } from "@storybook/react";
import imgs from "../assets/img/DashbordCards/ethereum.png";
import img from "../assets/img/DashbordCards/bitcoin.png";
const stories = storiesOf("DashbordCards", module);

stories.add("DashbordCards", () => {
  return (
    <div>
      <DashboardCards
        type={"minicard"}
        img={img}
        bg={"bgRed"}
        coin={"Bitcoin"}
        abbreviation={"BTC"}
        arrow={"redArrow"}
        svg={"down"}
        price={"$16,420.8"}
        percent={"0.18%"}
        color={"#FF0C46"}
      />
      <DashboardCards
        type={"minicard"}
        img={imgs}
        bg={"bgGreen"}
        coin={"Ethereum"}
        abbreviation={"ETH"}
        arrow={"greenArrow"}
        svg={"up"}
        price={"$2,220.8"}
        percent={"0.18%"}
        color={"#9CCC65"}
      />
      <DashboardCards
        type={"card"}
        title={"Value"}
        bgColor={"gray"}
        price={"$3.00301"}
        valueCard={"true"}
      />
      <DashboardCards
        type={"card"}
        title={"Trading Volume"}
        bgColor={"none"}
        price={"$1,698,420,238"}
        valueCard={"false"}
      />
    </div>
  );
});
