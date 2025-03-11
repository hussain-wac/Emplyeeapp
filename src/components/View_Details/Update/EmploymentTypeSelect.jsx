import React from "react";
import CustomSelect from "./CustomSelect";
import { useEmploymentTypes } from "../../../hooks/useMasterData";

const EmploymentTypeSelect =  ({...props}) => {
  const { employmentTypes } = useEmploymentTypes();
  return (
    <CustomSelect {...props}>
      {employmentTypes?.map((type) => (
        <option key={type.id} value={type.id}>
          {type.title}
        </option>
      ))}
    </CustomSelect>
  );
};

export default EmploymentTypeSelect;
