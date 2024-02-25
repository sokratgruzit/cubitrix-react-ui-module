import {storiesOf} from "@storybook/react";

import {BrowserRouter} from "react-router-dom";
import {DashboardSharedLayout} from "../components/DashboardSharedLayout";
import {Header} from "../components/Header";

import "../assets/css/main-theme.css";
import {useMobileWidth} from "../hooks/useMobileWidth";
import {TradeUi} from "../components/TradeUi/TradeUi";
import {useState} from "react";

const stories = storiesOf("TradeUi", module);

stories.add("TradeUi", () => {
  const [tradeTypeForm, setTradeTypeForm] = useState("limit");
  const [buyActiveTab, setBuyActiveTab] = useState("order_entry");
  const {width} = useMobileWidth();
  const buyTabs = [
    {
      title: "Order Entry",
      name: "order_entry",
      onClick: (name) => setBuyActiveTab(name),
    },
    {
      title: "Instrument Details",
      name: "instrument_details",
      onClick: (name) => setBuyActiveTab(name),
    },
  ];
  const links = [
    {
      to: "/trade",
      label: "Trade",
      svg: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-qa="trade-icon"
        >
          <path
            d="M8 10.76C8 10.3403 8.34026 10 8.76 10C9.17974 10 9.52 10.3403 9.52 10.76V25.2C9.52 25.6197 9.86026 25.96 10.28 25.96H30.04C30.4597 25.96 30.8 26.3003 30.8 26.72C30.8 27.1397 30.4597 27.48 30.04 27.48H9.52C8.68053 27.48 8 26.7995 8 25.96V10.76Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          ></path>
          <path
            d="M24.72 12.0351C24.72 11.6154 25.0603 11.2751 25.48 11.2751C25.8997 11.2751 26.24 11.6154 26.24 12.0351V21.9151C26.24 22.3348 25.8997 22.6751 25.48 22.6751C25.0603 22.6751 24.72 22.3348 24.72 21.9151V12.0351Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          ></path>
          <path
            d="M20.92 16.5951C20.92 16.1754 21.2603 15.8351 21.68 15.8351C22.0997 15.8351 22.44 16.1754 22.44 16.5951V21.9151C22.44 22.3348 22.0997 22.6751 21.68 22.6751C21.2603 22.6751 20.92 22.3348 20.92 21.9151V16.5951Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          ></path>
          <path
            d="M17.12 13.5551C17.12 13.1354 17.4603 12.7951 17.88 12.7951C18.2997 12.7951 18.64 13.1354 18.64 13.5551V21.9151C18.64 22.3348 18.2997 22.6751 17.88 22.6751C17.4603 22.6751 17.12 22.3348 17.12 21.9151V13.5551Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          ></path>
          <path
            d="M13.32 19.6351C13.32 19.2154 13.6603 18.8751 14.08 18.8751C14.4997 18.8751 14.84 19.2154 14.84 19.6351V21.9151C14.84 22.3348 14.4997 22.6751 14.08 22.6751C13.6603 22.6751 13.32 22.3348 13.32 21.9151V19.6351Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
          ></path>
          <path
            d="M8 10.76C8 10.3403 8.34026 10 8.76 10C9.17974 10 9.52 10.3403 9.52 10.76V25.2C9.52 25.6197 9.86026 25.96 10.28 25.96H30.04C30.4597 25.96 30.8 26.3003 30.8 26.72C30.8 27.1397 30.4597 27.48 30.04 27.48H9.52C8.68053 27.48 8 26.7995 8 25.96V10.76Z"
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
          <path
            d="M24.72 12.0351C24.72 11.6154 25.0603 11.2751 25.48 11.2751C25.8997 11.2751 26.24 11.6154 26.24 12.0351V21.9151C26.24 22.3348 25.8997 22.6751 25.48 22.6751C25.0603 22.6751 24.72 22.3348 24.72 21.9151V12.0351Z"
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
          <path
            d="M20.92 16.5951C20.92 16.1754 21.2603 15.8351 21.68 15.8351C22.0997 15.8351 22.44 16.1754 22.44 16.5951V21.9151C22.44 22.3348 22.0997 22.6751 21.68 22.6751C21.2603 22.6751 20.92 22.3348 20.92 21.9151V16.5951Z"
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
          <path
            d="M17.12 13.5551C17.12 13.1354 17.4603 12.7951 17.88 12.7951C18.2997 12.7951 18.64 13.1354 18.64 13.5551V21.9151C18.64 22.3348 18.2997 22.6751 17.88 22.6751C17.4603 22.6751 17.12 22.3348 17.12 21.9151V13.5551Z"
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
          <path
            d="M13.32 19.6351C13.32 19.2154 13.6603 18.8751 14.08 18.8751C14.4997 18.8751 14.84 19.2154 14.84 19.6351V21.9151C14.84 22.3348 14.4997 22.6751 14.08 22.6751C13.6603 22.6751 13.32 22.3348 13.32 21.9151V19.6351Z"
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
        </svg>
      ),
    },
    {
      to: "/positions",
      label: "Positions",
      svg: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-qa="positions-icon"
        >
          <path
            fill="currentColor"
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
            d="M28.6632 11.8525C28.9447 11.8475 29.2243 11.9002 29.4847 12.0073C29.7451 12.1145 29.9807 12.2739 30.1771 12.4757C30.379 12.6722 30.5385 12.908 30.6456 13.1685C30.7528 13.429 30.8055 13.7087 30.8003 13.9904V26.8154C30.8054 27.0969 30.7527 27.3765 30.6455 27.6369C30.5383 27.8973 30.3789 28.1329 30.1771 28.3293C29.9807 28.5311 29.7451 28.6905 29.4847 28.7977C29.2243 28.9049 28.9447 28.9575 28.6632 28.9525H10.1382C9.85668 28.9575 9.5771 28.9049 9.31672 28.7977C9.05634 28.6905 8.82069 28.5311 8.62429 28.3293C8.42237 28.133 8.26283 27.8973 8.15552 27.637C8.0482 27.3766 7.99539 27.097 8.00033 26.8154V13.9904C7.99529 13.7089 8.04798 13.4293 8.15517 13.1689C8.26235 12.9085 8.42175 12.6729 8.62353 12.4765C8.81992 12.2747 9.05558 12.1153 9.31596 12.0081C9.57634 11.9009 9.85592 11.8482 10.1375 11.8533H15.1253V10.0718C15.1224 9.93055 15.1485 9.79018 15.2021 9.65944C15.2557 9.5287 15.3357 9.41037 15.4369 9.31182C15.5355 9.21056 15.6538 9.13064 15.7845 9.07703C15.9153 9.02343 16.0557 8.99728 16.1969 9.00022H22.6068C22.748 8.99728 22.8884 9.02343 23.0192 9.07703C23.1499 9.13064 23.2682 9.21056 23.3668 9.31182C23.468 9.41037 23.548 9.5287 23.6016 9.65944C23.6552 9.79018 23.6813 9.93055 23.6784 10.0718V11.8533L28.6632 11.8525ZM16.5503 10.4275V11.8525H22.2503V10.4275H16.5503ZM29.3753 26.8154V20.4025H22.2503V22.1839C22.2533 22.3252 22.2271 22.4656 22.1735 22.5963C22.1199 22.7271 22.04 22.8454 21.9387 22.9439C21.8402 23.0452 21.7219 23.1251 21.5911 23.1787C21.4604 23.2323 21.32 23.2585 21.1787 23.2555H17.6189C17.4776 23.2585 17.3372 23.2323 17.2065 23.1787C17.0758 23.1251 16.9574 23.0452 16.8589 22.9439C16.7576 22.8454 16.6777 22.7271 16.6241 22.5963C16.5705 22.4656 16.5444 22.3252 16.5473 22.1839V20.4025H9.42229V26.8154C9.41905 26.9099 9.43517 27.0041 9.46968 27.0922C9.50418 27.1803 9.55633 27.2604 9.62293 27.3276C9.69054 27.3945 9.77117 27.4467 9.85981 27.4811C9.94845 27.5155 10.0432 27.5313 10.1382 27.5275H28.6632C28.7578 27.5308 28.852 27.5147 28.9401 27.4802C29.0282 27.4457 29.1083 27.3935 29.1755 27.3269C29.2418 27.2597 29.2938 27.1797 29.3281 27.0917C29.3625 27.0038 29.3786 26.9098 29.3753 26.8154ZM17.9753 20.4033V21.8275H20.8253V20.4025L17.9753 20.4033ZM9.42533 18.9783H29.3753V13.9911C29.3786 13.8966 29.3625 13.8024 29.328 13.7143C29.2935 13.6262 29.2413 13.5461 29.1747 13.4789C29.1075 13.4123 29.0274 13.3602 28.9393 13.3256C28.8512 13.2911 28.757 13.275 28.6625 13.2783H10.1382C10.0437 13.275 9.94945 13.2911 9.86136 13.3256C9.77327 13.3602 9.69316 13.4123 9.62597 13.4789C9.55937 13.5461 9.50722 13.6262 9.47272 13.7143C9.43821 13.8024 9.42209 13.8966 9.42533 13.9911V18.9783Z"
          ></path>
        </svg>
      ),
    },
    {
      to: "/orders",
      label: "Orders",
      svg: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-qa="orders-icon"
        >
          <path
            d="M29.5945 13.0445C29.6285 13.0423 29.6618 13.0332 29.6924 13.018C29.7229 13.0027 29.7501 12.9815 29.7723 12.9556C29.7984 12.9333 29.8198 12.9061 29.8352 12.8754C29.8506 12.8447 29.8597 12.8113 29.862 12.777V11.7085C29.8597 11.6744 29.8507 11.6411 29.8354 11.6106C29.8202 11.58 29.799 11.5529 29.7731 11.5306C29.7508 11.5047 29.7236 11.4835 29.6931 11.4683C29.6626 11.453 29.6293 11.444 29.5952 11.4417H13.0272C12.9932 11.444 12.9599 11.453 12.9294 11.4683C12.8988 11.4835 12.8716 11.5047 12.8494 11.5306C12.8235 11.5529 12.8023 11.58 12.787 11.6106C12.7718 11.6411 12.7627 11.6744 12.7605 11.7085V12.777C12.7627 12.8111 12.7718 12.8444 12.787 12.8749C12.8023 12.9054 12.8235 12.9326 12.8494 12.9549C12.8716 12.9808 12.8988 13.002 12.9294 13.0172C12.9599 13.0325 12.9932 13.0415 13.0272 13.0438L29.5945 13.0445ZM29.862 19.902C29.8597 19.9361 29.8507 19.9694 29.8354 19.9999C29.8202 20.0304 29.799 20.0576 29.7731 20.0799C29.7508 20.1058 29.7236 20.127 29.6931 20.1422C29.6626 20.1575 29.6293 20.1665 29.5952 20.1688H13.0272C12.9932 20.1665 12.9599 20.1575 12.9294 20.1422C12.8988 20.127 12.8716 20.1058 12.8494 20.0799C12.8235 20.0576 12.8023 20.0304 12.787 19.9999C12.7718 19.9694 12.7627 19.9361 12.7605 19.902V18.8335C12.7627 18.7994 12.7718 18.7661 12.787 18.7356C12.8023 18.705 12.8235 18.6779 12.8494 18.6556C12.8716 18.6297 12.8988 18.6085 12.9294 18.5933C12.9599 18.578 12.9932 18.569 13.0272 18.5667H29.5952C29.6293 18.569 29.6626 18.578 29.6931 18.5933C29.7236 18.6085 29.7508 18.6297 29.7731 18.6556C29.799 18.6779 29.8202 18.705 29.8354 18.7356C29.8507 18.7661 29.8597 18.7994 29.862 18.8335V19.902ZM29.862 27.027C29.8597 27.0611 29.8507 27.0944 29.8354 27.1249C29.8202 27.1554 29.799 27.1826 29.7731 27.2049C29.7508 27.2308 29.7236 27.252 29.6931 27.2672C29.6626 27.2825 29.6293 27.2915 29.5952 27.2938H13.0272C12.9932 27.2915 12.9599 27.2825 12.9294 27.2672C12.8988 27.252 12.8716 27.2308 12.8494 27.2049C12.8238 27.1825 12.8029 27.1552 12.7879 27.1247C12.7729 27.0942 12.7641 27.061 12.762 27.027V25.9585C12.7643 25.9244 12.7733 25.8911 12.7886 25.8606C12.8038 25.8301 12.825 25.8029 12.8509 25.7806C12.8732 25.7547 12.9004 25.7335 12.9309 25.7183C12.9614 25.703 12.9947 25.694 13.0288 25.6917H29.5968C29.6308 25.694 29.6641 25.703 29.6946 25.7183C29.7252 25.7335 29.7524 25.7547 29.7746 25.7806C29.8002 25.803 29.8211 25.8302 29.8361 25.8608C29.8511 25.8913 29.8599 25.9245 29.862 25.9585V27.027ZM9.19988 10.6399C9.41103 10.6361 9.62071 10.6756 9.816 10.756C10.0113 10.8364 10.188 10.956 10.3353 11.1073C10.4867 11.2546 10.6062 11.4313 10.6866 11.6266C10.767 11.8219 10.8065 12.0316 10.8027 12.2427C10.8065 12.4539 10.767 12.6636 10.6866 12.8589C10.6062 13.0541 10.4867 13.2309 10.3353 13.3782C10.188 13.5295 10.0113 13.6491 9.816 13.7294C9.62071 13.8098 9.41103 13.8494 9.19988 13.8456C8.98873 13.8494 8.77904 13.8098 8.58376 13.7294C8.38848 13.6491 8.21173 13.5295 8.06444 13.3782C7.9131 13.2309 7.79355 13.0541 7.71317 12.8589C7.63278 12.6636 7.59326 12.4539 7.59704 12.2427C7.59326 12.0316 7.63278 11.8219 7.71317 11.6266C7.79355 11.4313 7.9131 11.2546 8.06444 11.1073C8.21173 10.956 8.38848 10.8364 8.58376 10.756C8.77904 10.6756 8.98873 10.6361 9.19988 10.6399ZM9.19988 17.7649C9.41103 17.7611 9.62071 17.8006 9.816 17.881C10.0113 17.9614 10.188 18.081 10.3353 18.2323C10.4867 18.3796 10.6062 18.5563 10.6866 18.7516C10.767 18.9469 10.8065 19.1566 10.8027 19.3677C10.8065 19.5789 10.767 19.7886 10.6866 19.9839C10.6062 20.1791 10.4867 20.3559 10.3353 20.5032C10.188 20.6545 10.0113 20.7741 9.816 20.8544C9.62071 20.9348 9.41103 20.9744 9.19988 20.9706C8.98873 20.9744 8.77904 20.9348 8.58376 20.8544C8.38848 20.7741 8.21173 20.6545 8.06444 20.5032C7.91255 20.3561 7.79244 20.1795 7.71153 19.9842C7.63061 19.7889 7.59061 19.5791 7.594 19.3677C7.59022 19.1566 7.62974 18.9469 7.71013 18.7516C7.79051 18.5563 7.91006 18.3796 8.0614 18.2323C8.20905 18.0806 8.38628 17.9608 8.58212 17.8804C8.77796 17.8 8.98822 17.7607 9.19988 17.7649ZM9.19988 24.8899C9.41103 24.8861 9.62071 24.9256 9.816 25.006C10.0113 25.0864 10.188 25.206 10.3353 25.3573C10.4867 25.5046 10.6062 25.6813 10.6866 25.8766C10.767 26.0719 10.8065 26.2816 10.8027 26.4927C10.8065 26.7039 10.767 26.9136 10.6866 27.1089C10.6062 27.3041 10.4867 27.4809 10.3353 27.6282C10.188 27.7795 10.0113 27.8991 9.816 27.9795C9.62071 28.0598 9.41103 28.0994 9.19988 28.0956C8.98873 28.0994 8.77904 28.0598 8.58376 27.9795C8.38848 27.8991 8.21173 27.7795 8.06444 27.6282C7.91255 27.4811 7.79244 27.3045 7.71153 27.1092C7.63061 26.9139 7.59061 26.7041 7.594 26.4927C7.59022 26.2816 7.62974 26.0719 7.71013 25.8766C7.79051 25.6813 7.91006 25.5046 8.0614 25.3573C8.20905 25.2056 8.38628 25.0858 8.58212 25.0054C8.77796 24.925 8.98822 24.8857 9.19988 24.8899Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
        </svg>
      ),
    },
    {
      to: "/history",
      label: "History",
      svg: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-qa="history-icon"
        >
          <path
            d="M8.12966 8.71246C8.05902 8.71099 7.98884 8.72406 7.92347 8.75086C7.8581 8.77766 7.79894 8.81763 7.74966 8.86826C7.69903 8.91753 7.65907 8.97669 7.63227 9.04207C7.60546 9.10744 7.59239 9.17762 7.59386 9.24826V15.6619C7.59239 15.7325 7.60546 15.8027 7.63227 15.8681C7.65907 15.9335 7.69903 15.9926 7.74966 16.0419C7.79894 16.0925 7.8581 16.1325 7.92347 16.1593C7.98884 16.1861 8.05902 16.1992 8.12966 16.1977H14.5425C14.6132 16.1992 14.6834 16.1861 14.7487 16.1593C14.8141 16.1325 14.8733 16.0925 14.9225 16.0419C14.9732 15.9926 15.0131 15.9335 15.0399 15.8681C15.0667 15.8027 15.0798 15.7325 15.0783 15.6619V15.2165C15.0798 15.1459 15.0667 15.0757 15.0399 15.0103C15.0131 14.945 14.9732 14.8858 14.9225 14.8365C14.8733 14.7859 14.8141 14.7459 14.7487 14.7191C14.6834 14.6923 14.6132 14.6793 14.5425 14.6807H10.1786C10.9623 13.1268 12.1654 11.8233 13.6518 10.918C15.1479 9.98756 16.8772 9.50079 18.6389 9.51426C20.3224 9.50384 21.9772 9.95037 23.4269 10.8063C24.869 11.6397 26.0667 12.8374 26.9001 14.2795C27.7438 15.7249 28.1823 17.3711 28.1693 19.0447C28.1798 20.7282 27.7332 22.3829 26.8773 23.8327C26.0437 25.2741 24.846 26.4713 23.4041 27.3043C21.9587 28.148 20.3125 28.5865 18.6389 28.5735C17.4579 28.5802 16.2865 28.361 15.1878 27.9275C14.1161 27.5044 13.1283 26.8937 12.2709 26.1241C12.1626 26.0384 12.0289 25.9914 11.8909 25.9903C11.8188 25.9926 11.748 26.0096 11.6826 26.0402C11.6173 26.0707 11.5589 26.1143 11.5109 26.1681L11.1993 26.4797C11.1525 26.5307 11.1165 26.5907 11.0935 26.656C11.0705 26.7213 11.061 26.7906 11.0655 26.8597C11.0617 26.9328 11.0759 27.0057 11.1069 27.072C11.1379 27.1383 11.1848 27.1959 11.2434 27.2397C12.236 28.1372 13.3842 28.8457 14.6315 29.3305C15.9071 29.835 17.2672 30.0919 18.6389 30.0875C20.5809 30.1002 22.4898 29.5845 24.1611 28.5956C25.8255 27.6277 27.2127 26.2476 28.1891 24.5881C29.1817 22.9183 29.6977 21.0084 29.681 19.0659C29.6975 17.1199 29.1912 15.2052 28.2149 13.5217C27.2555 11.8509 25.8734 10.4617 24.2075 9.49374C22.5284 8.5019 20.6111 7.98566 18.661 8.00034C16.7146 7.98498 14.7999 8.4926 13.1168 9.47018C11.4485 10.4261 10.0652 11.8094 9.1093 13.4777V9.2475C9.11077 9.17686 9.0977 9.10668 9.0709 9.04131C9.04409 8.97593 9.00413 8.91677 8.9535 8.8675C8.90423 8.81687 8.84507 8.77691 8.77969 8.7501C8.71432 8.7233 8.64414 8.71023 8.5735 8.7117L8.12966 8.71246ZM22.4686 22.7398C22.3825 22.8567 22.255 22.9363 22.1121 22.9625C22.043 22.978 21.9712 22.9781 21.9019 22.9628C21.8327 22.9474 21.7677 22.9169 21.7116 22.8735L17.9268 20.1125V12.8096C17.9254 12.739 17.9384 12.6688 17.9652 12.6034C17.992 12.5381 18.032 12.4789 18.0826 12.4296C18.1319 12.379 18.1911 12.339 18.2564 12.3122C18.3218 12.2854 18.392 12.2723 18.4626 12.2738H18.8168C18.8874 12.2723 18.9576 12.2854 19.023 12.3122C19.0883 12.339 19.1475 12.379 19.1968 12.4296C19.2474 12.4789 19.2874 12.5381 19.3142 12.6034C19.341 12.6688 19.3541 12.739 19.3526 12.8096V19.4003L22.5575 21.7161C22.6147 21.7574 22.6623 21.8107 22.697 21.8722C22.7316 21.9338 22.7525 22.0021 22.7581 22.0725C22.7745 22.2153 22.7347 22.359 22.6472 22.473L22.4686 22.7398Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
        </svg>
      ),
    },
    {
      to: "/deposit",
      label: "Deposit",
      svg: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-qa="history-icon"
        >
          <path
            d="M8.12966 8.71246C8.05902 8.71099 7.98884 8.72406 7.92347 8.75086C7.8581 8.77766 7.79894 8.81763 7.74966 8.86826C7.69903 8.91753 7.65907 8.97669 7.63227 9.04207C7.60546 9.10744 7.59239 9.17762 7.59386 9.24826V15.6619C7.59239 15.7325 7.60546 15.8027 7.63227 15.8681C7.65907 15.9335 7.69903 15.9926 7.74966 16.0419C7.79894 16.0925 7.8581 16.1325 7.92347 16.1593C7.98884 16.1861 8.05902 16.1992 8.12966 16.1977H14.5425C14.6132 16.1992 14.6834 16.1861 14.7487 16.1593C14.8141 16.1325 14.8733 16.0925 14.9225 16.0419C14.9732 15.9926 15.0131 15.9335 15.0399 15.8681C15.0667 15.8027 15.0798 15.7325 15.0783 15.6619V15.2165C15.0798 15.1459 15.0667 15.0757 15.0399 15.0103C15.0131 14.945 14.9732 14.8858 14.9225 14.8365C14.8733 14.7859 14.8141 14.7459 14.7487 14.7191C14.6834 14.6923 14.6132 14.6793 14.5425 14.6807H10.1786C10.9623 13.1268 12.1654 11.8233 13.6518 10.918C15.1479 9.98756 16.8772 9.50079 18.6389 9.51426C20.3224 9.50384 21.9772 9.95037 23.4269 10.8063C24.869 11.6397 26.0667 12.8374 26.9001 14.2795C27.7438 15.7249 28.1823 17.3711 28.1693 19.0447C28.1798 20.7282 27.7332 22.3829 26.8773 23.8327C26.0437 25.2741 24.846 26.4713 23.4041 27.3043C21.9587 28.148 20.3125 28.5865 18.6389 28.5735C17.4579 28.5802 16.2865 28.361 15.1878 27.9275C14.1161 27.5044 13.1283 26.8937 12.2709 26.1241C12.1626 26.0384 12.0289 25.9914 11.8909 25.9903C11.8188 25.9926 11.748 26.0096 11.6826 26.0402C11.6173 26.0707 11.5589 26.1143 11.5109 26.1681L11.1993 26.4797C11.1525 26.5307 11.1165 26.5907 11.0935 26.656C11.0705 26.7213 11.061 26.7906 11.0655 26.8597C11.0617 26.9328 11.0759 27.0057 11.1069 27.072C11.1379 27.1383 11.1848 27.1959 11.2434 27.2397C12.236 28.1372 13.3842 28.8457 14.6315 29.3305C15.9071 29.835 17.2672 30.0919 18.6389 30.0875C20.5809 30.1002 22.4898 29.5845 24.1611 28.5956C25.8255 27.6277 27.2127 26.2476 28.1891 24.5881C29.1817 22.9183 29.6977 21.0084 29.681 19.0659C29.6975 17.1199 29.1912 15.2052 28.2149 13.5217C27.2555 11.8509 25.8734 10.4617 24.2075 9.49374C22.5284 8.5019 20.6111 7.98566 18.661 8.00034C16.7146 7.98498 14.7999 8.4926 13.1168 9.47018C11.4485 10.4261 10.0652 11.8094 9.1093 13.4777V9.2475C9.11077 9.17686 9.0977 9.10668 9.0709 9.04131C9.04409 8.97593 9.00413 8.91677 8.9535 8.8675C8.90423 8.81687 8.84507 8.77691 8.77969 8.7501C8.71432 8.7233 8.64414 8.71023 8.5735 8.7117L8.12966 8.71246ZM22.4686 22.7398C22.3825 22.8567 22.255 22.9363 22.1121 22.9625C22.043 22.978 21.9712 22.9781 21.9019 22.9628C21.8327 22.9474 21.7677 22.9169 21.7116 22.8735L17.9268 20.1125V12.8096C17.9254 12.739 17.9384 12.6688 17.9652 12.6034C17.992 12.5381 18.032 12.4789 18.0826 12.4296C18.1319 12.379 18.1911 12.339 18.2564 12.3122C18.3218 12.2854 18.392 12.2723 18.4626 12.2738H18.8168C18.8874 12.2723 18.9576 12.2854 19.023 12.3122C19.0883 12.339 19.1475 12.379 19.1968 12.4296C19.2474 12.4789 19.2874 12.5381 19.3142 12.6034C19.341 12.6688 19.3541 12.739 19.3526 12.8096V19.4003L22.5575 21.7161C22.6147 21.7574 22.6623 21.8107 22.697 21.8722C22.7316 21.9338 22.7525 22.0021 22.7581 22.0725C22.7745 22.2153 22.7347 22.359 22.6472 22.473L22.4686 22.7398Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
            stroke={`${location.pathname === "#" ? "#141726" : "white"}`}
            strokeWidth="0.45"
          ></path>
        </svg>
      ),
    },
    {
      to: "/signals",
      label: "Signals",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-qa="signals-icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2929 13.7929C13.6834 13.4024 14.3166 13.4024 14.7071 13.7929L18 17.0858L21.2929 13.7929C21.6834 13.4024 22.3166 13.4024 22.7071 13.7929C23.0976 14.1834 23.0976 14.8166 22.7071 15.2071L18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L14 15.9142L10.7071 19.2071C10.3166 19.5976 9.68342 19.5976 9.29289 19.2071C8.90237 18.8166 8.90237 18.1834 9.29289 17.7929L13.2929 13.7929Z"
            fill="currentColor"
            fill-opacity="0.9"
          ></path>
          <path
            d="M4.89964 25.7945C4.46679 26.157 3.81904 26.1017 3.48591 25.6459C1.51756 22.9528 0.464949 19.6876 0.50089 16.3339C0.536831 12.9802 1.65917 9.73828 3.68479 7.08798C4.02762 6.63943 4.67639 6.5981 5.10138 6.96973V6.96973C5.52637 7.34136 5.56611 7.98503 5.2278 8.437C3.52069 10.7176 2.57594 13.4897 2.54522 16.3558C2.51451 19.222 3.39963 22.0136 5.05747 24.3303C5.38602 24.7894 5.3325 25.4321 4.89964 25.7945V25.7945Z"
            fill="currentColor"
            fill-opacity="0.9"
          ></path>
          <path
            d="M26.9365 7.01318C27.3629 6.64324 28.0115 6.68715 28.3526 7.13706C30.3676 9.7954 31.4771 13.0418 31.4996 16.3956C31.5222 19.7494 30.4566 23.0104 28.4776 25.6957C28.1426 26.1501 27.4947 26.2028 27.0633 25.8386V25.8386C26.6319 25.4745 26.5809 24.8316 26.9113 24.3738C28.5783 22.0637 29.4746 19.2756 29.4552 16.4094C29.4359 13.5431 28.5022 10.7673 26.8042 8.47993C26.4677 8.02662 26.51 7.38311 26.9365 7.01318V7.01318Z"
            fill="currentColor"
            fill-opacity="0.9"
          ></path>
          <path
            d="M8.17727 23.5436C7.77773 23.9034 7.15846 23.8734 6.83377 23.4448C5.3105 21.4344 4.48474 18.9702 4.50021 16.43C4.51568 13.8897 5.37139 11.4357 6.91903 9.44404C7.24892 9.01951 7.8685 8.99704 8.26363 9.36163V9.36163C8.65876 9.72621 8.67895 10.3395 8.35644 10.7696C7.134 12.4001 6.45964 14.387 6.44713 16.4418C6.43461 18.4966 7.08472 20.4916 8.28722 22.1369C8.60446 22.5709 8.57681 23.1839 8.17727 23.5436V23.5436Z"
            fill="currentColor"
            fill-opacity="0.9"
          ></path>
          <path
            d="M23.6986 9.32093C24.0918 8.95426 24.7115 8.97346 25.0436 9.39625C26.6018 11.3798 27.4704 13.8292 27.4993 16.3693C27.5281 18.9095 26.7154 21.378 25.2027 23.3964C24.8803 23.8266 24.2612 23.8599 23.8598 23.5023V23.5023C23.4583 23.1446 23.4274 22.5318 23.7424 22.0961C24.9362 20.4445 25.5758 18.4462 25.5524 16.3914C25.5291 14.3367 24.8443 12.3534 23.6132 10.7294C23.2885 10.3009 23.3054 9.68759 23.6986 9.32093V9.32093Z"
            fill={`${location.pathname === "#" ? "#141726" : "white"}`}
            fillOpacity="0.9"
          ></path>
        </svg>
      ),
    },
    {
      to: "/news",
      label: "News",
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
  const currencies = [
    {
      name: "USDT",
    },
    {
      name: "FDUSD",
    },
    {
      name: "TUSD",
    },
    {
      name: "BUSD",
    },
    {
      name: "BNB",
    },
    {
      name: "ETH",
    },
    {
      name: "GOLD",
    },
  ];
  const currenciesPrices = [
    {
      name: "USDT",
    },
    {
      name: "FDUSD",
    },
    {
      name: "TUSD",
    },
    {
      name: "BUSD",
    },
    {
      name: "BNB",
    },
    {
      name: "ETH",
    },
    {
      name: "GOLD",
    },
  ];
  const bottomSideElements = [
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 123232345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: false,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 123232345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: false,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 123232345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: false,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: false,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: false,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: false,
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
    {
      price: 992345.04,
      amount: 0.03821,
      time: "13:23:10",
      rise: true,
    },
  ];
  const rightSideRedElements = [
    {
      price: 12345.04,
      amount: 0.03821,
      total: 1.1111,
      percent: 10,
    },
    {
      price: 23456.04,
      amount: 0.03821,
      total: 2.33333,
      percent: 20,
    },
    {
      price: 33456.04,
      amount: 4.03821,
      total: 3.33333,
      percent: 30,
    },
    {
      price: 43456.04,
      amount: 5.03821,
      total: 4.33333,
      percent: 10,
    },
    {
      price: 53456.04,
      amount: 6.03821,
      total: 6.33333,
      percent: 90,
    },
    {
      price: 63456.04,
      amount: 7.03821,
      total: 8.33333,
      percent: 60,
    },
    {
      price: 73456.04,
      amount: 8.03821,
      total: 9.33333,
      percent: 30,
    },
    {
      price: 83456.04,
      amount: 9.03821,
      total: 10.33333,
      percent: 100,
    },
    {
      price: 93456.04,
      amount: 10.03821,
      total: 12.33333,
      percent: 46,
    },
    {
      price: 103456.04,
      amount: 11.03821,
      total: 13.33333,
      percent: 10,
    },
    {
      price: 113456.04,
      amount: 14.03821,
      total: 16.33333,
      percent: 100,
    },
    {
      price: 123456.04,
      amount: 15.03821,
      total: 17.33333,
      percent: 90,
    },
  ];
  const prices = [
    {
      title: "price",
      data: "0.000001",
      change: "up",
    },
    {
      title: "24h Change",
      data: "0.000001",
      change: "down",
    },
    {
      title: "24h High",
      data: "0.000001 / 0.000001",
    },
  ];

  let tradeTypeFormTabs = [
    {
      title: "Limit",
      name: "limit",
      onClick: (name) => setTradeTypeForm(name),
    },
    {
      title: "Market",
      name: "market",
      onClick: (name) => setTradeTypeForm(name),
    },
    {
      name: "stop-limit",
      onClick: false,
      tabSelect: [
        {
          title: "Stop-limit",
          name: "stop-limit",
          onClick: () => setTradeTypeForm("stop-limit"),
        },
        {
          title: "Trailing-stop",
          name: "trailing-stop",
          onClick: (name) => setTradeTypeForm("trailing-stop"),
        },
        {
          title: "OCO",
          name: "oco",
          onClick: (name) => setTradeTypeForm("oco"),
        },
      ],
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
      <DashboardSharedLayout
        links={links}
        disabledAccount={false}
        eliteMemberBtnLabel={"Become Elite Member"}
      >
        <div>Here will be trade</div>
      </DashboardSharedLayout>
      {/* <TradeUi
          prices={prices}
          currencies={currencies}
          rightSideRedElements={rightSideRedElements}
          rightSideGreenElements={rightSideRedElements}
          mainCurrency={'ETH'}
          subCurrency={'USDT'}
          tradeTypeFormTabs={tradeTypeFormTabs}
          tradeTypeFormActive={tradeTypeForm}
          bottomSideElements={bottomSideElements}
          links={links}
          eliteMemberBtnLabel={'Become Elite Member'}
          buyTabs={buyTabs}
          buyActiveTab={buyActiveTab}
      /> */}
    </BrowserRouter>
  );
});
