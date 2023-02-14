import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Modal2 from './Modal2'

const KING = styled.div`

`

const SelectBox = styled.div`
  border: 2px solid gray;
  height: 200px;
`

const Jaemokfont = styled.span`
  font-size: 33px;
  font-weight: 650;
`

const LargePrimaryButton = styled.button`
  border: 3px solid ${props => props.bordercolor};
  background-color: white;
  border-radius: 5px;
  width: 170px;
  height: 50px;
  &:hover{
    cursor: pointer;
    background-color: ${props => props.bordercolor};
  }
`

const SimpleButton = styled.button`
  background-color: ${props => props.backgroundcolor};
  border: none;
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.height};
  &:hover{
    cursor: pointer;
  }
`

const InputTest = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  &:click{
    border: 2px solid black;
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


  const [inputName, setInputName] = useState("")
  const [inputPrice, setInputPrice] = useState("")
  const inputNameHandler = (event) => {
    setInputName(event.target.value)
  }
  const inputPriceHandler = (event) => {
    setInputPrice(event.target.value)
  }
  const inputNamePriceAlerter = () => {
    if (inputName !== "" && inputPrice !== "") {
      alert(`이름:${inputName} 가격:${inputPrice}`)
    } else {
      alert("이름과 가격 모두 입력해주세요.")
    }
  }

  return (
    <KING>
      <Jaemokfont>Button</Jaemokfont>
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
          width="105px"
          height="32px"
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
          width="105px"
          height="32px"
          backgroundcolor="pink"
        >Small
        </SimpleButton>
      </div>

      <Jaemokfont>Input</Jaemokfont>
      <div>
        이름 : <InputTest value={inputName} onChange={inputNameHandler}/>
        가격 : <InputTest value={inputPrice} onChange={inputPriceHandler}/>
        <SimpleButton
          width="105px"
          height="32px"
          backgroundcolor="pink"
          onClick={() => inputNamePriceAlerter()}
        >저장
        </SimpleButton>
      </div>


      <Jaemokfont>Modal</Jaemokfont>
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

      <SelectBox>
        <Jaemokfont>Select</Jaemokfont>
      </SelectBox>
    </KING>
  )
}

export default App