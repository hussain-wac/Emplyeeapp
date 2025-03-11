import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import useEmployeeDetails from "./hooks/useEmployeeDetails";
import ProfileImage from "./ProfileImage";
import InfoSection from "./InfoSection";
import EmployeeEditModal from "./EmployeeEditModal";
import { ToastContainer } from 'react-toastify';
import {
  getPersonalInfo,
  getEmploymentInfo,
  getBankingInfo,
  getEmergencyInfo,
  getSystemInfo,
} from "./employeeInfo";

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { details, error, isLoading, mutate } = useEmployeeDetails(id);

  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <Loader2 size={40} className="text-primary animate-spin" />z

      </div>
    );
  }

  if (error || !details) {
    return (
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <AlertCircle size={20} className="me-2" />
          Failed to load employee details
        </div>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-secondary mt-3 d-flex align-items-center"
        >
          <ArrowLeft size={18} className="me-2" /> Back
        </button>
      </div>
    );
  }
  const handleSuccess = () => {
    mutate(); 
  };

  return (
    <div className="container py-5">
      <button className="btn btn-outline-primary d-flex align-items-center" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} className="me-2" /> Go Back
      </button>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body text-center">
              <ProfileImage src={details.profile_picture} />
              <h2 className="h3 mb-1">{details.name}</h2>
              <p className="text-muted mb-3">
                <span className="badge bg-primary">
                  {details.designation?.title || "Designation"}
                </span>
              </p>
              <EmployeeEditModal initialValues={details} onSuccess={handleSuccess}  />
            </div>
            <InfoSection title="Personal Information" items={getPersonalInfo(details)} />
            <InfoSection title="Employment Details" items={getEmploymentInfo(details)} />
            <InfoSection title="Banking Information" items={getBankingInfo(details)} />
            <InfoSection title="Emergency Contact" items={getEmergencyInfo(details)} />
            <InfoSection title="System Information" items={getSystemInfo(details)} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
