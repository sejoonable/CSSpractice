import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Modal2 from './Modal2'

const LargePrimaryButton = styled.button`
  border: 3px solid ${props => props.bordercolor};
  background-color: white;
  border-radius: 5px;
  &:hover{
    background-color: ${props => props.bordercolor};
  }
`


function App() {
  const [modal1, setmodal1] = useState(false)
  const [modal2, setmodal2] = useState(false)

  const closemodal1 = () => {
    setmodal1(!modal1)
  }

  const closemodal2 = () => {
    setmodal2(!modal2)
  }

  return (
    <div>
      <LargePrimaryButton
        bordercolor="green"
        onClick={() => { alert("버튼을 만들어보세요") }}>
        LargePrimaryButton
      </LargePrimaryButton>

      <LargePrimaryButton
        bordercolor="pink"
        onClick={() => { alert("버튼을 만들어보세요") }}>
        LargeNegativeButton
      </LargePrimaryButton>

      <div>
        <button onClick={() => { setmodal1(!modal1) }}>open modal</button>
        {modal1 &&
          <Modal closemodal1={closemodal1} />
        }
      </div>
      <div>
        <button onClick={() => { setmodal2(!modal2) }}>open modal2</button>
        {modal2 &&
          <Modal2 closemodal2={closemodal2} />
        }
      </div>
    </div>
  )
}

export default App