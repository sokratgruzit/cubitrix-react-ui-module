import {storiesOf} from "@storybook/react";
import "../assets/css/main-theme.css";
import {TopUp} from "../components/TopUp";
import {TopUpDashboard} from "../components/TopUpDashboard";
import {BrowserRouter} from "react-router-dom";
import {DashboardSharedLayout} from "../components/DashboardSharedLayout";
import {Header} from "../components/Header";
import translates from "../translates.json";

const stories = storiesOf("TopUp", module);

stories.add("ToolTip", () => {
  const links = [
    {
      to: "/dashboard",
      label: "Overview",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dashboard-svg`}
        >
          <path
            d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
            stroke={location.pathname === "/dashboard" ? "#141726" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.99V14.99"
            stroke={location.pathname === "/dashboard" ? "#141726" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      to: "/transactions",
      label: "Transaction History",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dashboard-svg`}
        >
          <path
            d="M11.9995 22.75C11.2195 22.75 10.4595 22.35 9.93953 21.65L8.92953 20.3C8.71953 20.02 8.43953 19.86 8.13953 19.84C7.83953 19.83 7.53953 19.96 7.29953 20.21C5.85953 21.75 4.74953 21.63 4.21953 21.42C3.67953 21.21 2.76953 20.52 2.76953 18.3V7.04C2.76953 2.6 4.04953 1.25 8.23953 1.25H15.7995C19.9895 1.25 21.2695 2.6 21.2695 7.04V18.3C21.2695 20.51 20.3595 21.2 19.8195 21.42C19.2895 21.63 18.1895 21.75 16.7395 20.21C16.4995 19.95 16.1995 19.82 15.8895 19.84C15.5895 19.86 15.2995 20.02 15.0895 20.3L14.0795 21.65C13.5395 22.35 12.7795 22.75 11.9995 22.75ZM8.07953 18.33H8.20953C8.94953 18.37 9.64953 18.76 10.1195 19.39L11.1295 20.74C11.6195 21.39 12.3695 21.39 12.8595 20.74L13.8695 19.39C14.3495 18.76 15.0395 18.37 15.7895 18.33C16.5395 18.29 17.2695 18.6 17.8095 19.18C18.5695 19.99 19.0595 20.09 19.2395 20.02C19.4795 19.92 19.7395 19.34 19.7395 18.3V7.04C19.7395 3.43 19.1095 2.75 15.7695 2.75H8.20953C4.86953 2.75 4.23953 3.43 4.23953 7.04V18.3C4.23953 19.35 4.49953 19.93 4.73953 20.02C4.90953 20.09 5.40953 19.99 6.16953 19.18C6.71953 18.63 7.38953 18.33 8.07953 18.33Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          />
          <path
            d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          />
        </svg>
      ),
    },
  ];

  const methods = [
    {
      id: "USDT",
      title: "USDT",
      svg: (
        <svg viewBox="0 0 2000 2000" width="34px" height="34px">
          <path
            d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0"
            fill="#53ae94"
          />
          <path
            d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18"
            fill="#fff"
          />
        </svg>
      ),
      ethereumAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    {
      id: "BNB",
      title: "BNB",
      svg: (
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 2496 2496"
          width="34px"
          height="34px"
          style={{enableBackground: "new 0 0 2496 2496"}}
        >
          <g>
            <path
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#F0B90B",
              }}
              d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z"
            />
            <polygon
              style={{fill: "#FFFFFF"}}
              points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4   L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6   l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"
            />
          </g>
        </svg>
      ),
      ethereumAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    },
    {
      id: "ETH",
      title: "ETH",
      svg: (
        <svg
          width="34px"
          height="34px"
          version="1.1"
          shape-rendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 784.37 1277.39"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fillRule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                />
                <polygon
                  fill="#3C3C3B"
                  fillRule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89 "
                />
                <polygon
                  fill="#141414"
                  fillRule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33 "
                />
                <polygon
                  fill="#393939"
                  fillRule="nonzero"
                  points="0,650.54 392.07,882.29 392.07,472.33 "
                />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const rpcs = [
    {
      id: "BSC",
      title: "BSC",
      svg: (
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 2496 2496"
          width="34px"
          height="34px"
          style={{enableBackground: "new 0 0 2496 2496"}}
        >
          <g>
            <path
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#F0B90B",
              }}
              d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z"
            />
            <polygon
              style={{fill: "#FFFFFF"}}
              points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4   L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6   l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"
            />
          </g>
        </svg>
      ),
      rpc1: "https://bsc-dataseed.binance.org",
      rpc2: "https://binance.nodereal.io",
    },
    {
      id: "ETH",
      title: "ETH",
      svg: (
        <svg
          width="34px"
          height="34px"
          version="1.1"
          shape-rendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 784.37 1277.39"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fillRule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                />
                <polygon
                  fill="#3C3C3B"
                  fillRule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89 "
                />
                <polygon
                  fill="#141414"
                  fillRule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33 "
                />
                <polygon
                  fill="#393939"
                  fillRule="nonzero"
                  points="0,650.54 392.07,882.29 392.07,472.33 "
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      rpc1: "https://eth.drpc.org",
      rpc2: "https://eth.meowrpc.com",
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
        logoSvg={<>logo svg</>}
        verified={false}
      />
      <DashboardSharedLayout links={links}>
        <TopUp
          receivePaymentAddress={"0x420"}
          handlePaymentConfirm={(userAddress, selectedMethod, amount, date) =>
            console.log(
              "payment confirm",
              userAddress,
              selectedMethod,
              amount,
              date
            )
          }
          methods={methods}
          handleCoindbasePayment={(e) =>
            console.log("coinbase payment send request", e)
          }
          tranasctionFee={1}
          exchangeRate={2}
          handlePurchaseEvent={(e, sd) => console.log(e, sd)}
        />

        <TopUpDashboard
          translates={translates}
          receivePaymentAddress={"0x420"}
          handlePaymentConfirm={(userAddress, selectedMethod, amount, date) =>
            console.log(
              "payment confirm",
              userAddress,
              selectedMethod,
              amount,
              date
            )
          }
          handleCoindbasePayment={(e) =>
            console.log("coinbase payment send request", e)
          }
          tranasctionFee={1}
          paymentAmount={`2.192810859999999806 USDT`}
          exchangeRate={2}
          handlePurchaseEvent={(a, b, c, d) => console.log(a, b, c, d)}
          methods={methods}
          rpcs={rpcs}
          rates={{usdt: {usd: 1}}}
        />
      </DashboardSharedLayout>
    </BrowserRouter>
  );
});
