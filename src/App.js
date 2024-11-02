import Box from './Box';
import Title from './Title';
import RightImg from './RightImg';
import './style.css';



function App() {
  return (
    <>
      <div className="box_all">
      <RightImg />
      <div className="container">
        <Title />
        <Title />
        <Box num={3}/>
        <Box num={4}/>
        <Box num={5}/>
        <Box num={6}/>
      </div>
    </div>
    </>
  );
}

export default App;
