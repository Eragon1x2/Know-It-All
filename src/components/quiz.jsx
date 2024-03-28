import React, {useState, Suspense} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Quiz({questions}) {
    const [quizCount, setQuizCount] = useState(0);
        const [lastEl, setLastEl] = useState(false);
        const [score, setScore] = useState(0);
        const quiz = questions[quizCount];
        function onFail() {
          toast.warn('You are fail', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
        }
        function onCorrect() {
          toast.success("you're right", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
        }
        const onNextQuestion = (id, answer) => {
          if(id === questions[questions.length-1].id) {
            if(answer === false) {
              onFail();
              setLastEl(true)
              return;
            }
            else {
              setLastEl(true)
              setScore(prev => prev +=1)
              onCorrect();
              return;
            }
          }
          else {
            if(answer === false) {
              onFail();
            }
            else {
              onCorrect();
              setScore(prev => prev +=1)
            }
            setQuizCount(prev => prev +=1)
          }
        }
        return (
          <>
            {lastEl === false && <Suspense fallback={<>GG</>}>
              <div className='quiz'>
              <p>{quizCount+1}/{questions.length} {quiz.title}</p>
              <ul>
              {quiz && quiz.questions.map(item => (
                <li key={item.question} onClick={() => onNextQuestion(quiz.id, item.answer)}>
                  {item.question}
                </li>
              ))}
              </ul>
              </div>
            </Suspense>}
            {lastEl === true && <div>
              your Score {score}/{questions.length}
              </div>}
              <ToastContainer />
          </>
        )
}

export default Quiz
