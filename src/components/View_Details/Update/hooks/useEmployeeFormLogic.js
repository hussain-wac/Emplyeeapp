import useEmployeeUpdate from "./useEmployeeUpdate";

const useEmployeeFormLogic = (initialValues, onSuccess) => {
  const { updateEmployee, isSaving, fieldErrors } = useEmployeeUpdate();

  const handleSubmit = async (values) => {
    const payload = { ...values.values, id: initialValues.id };
    const result = await updateEmployee(payload);
    if (result.success && onSuccess) {
      onSuccess(payload);
    }
    return result;
  };

  return { handleSubmit, isSaving, fieldErrors };
};

export default useEmployeeFormLogic;
