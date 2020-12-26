import React from 'react';
import './Introduction.css';

function Introduction() {
    return (
        <div className="Introduction">
            <h3 className="mt-4 mb-3">Relapse Prevention Inventory Diagnostic (RAPID)</h3>
            <div className="alert alert-dark" role="alert">
            The RAPID score indicates how well you are doing in recovery and what is your risk of relapse. The questions are based on the “five rules of recovery.” These questions apply to the last month.
            </div>
        </div>
    )
}

export default Introduction;