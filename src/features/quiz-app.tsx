import { useState } from "react";

const QuizzApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questionsData = [
    {
      question:
        "U drugoj polovici devetog stoljeća Hrvati rade prvi pravi iskorak prema Jadranskom moru. U tom periodu strah su i trepet svim trgovcima koji plove uz istočnu obalu Jadrana. Kolika je snaga njihove mornarice pokazuju 871. godine, kad pomažu, jakom flotom, kralju Ludoviku II da oslobodi Bari od Arapa . Koji hrvatski knez je tad bio na čelu Hrvatske, a kojeg su protivnici od milja zvali “najgori knez Slavena”?",
      options: ["Branimir", "Zvonimir", "Trpimir", "Domagoj"],
      answer: 3,
    },
    {
      question: "Koja od navedenih europskih država NIJE monarhija?",
      options: ["Danska", "Španjolska", "Finska", "Norveška"],
      answer: 2,
    },
    {
      question:
        "American idiot, Basket Case, 21 Guns, Good Riddance i Boulevard of Broken Dreams su hitovi američkog glazbenog sastava čije se ime uklapa u ovu grupu pitanja. Tko su oni?",
      options: ["Led Zeppelin", "Green Day", "Blink 182", "Sum 41"],
      answer: 1,
    },
    {
      question:
        "Jedan od najpoznatijih pojmova iz nordijske mitologije je Valhalla. Ovo je velika rajska dvorana u kojoj stoluje vrhovni bog Odin, a u njoj borave ratnici poginuli u boju. Svako jutro izlaze iz nje, i bore se međusobno. Tako vježbaju za konačnu bitku između bogova i divova. Kako se zove ta konačna bitka na kraju svijeta?",
      options: ["Niflheim", "Utgard", "Skagerrak", "Ragnarok"],
      answer: 3,
    },
    {
      question:
        "Jack Nicolson je jedan od najvećih glumaca ikad, sa mnoštvom nezaboravnih uloga. Jedna od najupeečatljivijih je uloga Jacka Torrancea, sa nenadmašnom scenom provaljivanja kroz vrata, te urlikom: Here's Johnny!. Kako se zove ovaj film, snimljen 1980. godine?",
      options: [
        "It (Ono)",
        "The Shining (Isijavanje)",
        "Psycho (Psiho)",
        "The Fog (Magla",
      ],
      answer: 1,
    },
  ];

  const handleAnswerOptionClick = (index: number) => {
    if (index === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questionsData.length}!
          </div>
        ) : (
          <>
            <div className="question__section">
              <div className="question__count">
                Question {currentQuestion + 1} / {questionsData.length}
              </div>
              <div className="question__text">
                {questionsData[currentQuestion].question}
              </div>
            </div>
            <div className="answer__section">
              {questionsData[currentQuestion].options.map((option, index) => (
                <button
                  className="button"
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizzApp;
