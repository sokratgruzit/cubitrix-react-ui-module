import { storiesOf } from "@storybook/react";
import { ExtensionCard } from "../components/ExtensionCard/index";
import circles from "../assets/img/extension-card/circles.png";
import dollar from "../assets/img/extension-card/dollar.png";
import coins from "../assets/img/extension-card/coinsImg.png";
import { useState } from "react";

const stories = storiesOf("ExtensionCard", module);


stories.add("ExtensionCard", () => {
    
    const [show, setShow] = useState(false);
    const anime = () => {
        setShow(!show)
    }

    const tradeCard = {
        icon: circles,
        // arrow: arrowR,
        h: "Trade",
        p: "Crust pencil novel colours drift unfamed, oft line balls instructed sociis."
    }

    const loanCard = {
        icon: dollar,
        // arrow: arrowR,
        h: "Loan",
        p: "Rights useful sociis instructed globes, deceivers ape having either waldeinsamkeit canes brother wave, agreeing drift."
    }

    const staking = {
        icon: coins,
        h: "Staking"
    }
    return (
        <div>
            <button onClick={anime} style={{backgroundColor: "red"}}>buytgfyu</button>
            <ExtensionCard 
                type="trade"
                cardBody={tradeCard}
                active={show}
            />
            <ExtensionCard 
                type="loan"
                cardBody={loanCard}
                active={show}
            />
            <ExtensionCard 
                type="staking"
                cardBody={staking}
                active={show}
            />
        </div>
    )
})