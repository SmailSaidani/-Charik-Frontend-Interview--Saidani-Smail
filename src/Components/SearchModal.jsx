import React from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBInputGroup,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useModal } from "../context/ModalContext";

const Modal = () => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <MDBModal
      show={isModalOpen}
      setShow={toggleModal}
      tabIndex="-1"
      centered
          className="custom-modal"
    >
      <MDBModalDialog>
        <MDBModalContent className="p-4 custom-modal-content shadow-lg" >
          <MDBModalHeader className="border-0">
            <MDBModalTitle>Search</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleModal}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBInputGroup className="rounded-search-bar mb-3">
            <MDBInput
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="form-control rounded-input shadow-lg"
              style={{ height: "50px" }}
            />
            <MDBBtn
              style={{ backgroundColor: "#3d3d3d" }}
              className="rounded-button"
            >
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInputGroup>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default Modal;
