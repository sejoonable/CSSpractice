import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalBody = styled.div`
  position: absolute;
  padding: 40px;
  background-color: white;
  width: 400px;
  height: 500px;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
`
const ModalButton = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: ${(props) => props.rightposition};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  &:hover{
    cursor: pointer;
  }
`


function Modal({ closemodal1 }) {

  return (<>
    <div>
      <ModalBackground>
        <ModalBody onClick={event => event.stopPropagation()}>
          <span>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</span>
          <ModalButton
            backgroundColor='pink'
            rightposition='20px'
            onClick={closemodal1}>
            닫기
          </ModalButton>
          <ModalButton
            backgroundColor='green'
            rightposition='130px'>
            확인
          </ModalButton>
        </ModalBody>
      </ModalBackground>
    </div>
  </>
  )
}

export default Modal