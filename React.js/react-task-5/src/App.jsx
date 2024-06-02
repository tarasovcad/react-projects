import { Quiz } from './components/Quiz/Quiz';
import { jsQuizz } from './constants';
function App() {
  return (
    <>
      <h1>{jsQuizz.questions[1].question}</h1>
      {console.log(jsQuizz.questions[1].question)}
      <Quiz questions={jsQuizz.questions} />
    </>
  );
}

export default App;
