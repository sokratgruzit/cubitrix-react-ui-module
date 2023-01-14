import './Calculator.css';

import { HelpText } from '../HelpText';
import { Button } from '../Button';
import { Input } from '../Input';

export const Calculator = props => {
    return (
        <div className={`staking-calculator-container ${props.type}`}>
          <h2 className="font-14 staking-calculator__header">Staking Calculator</h2>
          <Input type='stake-input' />
          <div className="staking-calculator__buttons">
            <Button 
              customStyles={{ color: '#FFFFFF', background: '#3D5AFE'}}
              label='30 D'
              size='btn-medium'
              type='btn-staking-calculator'
            />
            <Button 
              label='60 D'
              size='btn-medium'
              type='btn-staking-calculator'
            />
            <Button 
              label='90 D'
              size='btn-medium'
              type='btn-staking-calculator'
            />
            <Button 
              label='180 D'
              size='btn-medium'
              type='btn-staking-calculator'
            />
            <Button 
              label='360 D'
              size='btn-medium'
              type='btn-staking-calculator'
            />
          </div>
          <HelpText
            title="15 % APY On 30 Days. Locked Until 02/02/2023 2:33 PM"
            status="info"
            color="#6A6D76"
            icon={true}
          />
          <div style={{ marginTop: '23.5px'}}> 
            <Button
              label="Stake"
              size='btn-xl'
              type='btn-primary'
              arrow='arrow-none'
            />
          </div>
        </div>
    )
}