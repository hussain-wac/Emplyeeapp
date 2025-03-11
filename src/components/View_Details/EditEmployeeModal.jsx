import React, { useState } from "react";
import { X } from "lucide-react";
import EmployeeDetailsForm from "./Update/EmployeeDetailsForm";

const EditEmployeeModal = ({ initialValues, onSuccess, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (updatedData) => {
    setIsSubmitting(true);
    try {
      await onSuccess(updatedData);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow">
          <div className="modal-header bg-light">
            <h5 className="modal-title">Edit Employee Details</h5>
            <button type="button" className="btn btn-light border-0 d-flex align-items-center" onClick={onClose} disabled={isSubmitting}>
              <X size={20} />
            </button>
          </div>
          <div className="modal-body">
            <EmployeeDetailsForm
              key={JSON.stringify(initialValues)}
              initialValues={initialValues}
              onSuccess={handleSubmit}
              onCancel={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
