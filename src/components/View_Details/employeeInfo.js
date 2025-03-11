export const getPersonalInfo = (formData) => [
    { label: "Employee Code", value: formData.employee_code },
    { label: "Email", value: formData.email },
    { label: "Mobile", value: formData.phone },
    { label: "Date of Birth", value: formData.formatted_dob },
    { label: "Address", value: formData.address },
    { label: "City", value: formData.city },
    { label: "State", value: formData.state },
    { label: "Country", value: formData.country },
    {
      label: "Gender",
      value:
        formData.gender === 1
          ? "Male"
          : formData.gender === 2
          ? "Female"
          : formData.gender === 3
          ? "Others"
          : "N/A",
    },
    { label: "Zip code", value: formData.zip_code },
  ];
  
  export const getEmploymentInfo = (formData) => [
    { label: "Department", value: formData.department?.name },
    { label: "Designation", value: formData.designation?.title },
    { label: "Employment Type", value: formData.employment_type?.title },
    { label: "Joining Date", value: formData.formatted_joining_date },
    {
      label: "Salary",
      value: `₹${parseFloat(formData.salary).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}`,
    },
  ];
  
  export const getBankingInfo = (formData) => [
    { label: "Bank Account", value: formData.bank_account_number },
    { label: "IFSC Code", value: formData.ifsc_code },
  ];
  
  export const getEmergencyInfo = (formData) => [
    { label: "Emergency Contact", value: formData.emergency_contact },
  ];
  
  export const getSystemInfo = (formData) => [
    { label: "Created By", value: formData.created_by?.name },
    { label: "Updated By", value: formData.updated_by?.name },
  ];
  