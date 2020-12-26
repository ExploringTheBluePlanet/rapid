import React, {useState, useEffect} from 'react';
import Introduction from './Introduction.js';
import Principle from './Principle.js';
import Question from './Question.js';
import TableFooter from './TableFooter';
import Results from './Results.js';

function RapidEvaluator() {
    const [questions, setQuestions] = useState([
        {
            principle: "1. Change your life so that it's easier not to use", 
            questions: [
                {question: "How often are you able to set healthy boundaries and say 'no' to unreasonable requests?", answer: undefined},
                {question: "How often are you able to resolve uncomfortable feelings instead of bottling them up?" , answer: undefined},
                {question: "How often do you challenge your negative thinking and look for healthier ways of thinking?" , answer: undefined},
                {question: "How often do you avoid high-risk situations, such as HALT (hungry, angry, lonely, tired) and high-risk people, places, and things?" , answer: undefined},
                {question: "How often do you “play the tape through” when you have cravings?" , answer: undefined},
                {question: "How often do you do something to distract yourself when you have cravings?" , answer: undefined},
                {question: "Have you gotten rid of all the people and things that you used to use with?" , answer: undefined, isYesOrNoQuestion: true},
                {question: "Do you have at least 3 strategies for dealing with social settings where drinking or using is involved?" , answer: undefined, isYesOrNoQuestion:true }
            ]
        },
        {
            principle: "2. Ask for help and develop a recovery circle of close family, friends, health professionals, and recovery groups.", 
            questions: [
                {question: "In the last month, how many weeks have you gone to a recovery group at least twice?", answer: undefined},
                {question: "How many days a week do you communicate with a recovery sponsor?" , answer: undefined},
                {question: "When a situation arises that can affect your recovery, how often do you ask for advice before you take action?" , answer: undefined},
                {question: "When you have cravings, how often do you reach out and communicate with someone in your recovery circle?" , answer: undefined},
                {question: "How many weeks in the last month have you done recovery homework, such as, step work?" , answer: undefined},
                {question: "Have you made any new recovery friends?" , answer: undefined, isYesOrNoQuestion: true},
            ]
        },
        {
            principle: "3. Be completely honest with yourself and everyone in your recovery circle.", 
            questions: [
                {question: "How often are you completely honest and don’t omit any important facts with people in your recovery circle?", answer: undefined},
                {question: "During the last month, were you ever so honest, when you were sharing, that you felt a little uncomfortable?" , answer: undefined, isYesOrNoQuestion: true}
            ]
        },
        {
            principle: "4. Practice self-care.", 
            questions: [
                {question: "How often do you practice healthy eating and sleeping habits?", answer: undefined},
                {question: "How many days a week do you practice some form of mind-body relaxation?" , answer: undefined},
                {question: "How often do you celebrate your small victories?" , answer: undefined},
                {question: "How many weeks in the last month have you had some fun in a clean and sober environment?" , answer: undefined},
                {question: "How many days a week do you write a gratitude list about your recovery, your life, and the people in it?" , answer: undefined},
                {question: "How often do you feel that you are a good person and that you like yourself?" , answer: undefined},

            ]
        },
        {
            principle: "5. Don’t bend the rules or try to negotiate your recovery.", 
            questions: [
                {question: "How much of the time do you accept that if you start using alcohol or drugs, you won’t always be able to control your use?", answer: undefined},
                {question: "How many days a week are you free of “using daydreams”?" , answer: undefined},
                {question: "Have you completely let go of all secret relapse fantasies, and have you shared the details of those secret plans with someone in your recovery circle?" , answer: undefined, isYesOrNoQuestion: true}
            ]
        }
    ]);

    const updateAnswer = (questionWithNewAnswer, newAnswer) => {
        let newQuestions = [...questions];
        newQuestions.map(item => {
            let found = item.questions.find(x => x.question === questionWithNewAnswer);
            if (found !== undefined) {
                found.answer = newAnswer;
            }
        });
        setQuestions(newQuestions);
    }
    
    const [score, setScore] = useState(0);

    useEffect(() => {
        setScore(questions.map(item => {
            return item.questions.reduce((total, currentQuestion) => 
            ((typeof currentQuestion.answer !== 'undefined') ? total + currentQuestion.answer : total + 0), 
            0);
        }).reduce((total, item) => (total + item), 0));
    }, [questions])

    return (
        <div className="RapidEvaluator">
            <Introduction />
            <table className="table table-bordered">
                {questions.map((item) => 
                    <tbody key={item.principle}>
                        <Principle principle={item.principle}/>
                        {
                            item.questions.map((question) =>
                                <Question key={question.question} question={question} updateAnswer={updateAnswer} />
                            )
                        }
                    </tbody>               
                )}
                <TableFooter score={score} />
            </table>
            <Results score={score} />
        </div>
    );
}

export default RapidEvaluator;