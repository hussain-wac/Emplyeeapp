import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Pencil } from "lucide-react";
import EmployeeDetailsForm from "./Update/EmployeeDetailsForm";
import { mutate } from "swr";

const EmployeeEditModal = ({ initialValues, onSuccess }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFormSuccess = (updatedData) => {
    mutate();
    onSuccess(updatedData);
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="d-flex align-items-center gap-2">
        <Pencil size={18} /> Edit Details
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeDetailsForm
            initialValues={initialValues}
            onSuccess={handleFormSuccess}
            onCancel={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmployeeEditModal;
