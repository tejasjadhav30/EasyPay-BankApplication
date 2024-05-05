import React from 'react';


const TransferDetails = ({ transferDetails }) => {
    return (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-md rounded-md p-8">
            <h2 className="text-xl font-semibold mb-6">Transfer Details</h2>
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Transfer Details</h3>
                <p>Transaction ID: {transferDetails.transactionId}</p>
                <p>Date: {transferDetails.transactionDate}</p>
                <p>Description: {transferDetails.description}</p>
                <p>Status: {transferDetails.status}</p>
                <p>Amount: {transferDetails.amount}</p>
                <p>From Account: {transferDetails.fromAccount}</p>
                <p>To Account: {transferDetails.toAccount}</p>
            </div>
        </div>
    );
};

export default TransferDetails;
