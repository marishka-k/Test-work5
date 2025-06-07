import React, { useState } from 'react';
import styles from './modal.module.css'

function Modal({ open, setOpen }) {
  
  const closeModal = () => setOpen(false);

  return (
    <>
      {open 
        ? <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.content}>
              <button className={styles.close} onClick={closeModal}> &times; </button>
              <div className={styles.body}>
                <p>заказ успешно отправлен </p>
              </div>
            </div>
          </div>
      : <> </>
    }
    </>
  );
}

export default Modal;