import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import '../assets/css/main-theme.css'
import { SideBar } from '../components/SideBar'
import { Visual } from '../components/Visual'
import { Button } from '../components/Button'

import { Connect } from '../components/Auth/Connect'
import { UserAccount } from '../components/Auth/UserAccount'
import { UserOptions } from '../components/Auth/UserOptions/UserOptions'
import { SignIn } from '../components/Auth/SignIn'
import { ResetPasswordForm } from '../components/Auth/ResetPasswordForm'
import ResetPassword from '../components/Auth/ResetPassword/ResetPassword'
import { Popup } from '../components/Popup/Popup'
import { ChangeNetwork } from '../components/Auth/ChangeNetwork'
import { NoMetaMask } from '../components/Auth/NoMetaMask'
import { MetaMask } from '../assets/svgs'
import { TransferFromAcc } from '../components/TransferFromAcc'

const stories = storiesOf('SideBar', module)

stories.add('SideBar', () => {
  const [toggle, setToggle] = useState(false)
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`
  const completeHandler = i => {
    console.log(i)
  }
  const [twoFactorAuth, setTwoFactorAuth] = useState(true)
  const [currentObject, setCurrentObejct] = useState({
    amount: '0',
  })

  const inputs = [
    {
      title: 'Transfer type',
      name: 'transfer',
      type: 'lable-input-select',
      options: [
        {
          name: 'Withdraw to own account',
          value: 'Withdraw to own account',
          svg: (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_3207_10785)'>
                <path
                  d='M5 19.3787C8.38821 22.7669 16.3689 22.7669 19.7571 19.3787L17.3057 18.7658'
                  stroke='#45F4EA'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.57394 9.02661H5.40375C4.70276 9.00544 4.0379 8.71074 3.55144 8.20558C3.06498 7.70041 2.79557 7.0249 2.80086 6.32361C2.80086 4.83195 4.0122 3.62061 5.50386 3.62061C6.21093 3.62403 6.88852 3.90428 7.39144 4.40129C7.89436 4.89831 8.1826 5.57254 8.19438 6.27952C8.20616 6.98649 7.94056 7.66996 7.45448 8.18345C6.9684 8.69695 6.30052 8.99962 5.59396 9.02661H5.57394ZM5.50386 5.12227C4.84313 5.12227 4.30253 5.66287 4.30253 6.32361C4.30253 6.97433 4.81309 7.50492 5.4538 7.52494C5.4538 7.51493 5.51387 7.51493 5.58395 7.52494C6.21465 7.4849 6.7052 6.96432 6.7052 6.32361C6.7052 5.66287 6.16459 5.12227 5.50386 5.12227Z'
                  fill='#45F4EA'
                />
                <path
                  d='M5.50501 16.0342C4.36374 16.0342 3.22247 15.7338 2.33148 15.1432C1.49055 14.5826 1 13.7717 1 12.9107C1 12.0497 1.48053 11.2288 2.33148 10.6682C4.11346 9.4869 6.89655 9.4869 8.66852 10.6682C9.50945 11.2288 10 12.0497 10 12.9007C10 13.7616 9.51947 14.5725 8.66852 15.1432C7.78754 15.7439 6.64627 16.0342 5.50501 16.0342ZM3.1624 11.9196C2.73192 12.2099 2.50167 12.5603 2.50167 12.9107C2.50167 13.2611 2.74194 13.6115 3.1624 13.9018C4.43382 14.7527 6.56618 14.7527 7.8376 13.9018C8.26808 13.6115 8.50834 13.2611 8.49833 12.9107C8.49833 12.5603 8.25806 12.2099 7.8376 11.9196C6.5762 11.0687 4.43382 11.0687 3.1624 11.9196Z'
                  fill='#45F4EA'
                />
                <path
                  d='M18.0832 8.00667H17.8941C17.1153 7.98315 16.3765 7.65571 15.836 7.09441C15.2955 6.53311 14.9962 5.78255 15.002 5.00334C15.002 3.34594 16.348 2 18.0054 2C18.791 2.00381 19.5439 2.3152 20.1027 2.86743C20.6615 3.41967 20.9817 4.16882 20.9948 4.95435C21.0079 5.73987 20.7128 6.49928 20.1727 7.06983C19.6326 7.64038 18.8906 7.97669 18.1055 8.00667H18.0832ZM18.0054 3.66852C17.2712 3.66852 16.6706 4.26919 16.6706 5.00334C16.6706 5.72636 17.2379 6.31591 17.9498 6.33815C17.9498 6.32703 18.0165 6.32703 18.0944 6.33815C18.7951 6.29366 19.3402 5.71524 19.3402 5.00334C19.3402 4.26919 18.7395 3.66852 18.0054 3.66852Z'
                  fill='#45F4EA'
                />
                <path
                  d='M18.0056 15.7933C16.7375 15.7933 15.4694 15.4596 14.4794 14.8033C13.5451 14.1804 13 13.2794 13 12.3228C13 11.3661 13.5339 10.454 14.4794 9.83111C16.4594 8.51854 19.5517 8.51854 21.5206 9.83111C22.455 10.454 23 11.3661 23 12.3116C23 13.2683 22.4661 14.1693 21.5206 14.8033C20.5417 15.4707 19.2736 15.7933 18.0056 15.7933ZM15.4027 11.2215C14.9244 11.5441 14.6685 11.9334 14.6685 12.3228C14.6685 12.7121 14.9355 13.1014 15.4027 13.424C16.8154 14.3695 19.1846 14.3695 20.5973 13.424C21.0756 13.1014 21.3426 12.7121 21.3315 12.3228C21.3315 11.9334 21.0645 11.5441 20.5973 11.2215C19.1958 10.276 16.8154 10.276 15.4027 11.2215Z'
                  fill='#45F4EA'
                />
              </g>
              <defs>
                <clipPath id='clip0_3207_10785'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          ),
        },
      ],
      defaultAny: 'Withdraw to own account',
      onChange: e =>
        setCurrentObejct(prev => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
    {
      title: 'Email or Client ID',
      name: 'clientId',
      type: 'default',
      placeholder: 'Enter',
      onChange: e =>
        setCurrentObejct(prev => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
    {
      title: 'Withdraw amount',
      name: 'amount',
      type: 'default',
      rightText: 'CPL',
      onChange: e =>
        setCurrentObejct(prev => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
  ]

  return (
    <div>
      <button onClick={() => setToggle(prev => !prev)}>toggle</button>
      {/* {twoFactorAuth && (
        <Popup
          popUpElement={<NoMetaMask />}
          label={"Check Your Network"}
          handlePopUpClose={() => setTwoFactorAuth(false)}
        />
      )} */}

      {/* <div style={{ width: "400px" }}>
        <ResetPasswordForm
          passwordSetUpState={{ loading: false, error: "shit", success: "haha" }}
          handleNewPassword={(e) => console.log(e)}
        />
      </div> */}
      {/* <Popup
        popUpElement={
          <ChangeNetwork
            disconnect={() => console.log("disconnect")}
            handleNetworkChange={() => console.log("handle network change")}
          />
        }
        label={"Check Your Network"}
      /> */}
      <SideBar open={true}>
        <TransferFromAcc
          sideBarClose={() => setToggle(prev => !prev)}
          inputs={inputs}
          currentObject={currentObject}
          cardImg={'sada'}
        />
        {/* <Connect
          ConnectOptions={[
            {
              label: "Metamask",
              svg: <MetaMask width="26" />,
              connect: () => {
                console.log("connect");
              },
            },
            {
              label: "ConnectWallet",
              image,
              connect: () => {
                console.log("connect");
              },
            },
          ]}
          address={"0xb81G555828610c156eF3408DE21A3eC9b9B29V81"}
          signIn={() => {
            console.log("sign in");
          }}
          sideBarClose={() => setToggle((prev) => !prev)}
        /> */}
        {/* <UserAccount
          type={"Metamask"}
          personalData={{
            name: "",
            email: "",
            mobile: {
              code: "+1",
              flag: "🇺🇸",
              number: "",
            },
            date_of_birth: new Date(),
            nationality: "canada",
          }}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
          handlePersonalData={(e) => console.log(e)}
          handleSecurityData={(e) => console.log(e)}
          personalDataState={{ loading: false, saved: false, emailSent: false }}
          securityDataState={{ loading: false, saved: false }}
          emailVerified={true}
          userDataError={"error while saving"}
          securityError={"password is incorrect"}
          resendEmail={() => console.log("aahah")}
          hasPasswordSet={true}
          imgValue={
            "http://localhost:4000/images/0xecE0E468da93f632F1594F93d05289d465429137.png"
          }
          twoFactorAuth={twoFactorAuth}
          handleTwoFactorAuth={(val) => {
            setTwoFactorAuth(val);
          }}
          handleForgetPassword={() => console.log("forget password")}
        /> */}
        {/* <ResetPassword
          sideBarClose={() => setToggle((prev) => !prev)}
          goBack={() => console.log("go back")}
          resetPasswordState={{
            loading: false,
            error: "wrong ",
            success: "success",
          }}
          handleResetPassword={(e) => console.log(e)}
        /> */}
        {/* <UserOptions
          type={"Metamask"}
          warning={true}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
          account={"ahaha"}
        /> */}
        {/* <SignIn
          onClick={completeHandler}
          sideBarClose={() => setToggle((prev) => !prev)}
          goBack={() => console.log("go back")}
          signInState={{ loading: true, error: false }}
          otpEnabled={false}
          otpState={{ loading: false, error: "" }}
          handleTFA={(e) => console.log(e)}
          resetPasswordState={{
            loading: false,
            error: "wrong ",
            success: "success",
          }}
          handleResetPassword={(e) => console.log(e)}
        /> */}
      </SideBar>
    </div>
  )
})
