import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useField } from "informed";

const CustomPasswordField = ({
  label,
  validate,
  required = false,
  placeholder,
  validateOn,
  append,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
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
      <div className="input-group">
        <input
          {...props}
          id={inputId}
          type={showPassword ? "text" : "password"}
          value={value || ""}
          onChange={(e) => fieldApi.setValue(e.target.value)}
          onBlur={() => fieldApi.setTouched(true)}
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-outline-secondary"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && (
        <div id={errorId} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomPasswordField;
