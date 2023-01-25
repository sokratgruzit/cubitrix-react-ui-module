import './Calculator.css';

import { HelpText } from '../HelpText';
import { Button } from '../Button';
import { Input } from '../Input';

const BUTTONS_DATA = [
  {
    title: "30 D",
  },
  {
    title: "60 D",
  },
  {
    title: "90 D",
  },
  {
    title: "180 D",
  },
  {
    title: "360 D",
  },
];

export const Calculator = props => {
    return (
        <div className={`staking-calculator-container ${props.type}`}>
          <h2 className="font-14 staking-calculator__header">Staking Calculator</h2>
          <Input type='stake-input' />
          <div className="staking-calculator__buttons">
            {BUTTONS_DATA.map(button => (
              <Button
                label={button.title}
                size={'btn-sm'}
                type={'btn-primary'}
                arrow={'arrow-none'}
                element={'button'}
                customStyles={{ width: '60px' }}
            />
            ))}
          </div>
          <HelpText
            title="15 % APY On 30 Days. Locked Until 02/02/2023 2:33 PM"
            status="info"
            color="#6A6D76"
            icon={true}
          />
          <div style={{ marginTop: '23.5px' }}> 
            <Button 
              element={'button'}
              label={'Stake'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-none'}
              customStyles={{ width: '100%', margin: '0'}}
            />
          </div>
        </div>
    )
}