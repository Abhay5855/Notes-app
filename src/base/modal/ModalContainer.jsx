import React from "react";
import { Modal } from "antd";

const ModalContainer = ({ isModalOpen, handleCancel, handleOk, children }) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalContainer;
