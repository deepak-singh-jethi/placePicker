import {useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({open, children }) {
  const dialogRef = useRef();

useEffect(()=>{
 if (open){
    dialogRef.current.showModal();
  }
  else{
    dialogRef.current.close();
  }

},[open])
 
  return createPortal(
    <dialog className="modal" ref={dialogRef}>
   {open && children}
      
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
