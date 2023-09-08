// import { render } from "@testing-library/react";
import React from "react";
import { createPortal } from 'react-dom';
import { Overlay, ModalWrap } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');



export class Modal extends React.Component{
      
  render() {

     return createPortal(
    <Overlay 
    onClick={this.props.closeModal} onKeyDown={this.props.closeModal}>
<ModalWrap>
<img src={this.props.bigUrl} alt="CAt" />
</ModalWrap>
</Overlay>,
modalRoot
    )
}
}

