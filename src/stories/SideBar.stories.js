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
import { Account, MetaMask } from '../assets/svgs'
import { TransferFromAcc } from '../components/TransferFromAcc'
import { Exchange } from '../components/Exchange'

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
      title: 'Transfer amount',
      name: 'transfer_amount',
      type: 'default',
      rightText: 'CPL',
      onChange: e =>
        setCurrentObejct(prev => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
    {
      title: 'Receive amount',
      name: 'receive_amount',
      type: 'default',
      rightText: 'BTC',
      onChange: e =>
        setCurrentObejct(prev => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
  ]

  const accounts = [
    {
      svg: <Account type={'btc'} />,
      title: 'BTC',
      value: '0.000000 BTC',
      price: '$0.00',
    },
    {
      svg: <Account type={'usdt'} />,
      title: 'USDT',
      value: '0.000000 USDT',
      price: '$0.00',
    },
    {
      svg: <Account type={'eth'} />,
      title: 'ETH',
      value: '0.000000 ETH',
      price: '$0.00',
    },
    {
      svg: <Account type={'gold'} />,
      title: 'GOLD',
      value: '0.000000 G',
      price: '$0.00',
    },
    {
      svg: <Account type={'platinium'} />,
      title: 'PLATINUM',
      value: '0.000000 P',
      price: '$0.00',
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
        <Exchange
          sideBarClose={() => setToggle(prev => !prev)}
          inputs={inputs}
          currentObject={currentObject}
          cardImg={'sada'}
          accounts={accounts}
          handleSubmit={() => console.log('hi')}
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
