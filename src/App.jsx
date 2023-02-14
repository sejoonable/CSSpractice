import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Modal2 from './Modal2'

const LargePrimaryButton = styled.button`
  border: 3px solid ${props => props.bordercolor};
  background-color: white;
  border-radius: 5px;
  width: 170px;
  height: 50px;
  &:hover{
    background-color: ${props => props.bordercolor};
  }
`

const SimpleButton = styled.button`
  background-color: ${props => props.backgroundcolor};
  border: none;
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.height};

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
    <>
      <div>
        <LargePrimaryButton
          bordercolor="green"
          onClick={() => { alert("버튼을 만들어보세요") }}>
          LargePrimaryButton
        </LargePrimaryButton>

        <SimpleButton
          width="135px"
          height="45px"
          backgroundcolor="green"
        >Medium
        </SimpleButton>

        <SimpleButton
          width="125px"
          height="35px"
          backgroundcolor="green"
          >Small
        </SimpleButton>
      </div>

      <div>
        <LargePrimaryButton
          bordercolor="pink"
          onClick={() => { prompt("어렵나요?") }}>
          LargeNegativeButton
        </LargePrimaryButton>

        <SimpleButton
          width="135px"
          height="45px"
          backgroundcolor="pink"
        >Medium
        </SimpleButton>

        <SimpleButton
          width="125px"
          height="35px"
          backgroundcolor="pink"
          >Small
        </SimpleButton>
      </div>


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
    </>
  )
}

export default App