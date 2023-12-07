import React from "react";
import plus from "../../../assets/images/plus.svg";
import "./addnotes.css";
import ModalContainer from "../../../base/modal/ModalContainer";
import Editor from "../../editor/Editor";

const AddNotes = ({
  isModalOpen,
  showModal,
  handleOk,
  handleCancel,
  title,
  content,
  onChange,
  setContent,
  onSubmit,
}) => {
  return (
    <>
      <div className="addnotes__container" onClick={() => showModal()}>
        <img src={plus} alt="plus" />
        <span>Add Notes</span>
      </div>
      {isModalOpen && (
        <ModalContainer
          isModalOpen={isModalOpen}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
        >
          <Editor
            title={title}
            content={content}
            onChange={onChange}
            setContent={setContent}
            onSubmit={onSubmit}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default AddNotes;
