import {BrowserRouter, Routes, Route} from 'react-router-dom';
import JoinQuiz from "./components/JoinQuiz";
import Quiz from "./components/Quiz";

const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JoinQuiz/>} />
        <Route path='/quiz' element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
