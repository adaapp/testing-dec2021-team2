import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'

// function that deals with all of this. 
function App() {
  return (
    <div style={{backgroundColor: 'white', borderRadius:  '20px', width: '50%', margin: 'auto', padding: '20px'}}>
      <Header />
      <Form />
    </div>
  );
}



export default App;
