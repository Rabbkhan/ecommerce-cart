// Modal.js
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById('overlays');

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>,
    PortalElement
  );
};

export default Modal;
