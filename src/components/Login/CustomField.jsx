import React from "react";
import { useField } from "informed";

const CustomField = ({
  label,
  fieldType = "text",
  validate,
  required = false,
  placeholder,
  validateOn,
  append,
  ...props
}) => {
  const { fieldState, fieldApi, render } = useField({
    ...props,
    validate,
    validateOn,
  });

  const { error, value } = fieldState;
  const inputId = `${props.name}-input`;
  const errorId = `${props.name}-error`;

  return render(
    <div className="mb-3">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      {append ? (
        <div className="input-group">
          <input
            {...props}
            id={inputId}
            type={fieldType}
            value={value || ""}
            onChange={(e) => fieldApi.setValue(e.target.value)}
            onBlur={() => fieldApi.setTouched(true)}
            className={`form-control ${error ? "is-invalid" : ""}`}
            placeholder={placeholder || `Enter ${label.toLowerCase()}`}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
          />
          {append}
        </div>
      ) : (
        <input
          {...props}
          id={inputId}
          type={fieldType}
          value={value || ""}
          onChange={(e) => fieldApi.setValue(e.target.value)}
          onBlur={() => fieldApi.setTouched(true)}
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
      )}
      {error && (
        <div id={errorId} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomField;
