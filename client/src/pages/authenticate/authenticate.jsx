import React, {useState} from 'react'

import StepOTP from './../Steps/StepOTP/StepOTP';
import StepPhoneEmail from './../Steps/StepPhoneEmail/StepPhoneEmail';


const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
}


const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    function onNext(){
        setStep(step + 1)
        }

  return (
    <div>Authenticate</div>
  )
}

export default Authenticate