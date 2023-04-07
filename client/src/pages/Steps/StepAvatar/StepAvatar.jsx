import React from 'react'
import Button from './../../../components/shared/Button/Button';



const StepAvatar = ({onNext}) => {
  return (
    <>
    <div>
      Avatar Component
    </div>
    <Button
    text="Next"
    onClick={onNext}
    >
    </Button>
    </>
  )
}

export default StepAvatar