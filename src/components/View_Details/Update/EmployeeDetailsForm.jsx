import React from "react";
import { Form } from "informed";
import CustomInput from "./CustomInput";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomFileInput from "./CustomFileInput";
import useEmployeeFormLogic from "./hooks/useEmployeeFormLogic";
import { validateEmployeeForm } from "./validation";
import { toast } from "react-toastify"; // Import toast

import {
  personalFields,
  addressFields,
  employmentFields,
  bankingFields,
  emergencyFields,
  genderOptions,
} from "./formLabels";

// Import the new Select components
import DepartmentSelect from "./DepartmentSelect";
import DesignationSelect from "./DesignationSelect";
import EmploymentTypeSelect from "./EmploymentTypeSelect";

const EmployeeDetailsForm = ({ initialValues, onSuccess, onCancel }) => {
  const { handleSubmit, isSaving, fieldErrors } = useEmployeeFormLogic(
    initialValues,
    () => {
      toast.success("Employee data updated successfully!");
      onSuccess();
    }
  );


  const renderFormSection = (title, fields) => (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-light">
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="card-body">
        <div className="row g-3">
          {fields.map(({ label, field, type }) => (
            <div key={field} className="col-md-6">
              <CustomInput
                label={label}
                field={field}
                type={type}
                required
                backendError={fieldErrors[field]}
                validate={(value, values) =>
                  validateEmployeeForm(values)[field]
                }
                className="bg-light rounded p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
      focusOnInvalid={true}
    >
      <div className="mb-4">
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-light">
            <h5 className="card-title mb-0">Profile Picture</h5>
          </div>
          <div className="card-body">
            <CustomFileInput
              label="Upload Photo"
              field="profile_picture"
              validate={(value, values) =>
                validateEmployeeForm(values).profile_picture
              }
            />
          </div>
        </div>
        {renderFormSection("Personal Information", personalFields)}
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-light">
            <h5 className="card-title mb-0">Gender</h5>
          </div>
          <div className="card-body">
            <CustomRadioGroup
              label="Select Gender"
              field="gender"
              options={genderOptions}
              required
              backendError={fieldErrors["gender"]}
              className="bg-light rounded p-3"
            />
          </div>
        </div>
        {renderFormSection("Address Details", addressFields)}
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-light">
            <h5 className="card-title mb-0">Employment Details</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <DepartmentSelect
                  label="Department"
                  field="department_id"
                  className="bg-light rounded p-2"
                />
              </div>
              <div className="col-md-6">
                <DesignationSelect
                  label="Designation"
                  field="designation_id"
                  className="bg-light rounded p-2"
                />
              </div>
              <div className="col-md-6">
                <EmploymentTypeSelect
                  label="Employment Type"
                  field="employment_type_id"
                  className="bg-light rounded p-2"
                />
              </div>
              {employmentFields.map(({ label, field, type }) => (
                <div key={field} className="col-md-6">
                  <CustomInput
                    label={label}
                    field={field}
                    type={type}
                    required
                    backendError={fieldErrors[field]}
                    validate={(value, values) =>
                      validateEmployeeForm(values)[field]
                    }
                    className="bg-light rounded p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {renderFormSection("Banking Information", bankingFields)}
        {renderFormSection("Emergency Contact", emergencyFields)}
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-body text-center">
          <button
            type="submit"
            className={`btn ${
              isSaving ? "btn-secondary" : "btn-primary"
            } px-4 me-2`}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-outline-secondary px-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </Form>
  );
};

export default EmployeeDetailsForm;
