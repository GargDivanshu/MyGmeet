import React from 'react'
import Button from './../../../components/shared/Button/Button';


const StepUsername = ({onNext}) => {
  return (
    <>
    <div>
    Username Component
    </div>
    <Button
    text="Next"
    onClick={onNext}
    >
    </Button>
    </>
  )
}

export default StepUsername