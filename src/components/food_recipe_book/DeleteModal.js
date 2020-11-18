import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

const DeleteModal = ({
  open,
  toggle,
  onSubmit,
  submitButtonName,
  submitButtonColor,
  title,
  message,
}) => (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle} className="custom-modal-header">
      {title}
    </ModalHeader>
    {message !== "" && <ModalBody>{message}</ModalBody>}
    <ModalFooter>
      <div className="display-flex">
        <Button color={submitButtonColor} onClick={onSubmit}>
          {submitButtonName}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </div>
    </ModalFooter>
  </Modal>
);

DeleteModal.defaultProps = {
  message: "",
  title: "",
  submitButtonName: "Okay",
  onSubmit: () => {},
  submitButtonColor: "danger",
};

DeleteModal.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  submitButtonName: PropTypes.string,
  submitButtonColor: PropTypes.string,
  onSubmit: PropTypes.func,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default DeleteModal;
