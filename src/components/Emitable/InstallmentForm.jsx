import React from 'react';

const InstallmentForm = ({
  recommendedAmount,
  setRecommendedAmount,
  installmentCount,
  setInstallmentCount
}) => (
  <form>
    <div className="form-group">
      <label htmlFor="recommendedAmount">Recommended Amount</label>
      <input
        type="number"
        className="form-control"
        id="recommendedAmount"
        value={recommendedAmount}
        onChange={(e) => setRecommendedAmount(e.target.value)}
        placeholder="Enter amount"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="installmentCount">Installment Count</label>
      <select
        className="form-control"
        id="installmentCount"
        value={installmentCount}
        onChange={(e) => setInstallmentCount(e.target.value)}
        required
      >
        <option value="">Select a count</option>
        {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>
    </div>
  </form>
);

export default InstallmentForm;