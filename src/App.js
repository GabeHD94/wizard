import React, { useState } from 'react';
import './App.css';

export default function App() {

  const questions = [
    {
      questionText: "Is the account data entry?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true, jumpToQuestion: 6},
      ],
      notes: [
      ],
    },
    {
      questionText: "Is this customer 1 or 2?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true, jumpToQuestion: 7},
      ],
      notes: [
      ],
    },
    {
      questionText: "Is it someone with a Power of Attorney or Conservatorship for the Customer?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true , jumpToQuestion: 7},
      ],
      notes: [
      ],
    },
    {
      questionText: "Is it someone with a signed 'Name Add Form' on file?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true, jumpToQuestion: 7},
      ],
      notes: [
      ],
    },
    {
      questionText: "Is it someone who is verbally authorized by a verified account holder to speak with Alder?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true , jumpToQuestion: 7},
      ],
      notes: [
      ],
    },
    { //this is answer number 5
      questionText: "VERIFIED",
      answerOptions: [
      ],
      notes: [
      ],
    },
    { //this is an answer. number 6
      questionText: "You can tell the customer their verbal password.",
      answerOptions: [
      ],
      notes: [
      ],
    },
    {
      questionText: "Does the customer know his/her verbal password?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true, jumpToQuestion: 5},
      ],
      notes: [
      ],
    },
    {
      questionText: "Does the customer know his/her master code?",
      answerOptions: [
        {answerText: "No", isCorrect: false},
        {answerText: "Yes", isCorrect: true},
      ],
      notes: [
      ],
    },
    {
      questionText: "In order to send the verbal password via email or mail, the person on the phone must verify 2 of the following.",
      answerOptions: [
      ],
      notes: [
        {note: "The Master Code"},
        {note: "The last four of their SSN"},
        {note: "The last four of the card/account number on file"},
        {note: "The RMR price"},
        {note: "The birth date of the account holder."},
      ],
    },
    
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButton = (jumpToQuestion) => {
    const nextQuestion = jumpToQuestion || currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  return (  
    <div className="App">


      <h2>{questions[currentQuestion].questionText}</h2>
      
      <div className="answerSection">
        {questions[currentQuestion].answerOptions.map((answerOption)=> (
            <button onClick={ () => {handleAnswerButton(answerOption.jumpToQuestion)}}>{answerOption.answerText}</button>
        ))}
      </div>
      <div className="notesContainer">
            {questions[currentQuestion].notes.map((notePoints)=> (  
      <ul>{notePoints.note}</ul>
      ))}
      </div>
    </div>
  );
}

