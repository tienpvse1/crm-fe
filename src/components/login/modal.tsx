import { Modal as Dialog } from 'antd';
import React from 'react';
interface ModalProps {
  reset: () => void;
}

export const Modal: React.FC<ModalProps> = ({ reset }) => {
  return (
    <>
      <Dialog
        title='Unauthorize'
        onCancel={() => reset()}
        onOk={() => reset()}
        visible
      >
        <p>Please check your email and password</p>
      </Dialog>
    </>
  );
};
