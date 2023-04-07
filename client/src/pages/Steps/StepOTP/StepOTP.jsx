import React from 'react'
import Button from './../../../components/shared/Button/Button';


const StepOTP = ({onNext}) => {
  return (
    <>
    <div>
    OTP Component
    </div>
    <Button
    text="Next"
    onClick={onNext}
    >
    </Button>
    </>
  )
}

export default StepOTP