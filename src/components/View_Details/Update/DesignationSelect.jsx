import React from "react";
import CustomSelect from "./CustomSelect";
import { useDesignations } from "../../../hooks/useMasterData";
const DesignationSelect = ({...props}) => {
  const { designations } = useDesignations();
  return (
    <CustomSelect {...props}>
      {designations?.map((designation) => (
        <option key={designation.id} value={designation.id}>
          {designation.title}
        </option>
      ))}
    </CustomSelect>
  );
};

export default DesignationSelect;
