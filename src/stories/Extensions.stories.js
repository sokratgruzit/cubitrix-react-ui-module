import {storiesOf} from "@storybook/react";
import {Extensions} from "../components/Extensions";
import {InnerExtensions} from "../components/Extensions/InnerExtensions.jsx";
import {Header} from "../components/Header";
import "../assets/css/main-theme.css";
import {BrowserRouter} from "react-router-dom";
import translates from "../translates.json";

// svg
import {Staking} from "../assets/svgs";
import {useState} from "react";
import LogoSvg from "../assets/svgs/LogoSvg.js";

const stories = storiesOf("Extensions", module);

stories.add("Extensions", () => {
  const [isActive, setIsActive] = useState({
    trade: false,
    staking: false,
    loan: false,
    referral: true,
    notify: true,
  });

  console.log(isActive);
  const extensionsCardsData = [
    {
      icon: <Staking className={"other-extensions-card-icon"} />,
      title: "Trade",
      value: "trade",
      description:
        "Crust pencil novel colours drift unfamed, oft line balls instructed sociis.",
      hash: "0x74a81F84268744a40FEBc48f8b812a1f188D80C3",
      handleSwitch: (title, value) =>
        setIsActive((prev) => ({...prev, [title]: value})),
      active: isActive.trade,
      disabled: true,
    },
    {
      icon: <Staking className={"other-extensions-card-icon"} />,
      title: "Staking",
      value: "staking",

      description:
        "Explore the Referral Program, a rewarding way to share your enthusiasm for this platform! By inviting others to join using your unique referral code, you can earn bonuses for every successful referral. This program not only benefits your referrals with access to our services but also enhances your experience as a valued member. Start sharing and earning with ease today!",
      hash: "0x74a81F84268744a40FEBc48f8b812a1f188D80C3",
      handleSwitch: (title, value) =>
        setIsActive((prev) => ({...prev, [title]: value})),
      active: isActive.staking,
      disabled: false,
    },
    {
      icon: <Staking className={"other-extensions-card-icon"} />,
      title: "Loan",
      value: "loan",
      description:
        "taking your tokens offers a rewarding opportunity to earn additional tokens as returns on your investment. By securing your tokens in our trusted staking platform, you're not just locking them away – you're actively participating in a system that rewards you. Our platform provides a straightforward and user-friendly interface, allowing you to easily stake your tokens and monitor your accruing rewards. We offer attractive staking rates to ensure that your investment experience is both profitable and hassle-free.",
      hash: "0x74a81F84268744a40FEBc48f8b812a1f188D80C3",
      handleSwitch: (title, value) =>
        setIsActive((prev) => ({...prev, [title]: value})),
      active: isActive.loan,
      disabled: false,
    },
    {
      icon: <Staking className={"other-extensions-card-icon"} />,
      title: "Referral",
      value: "referral",

      description:
        "Crust pencil novel colours drift unfamed, oft line balls instructed sociis.",
      hash: "0x74a81F84268744a40FEBc48f8b812a1f188D80C3",
      handleSwitch: (title, value) =>
        setIsActive((prev) => ({...prev, [title]: value})),
      active: isActive.referral,
      disabled: false,
    },
    {
      icon: <Staking className={"other-extensions-card-icon"} />,
      title: "Notifications",
      value: "notify",
      description:
        "Crust pencil novel colours drift unfamed, oft line balls instructed sociis.",
      hash: "0x74a81F84268744a40FEBc48f8b812a1f188D80C3",
      handleSwitch: (title, value) =>
        setIsActive((prev) => ({...prev, [title]: value})),
      active: isActive.notify,
      disabled: true,
    },
  ];

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"0x0000000"}
        location={{pathName: ""}}
        title={"A1"}
        amount={10}
        logoSvg={<LogoSvg />}
        verified={false}
      />
      <Extensions
        translates={translates}
        extensionsCardsData={extensionsCardsData}
        disabledAccount={true}
      />
      {/* <InnerExtensions
        extensionsCardsData={extensionsCardsData}
        id={"trade"}
      /> */}
    </BrowserRouter>
  );
});
