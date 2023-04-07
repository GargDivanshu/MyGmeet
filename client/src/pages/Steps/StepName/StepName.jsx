import React from 'react'
import Button from './../../../components/shared/Button/Button';



const StepName = ({onNext}) => {
  return (
    <>
    <div>
    Name Component
    </div>
    <Button
    text="Next"
    onClick={onNext}
    >
    </Button>
    </>
  )
}

export default StepName