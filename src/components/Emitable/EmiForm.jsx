import React from 'react';
import InstallmentForm from './InstallmentForm';
import InstallmentTable from './InstallmentTable';
import useInstallmentLogic from './useInstallmentLogic';

const EmiForm = () => {
  const {
    recommendedAmount,
    setRecommendedAmount,
    installmentCount,
    setInstallmentCount,
    selectedInstallments,
    setSelectedInstallments,
    installments,
    dueDates,
    mergedRows,
    splitRows,
    mergeInstallments,
    unmergeInstallments,
    handleDateChange,
    splitInstallments,
    revertSplit,
    validateDate,
    selectedDates
  } = useInstallmentLogic();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Installment Payment Form</h1>
      <InstallmentForm
        recommendedAmount={recommendedAmount}
        setRecommendedAmount={setRecommendedAmount}
        installmentCount={installmentCount}
        setInstallmentCount={setInstallmentCount}
      />
      <h2 className="text-2xl font-semibold my-6 text-gray-900">Installment Details</h2>
      <InstallmentTable
        installments={installments}
        dueDates={dueDates}
        selectedInstallments={selectedInstallments}
        setSelectedInstallments={setSelectedInstallments}
        unmergeInstallments={unmergeInstallments}
        handleDateChange={handleDateChange}
        splitInstallments={splitInstallments}
        revertSplit={revertSplit}
        validateDate={validateDate}
        selectedDates={selectedDates}
      />
      <div className="mt-6 flex justify-end space-x-4">
        <button
          type="button"
          className={`flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
            selectedInstallments.length < 2 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={mergeInstallments}
          disabled={selectedInstallments.length < 2}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Merge Selected
        </button>
        <button
          type="button"
          className={`flex items-center px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-600 ${
            selectedInstallments.length !== 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={splitInstallments}
          disabled={selectedInstallments.length !== 1}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Split Selected
        </button>
      </div>
    </div>
  );
};

export default EmiForm;