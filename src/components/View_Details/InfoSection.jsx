import React from "react";

const InfoSection = ({ title, items }) => (
  <div className="card shadow-sm mb-4">
    <div className="card-header bg-light">
      <h5 className="card-title mb-0">{title}</h5>
    </div>
    <div className="card-body">
      <div className="row g-3">
        {items.map(({ label, value }) => (
          <div key={label} className="col-md-6">
            <div className="p-3 bg-light rounded">
              <small className="text-muted text-uppercase">{label}</small>
              <div className="mt-1 fw-medium">{value || "N/A"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default InfoSection;
