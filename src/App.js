import React, { useState } from 'react';
// import Q1 from "./questions/q1"
import './App.css';

export default function App() {

  const questions = [
    {
      questionText: "Is the account data entry?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true},
      ],
    },
    {
      questionText: "Is this customer 1 or 2?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true},
      ],
    },
    {
      questionText: "Is it someone with a Power of Attorney or Conservatorship for the Customer?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true},
      ],
    },
    {
      questionText: "Is it someone with a signed 'Name Add Form' on file?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true},
      ],
    },
    {
      questionText: "Is it someone who is verbally authorized by a verified account holder to speak with Alder?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true},
      ],
    },
    { //this is object number 5
      questionText: "VERIFIED",
      answerOptions: [

      ],
    },
    { //this is object number 6
      questionText: "You can tell the customer their verbal password.",
      answerOptions: [

      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButton = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  return (  
    <div className="App">
      <h1>{questions[currentQuestion].questionText}</h1>
      
      <div className="answerSection">
        {questions[currentQuestion].answerOptions.map((answerOption)=> (
        <button onClick={handleAnswerButton}>{answerOption.answerText}</button>
        ))}
      </div>
    </div>
  );
}



