import React from 'react'
import Button from './../../../components/shared/Button/Button';

const StepPhoneEmail = ({onNext}) => {
  return (
    <>
    <div>
      Phone or Email Component
    </div>
    <Button
    text="Next"
    onClick={onNext}
    >
    </Button>
    </>
  )
}

export default StepPhoneEmail