import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Button from "./Button";
import { ModalType } from "../interfaces/posts";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
  },
};

const NewModal = ({ openModal, setopenModal, error }: ModalType) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={setopenModal}
      style={customStyles}
      contentLabel="Instructional Modal"
    >
      <h3>{error}</h3>
      <ButtonWrapper>
        <Button onClick={() => setopenModal(!openModal)} text="Close" />
      </ButtonWrapper>
    </Modal>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NewModal;
