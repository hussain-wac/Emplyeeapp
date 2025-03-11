import React from "react";
import CustomSelect from "./CustomSelect";
import { useDepartments } from "../../../hooks/useMasterData";

const DepartmentSelect = ({...props}) => {


    const { departments } = useDepartments();
  return (
    <CustomSelect {...props}>
      {departments?.map((dept) => (
        <option key={dept.id} value={dept.id}>
          {dept.name}
        </option>
      ))}
    </CustomSelect>
  );
};

export default DepartmentSelect;
