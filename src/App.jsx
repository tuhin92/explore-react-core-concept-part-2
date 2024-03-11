import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  
  // normal function for button 1
  function handleClick(){
    alert('button clicked');
  }

  // arrow function for button 2
  const handleClick2 = () =>{
    alert('button-2 clicked')
  }
  return (
    <>
      <h3>React core concepts 2</h3>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>

      {/* use function directly in button  */}
      <button onClick={()=>{alert('button-3 clicked')}}>Button 3</button>
    </>
  )
}

export default App
