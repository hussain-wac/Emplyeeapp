import React from "react";
import { useField, useFormState } from "informed";
import { UploadCloud } from "lucide-react";

const CustomFileInput = ({ label, field, validate, backendError, ...rest }) => {
  const { fieldState, fieldApi, ref } = useField({ field, validate });
  const { touched, error } = fieldState;
  const { values } = useFormState();
  const displayError = touched && (error || backendError);

  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label fw-bold">
        {label}
      </label>
      <div className="position-relative">
        <label

          htmlFor={field}
          className="d-flex align-items-center gap-2 border border-primary rounded px-3 py-2 bg-light cursor-pointer"
          style={{ width: "fit-content", cursor: "pointer" }}
        >
          <UploadCloud size={20} className="text-primary" />
          <span>Upload File</span>
        </label>
        <input
          ref={ref}
          type="file"
          id={field}
          name={field}
          className="text text-primary"
          onChange={(e) => {
            const file = e.target.files[0];
            fieldApi.setValue(file);
            const validationError = validate ? validate(file, values) : null;
            fieldApi.setError(validationError);
          }}
          {...rest}
        />
      </div>
      {displayError && <div className="text-danger small">{error || backendError}</div>}
    </div>
  );
};

export default CustomFileInput;
