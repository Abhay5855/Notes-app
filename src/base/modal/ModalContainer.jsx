import React from "react";
import { Modal } from "antd";
import Button from "../button/Button";

const ModalContainer = ({
  isModalOpen,
  handleCancel,
  handleOk,
  isDisabled,
  children,
}) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={[
          <Button
            type='submit'
            variant='submit'
            label='Submit'
            onClick={handleOk}
            isDisabled={isDisabled}
          />,
        ]}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalContainer;
