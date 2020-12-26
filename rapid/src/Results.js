import React from 'react';

function Results({score}) {
    return (
        <div className="row Results mb-5">
            <div className="col-sm-4">
                <div className={`card ${score > 70 ? "bg-primary text-white" : ""}`}>
                    <div className="card-body">
                        <h5 className="card-title">Score {">"} 70</h5>
                        <p className="card-text">You are at low risk of currently relapsing. Continue to be mindful of recovery because addiction is cunning and can sneak up on you.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className={`card ${(score >= 50 && score <= 70) ? "bg-primary text-white" : ""}`}>
                    <div className="card-body">
                        <h5 className="card-title">Score 50 - 70</h5>
                        <p className="card-text">This is a normal score in early recovery. Don’t be hard on yourself. Recovery is a series of improvements. Everybody who has a successful recovery has had to go through this stage.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className={`card ${score < 50 ? "bg-primary text-white" : ""}`}>
                    <div className="card-body">
                        <h5 className="card-title">Score {"<"} 50</h5>
                        <p className="card-text">You are at higher risk of relapse. Think about why you want to recover and how you can improve your recovery strategy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;