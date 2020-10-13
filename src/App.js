import React, { useState } from 'react';
import './App.css';
import Logo from "./assets/alderre.png"
import { useSpring, animated } from 'react-spring'



export default function App() {

  const questions = [
    {
      questionText: "Is the account data entry?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true, jumpToQuestion: 6 },
      ],
      notes: [
      ],
    },
    {
      questionText: "Is this customer 1 or 2?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true, jumpToQuestion: 7 },
      ],
      notes: [
      ],
    },
    {
      questionText: "Is it someone with a Power of Attorney or Conservatorship for the Customer?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true, jumpToQuestion: 7 },
      ],
      notes: [
      ],
    },
    {
      questionText: "Is it someone with a signed 'Name Add Form' on file?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true, jumpToQuestion: 7 },
      ],
      notes: [
      ],
    },
    {
      questionText: "Is it someone who is verbally authorized by a verified account holder to speak with Alder?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true, jumpToQuestion: 7 },
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
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true, jumpToQuestion: 5 },
      ],
      notes: [
      ],
    },
    {
      questionText: "Does the customer know his/her master code?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true },
      ],
      notes: [
      ],
    },
    {
      questionText: "In order to send the verbal password via email or mail, the person on the phone must verify 2 of the following.",
      answerOptions: [
      ],
      notes: [
        { note: "The Master Code" },
        { note: "The last four of their SSN" },
        { note: "The last four of the card/account number on file" },
        { note: "The RMR price" },
        { note: "The birth date of the account holder." },
      ],
      addnotes: "Send Verbal Password to Email or Address already on File. We are unable to change the email or address on file before sending the verbal password letter.",
    },

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButton = (jumpToQuestion) => {
    const nextQuestion = jumpToQuestion || currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  const fade = useSpring({
    from: {
      opacity: 0, marginLeft: -500
    },
    to: {
      opacity: 1, marginLeft: 0
    }
  });


  return (

    
    <div className="App">
      <div className="appWrapper">
        <div className="headerContainer">
          <div className="alderlogo">
            <img src={Logo} alt="Logo" />
          </div>
          <div class="vl"></div>
          <h1 className="headerName">Verification Procedure</h1>
        </div>

        <animated.div className="questionAnimation" style={fade}>
        <h2>{questions[currentQuestion].questionText}</h2>
          </animated.div>

        <div className="answerSection">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={() => { handleAnswerButton(answerOption.jumpToQuestion) }}>{answerOption.answerText}</button>
            ))}
        </div>
        <div class="hl"></div>
        <div className="notesContainer">
          {questions[currentQuestion].notes.map((notePoints) => (
            <li>{notePoints.note}</li>
            ))}
          <h3>{questions[currentQuestion].addnotes}</h3>
        </div>
      </div>
    </div>
  );
}

      

