import './App.css';
import AddComment from './components/AddComment';
import DisplayComments from './components/DisplayComments';

function App() {
  return (
    <div className="App">
      <DisplayComments />
      <AddComment />
    </div>
  );
}

export default App;
