import React from 'react';
import './Question.css';

function Question({question, updateAnswer}) {

    return (
        <tr className="Question">
            <td>{question.question}</td>
            <td className="text-center"><button className={`btn ${question.answer === 4 ? 'btn-primary' : ''} ${question.isYesOrNoQuestion ? 'd-none' : ''}`} onClick={() => updateAnswer(question.question, 4)}>Always</button></td>
            <td className="text-center"><button className={question.answer === 3 ? "btn btn-primary" : "btn"} onClick={() => updateAnswer(question.question, 3)}>{question.isYesOrNoQuestion ? "Yes" : "More than half the time"}</button></td>
            <td className="text-center"><button className={question.answer === 1 ? "btn btn-primary" : "btn"} onClick={() => updateAnswer(question.question, 1)}>{question.isYesOrNoQuestion ? "No" : "Less than half the time"}</button></td>
            <td className="text-center"><button className={`btn ${question.answer === 0 ? 'btn-primary' : ''} ${question.isYesOrNoQuestion ? 'd-none' : ''}`} onClick={() => updateAnswer(question.question, 0)}>Never</button></td>
        </tr>
    )
}

export default Question;