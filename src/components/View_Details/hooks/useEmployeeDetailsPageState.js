import { useState } from "react";
import useEmployeeDetails from "./useEmployeeDetails"; 
import useEmployeeUpdate from "./useEmployeeUpdate";

const useEmployeeDetailsPageState = (id) => {
  const { details, error, isLoading, mutate } = useEmployeeDetails(id);
  const { updateEmployee} = useEmployeeUpdate(); 
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleEdit = () => {
    setFormData(details);
  };

  const handleCancel = () => {
    setFormData(details);
  };

  const handleSuccess = async (payload) => {
    const result = await updateEmployee(payload);
    if (result.success) {
      setFormData(result.data);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
      mutate(); // Refetch the data after successful update
    }
  };

  // Consolidated return for cleaner code
  return {
    formData,
    isLoading,
    error,
    showSuccessToast,
    handleEdit,
    handleCancel,
    handleSuccess,
  };
};

export default useEmployeeDetailsPageState;
