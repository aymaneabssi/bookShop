import './App.css';
//components
import WarningSign from './components/WarningSign';
import Badge from './components/Badge';

function App() {
  return (
    <div className='App'>
      <WarningSign variant='danger' text='this is coming from a prop' />
      <Badge color='primary' text='prop badge' />
    </div>
  );
}

export default App;
