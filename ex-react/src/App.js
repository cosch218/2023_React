import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import LoginComp from './components/LoginComp';
import TestRefClass from './components/TestRefClass';
import MemoComp from './components/MemoComp';
import ArrowStatePractice from './components/ArrowStatePractice';
import ReactTestComp from './components/ReactTestComp';
import ToDoListComp from './components/ToDoListComp';

function App() {
  return (
    <div className="App">
      {/* props를 사용하는 클래스 컴포넌트 */}
      <PropsComp color="blue">props 값을 받아와서 글자 색을 바꿉니다</PropsComp>
      {/* state를 사용하는 클래스 컴포넌트 
      => 버튼을 클릭할 때마다 10씩 증가하는 컴포넌트 */}
      <CountComp />
      {/* props와 state를 사용하는 클래스 컴포넌트
      => props의 num 값을 가져와서 버튼을 클릭할 때마다 num씩 증가 */}
      <CountPropsComp num={5} />
      <LoginComp />
      <TestRefClass />
      <MemoComp />
      <hr />
      <ArrowStatePractice />
      <ReactTestComp num={20} />
      <ToDoListComp />
    </div>
  );
}

export default App;
