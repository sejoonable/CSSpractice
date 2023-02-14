import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalBody = styled.div`
    position: absolute;
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
`
const ModalContents = styled.span`
    position: absolute;
    top: 40px;
    padding: 15px;
`
const ModalButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border:none;
    background-color: transparent;
    font-size: 20px;
    &:hover{
        cursor: pointer
    };

`


function Modal2({closemodal2}) {
    return (
        <ModalBackground onClick={closemodal2}>
            <ModalBody onClick={event => event.stopPropagation()}>
                <ModalContents>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</ModalContents>
                <ModalButton onClick={closemodal2}>X</ModalButton>
            </ModalBody>
        </ModalBackground>


    )
}

export default Modal2