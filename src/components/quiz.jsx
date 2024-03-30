import React, {useState, Suspense} from 'react'
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { react_basic } from '../base';
import go_back from '../assets/go_back.png';
import 'react-toastify/dist/ReactToastify.css';
function Quiz() {
  const gg = useParams();
    const [quizCount, setQuizCount] = useState(0);
        const [lastEl, setLastEl] = useState(false);
        const [score, setScore] = useState(0);
        const quiz = react_basic[Number(gg.quizName)].gg[quizCount];
        const quiz_length = react_basic[Number(gg.quizName)].gg.length;
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
          if(id === quiz_length) {
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
              <p>{quizCount+1}/{quiz_length} {quiz.title}</p>
              <ul>
              {gg.quizName && quiz.questions.map(item => (
                <li key={item.question} onClick={() => onNextQuestion(quiz.id, item.answer)}>
                  {item.question}
                </li>
              ))}
              </ul>
              </div>
            </Suspense>}
            {lastEl === true && <div className='score_block'>
              <Link to='/Know-It-All'><img src={go_back} alt="" /></Link>
              your Score {score}/{quiz_length}
              </div>}
              <ToastContainer />
          </>
        )
}
export default Quiz
