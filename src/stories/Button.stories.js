import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Button } from "../components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const stories = storiesOf("Button", module);

stories.add("Button", () => {
  const [toggle, setToggle] = useState(false);
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;
  let testSvg = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0833 10.4915L10.9083 14.6748"
        stroke="#CDCED1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.916687 10.4917L15.0834 10.4917"
        stroke="#CDCED1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.916687 5.5083L5.09169 1.32497"
        stroke="#CDCED1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0834 5.5083L0.916687 5.5083"
        stroke="#CDCED1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const sideBar = [
    {
      id: 1,
      name: "Dashboard",
      route: "/dashboard",
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2672 0.583658C10.7398 0.163715 11.397 0.0415039 12.1083 0.0415039H15.475C16.1863 0.0415039 16.8435 0.163715 17.3162 0.583658C17.8077 1.02035 17.9583 1.64856 17.9583 2.3165V6.09984C17.9583 6.76731 17.8079 7.39649 17.3153 7.83245C16.8417 8.25154 16.184 8.37073 15.4731 8.3665H12.1083C11.3993 8.3665 10.7414 8.2472 10.2681 7.82828C9.77507 7.39197 9.625 6.76231 9.625 6.0915V2.3165C9.625 1.64856 9.77568 1.02035 10.2672 0.583658ZM11.0974 1.5181C10.991 1.61266 10.875 1.80944 10.875 2.3165V6.0915C10.875 6.60403 10.9916 6.79938 11.0965 6.89222C11.2211 7.00247 11.4924 7.1165 12.1083 7.1165H15.4789C16.0923 7.12036 16.3629 7.00606 16.4868 6.89639C16.5921 6.80319 16.7083 6.60736 16.7083 6.09984V2.3165C16.7083 1.80944 16.5923 1.61266 16.4859 1.5181C16.3606 1.40679 16.0887 1.2915 15.475 1.2915H12.1083C11.4946 1.2915 11.2227 1.40679 11.0974 1.5181Z"
            fill="#CDCED1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2403 10.2403C10.7135 9.76724 11.3832 9.625 12.1083 9.625H15.475C16.2001 9.625 16.8699 9.76724 17.343 10.2403C17.8161 10.7135 17.9583 11.3832 17.9583 12.1083V15.475C17.9583 16.2001 17.8161 16.8699 17.343 17.343C16.8699 17.8161 16.2001 17.9583 15.475 17.9583H12.1083C11.3832 17.9583 10.7135 17.8161 10.2403 17.343C9.76724 16.8699 9.625 16.2001 9.625 15.475V12.1083C9.625 11.3832 9.76724 10.7135 10.2403 10.2403ZM11.1242 11.1242C10.9994 11.249 10.875 11.5084 10.875 12.1083V15.475C10.875 16.0749 10.9994 16.3343 11.1242 16.4591C11.249 16.5839 11.5084 16.7083 12.1083 16.7083H15.475C16.0749 16.7083 16.3343 16.5839 16.4591 16.4591C16.5839 16.3343 16.7083 16.0749 16.7083 15.475V12.1083C16.7083 11.5084 16.5839 11.249 16.4591 11.1242C16.3343 10.9994 16.0749 10.875 15.475 10.875H12.1083C11.5084 10.875 11.249 10.9994 11.1242 11.1242Z"
            fill="#CDCED1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.683852 0.583658C1.15649 0.163715 1.81373 0.0415039 2.52502 0.0415039H5.89169C6.60298 0.0415039 7.26021 0.163715 7.73285 0.583658C8.22434 1.02035 8.37502 1.64856 8.37502 2.3165V6.09984C8.37502 6.76731 8.22455 7.39649 7.73194 7.83245C7.2584 8.25154 6.60067 8.37073 5.88983 8.3665H2.52502C1.81596 8.3665 1.15811 8.2472 0.684765 7.82828C0.19176 7.39197 0.041687 6.76231 0.041687 6.0915V2.3165C0.041687 1.64856 0.192364 1.02035 0.683852 0.583658ZM1.5141 1.5181C1.40768 1.61266 1.29169 1.80944 1.29169 2.3165V6.0915C1.29169 6.60403 1.40828 6.79938 1.51319 6.89222C1.63776 7.00247 1.90909 7.1165 2.52502 7.1165H5.89562C6.50898 7.12036 6.7796 7.00606 6.90351 6.89639C7.00883 6.80319 7.12502 6.60736 7.12502 6.09984V2.3165C7.12502 1.80944 7.00903 1.61266 6.9026 1.5181C6.77733 1.40679 6.5054 1.2915 5.89169 1.2915H2.52502C1.91131 1.2915 1.63938 1.40679 1.5141 1.5181Z"
            fill="#CDCED1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.657037 10.2403C1.13015 9.76724 1.79992 9.625 2.52502 9.625H5.89169C6.61679 9.625 7.28656 9.76724 7.75967 10.2403C8.23278 10.7135 8.37502 11.3832 8.37502 12.1083V15.475C8.37502 16.2001 8.23278 16.8699 7.75967 17.343C7.28656 17.8161 6.61679 17.9583 5.89169 17.9583H2.52502C1.79992 17.9583 1.13015 17.8161 0.657037 17.343C0.183928 16.8699 0.041687 16.2001 0.041687 15.475V12.1083C0.041687 11.3832 0.183928 10.7135 0.657037 10.2403ZM1.54092 11.1242C1.41611 11.249 1.29169 11.5084 1.29169 12.1083V15.475C1.29169 16.0749 1.41611 16.3343 1.54092 16.4591C1.66573 16.5839 1.92512 16.7083 2.52502 16.7083H5.89169C6.49159 16.7083 6.75098 16.5839 6.87579 16.4591C7.00059 16.3343 7.12502 16.0749 7.12502 15.475V12.1083C7.12502 11.5084 7.00059 11.249 6.87579 11.1242C6.75098 10.9994 6.49159 10.875 5.89169 10.875H2.52502C1.92512 10.875 1.66573 10.9994 1.54092 11.1242Z"
            fill="#CDCED1"
          />
        </svg>
      ),
      subMenu: [
        {
          name: "Settings",
          route: "/settings",
        },
        {
          name: "Dashboard",
          route: "/dashboard",
        },
      ],
    },
    {
      id: 2,
      name: "Transactions",
      route: "/transactions",
      svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0833 10.4915L10.9083 14.6748"
            stroke="#CDCED1"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.916687 10.4917L15.0834 10.4917"
            stroke="#CDCED1"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.916687 5.5083L5.09169 1.32497"
            stroke="#CDCED1"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.0834 5.5083L0.916687 5.5083"
            stroke="#CDCED1"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      subMenu: [],
    },
  ];
  return (
    <div style={{ marginLeft: "100px" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={sideBar.map((item) => {
              return (
                <Button
                  key={item.id}
                  id={item.id}
                  label={item.name}
                  route={item.route}
                  element={"side-admin-button"}
                  svg={item.svg}
                  customStyles={{ width: "350px" }}
                  subMenu={item.subMenu}
                  open={true}
                />
              );
            })}
          />
        </Routes>
      </BrowserRouter>
      <Button
        label={"User Account"}
        element={"side-button"}
        customStyles={{ width: "340px" }}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Metamask"}
        element={"image-button"}
        image={image}
        customStyles={{ width: "340px" }}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-primary"}
        arrow={"arrow-right"}
        element={"button"}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-primary"}
        arrow={"arrow-right"}
        element={"button"}
        disabled={true}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-secondary"}
        labelSetting={"no-label"}
        arrow={"arrow-right"}
        element={"button"}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-tertiary"}
        arrow={"arrow-both"}
        element={"button"}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
          label={"Become Elite Member"}
          status={"warning"}
          element={"help-button"}
          icon={false}
          onClick={() => setToggle((prevState) => !prevState)}
      />
    </div>
  );
});
