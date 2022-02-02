import './App.css';
import Login from './components/Login';
import PracticeControl from './components/PracticeControl';
import PracticeDetail from './components/PracticeDetail';
import PracticeTable from './components/PracticeTable';
import PracticeTableRTKQuery from './components/PracticeTableRTKQuery';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <Profile />
      <Login />
      <PracticeTable />
      <PracticeDetail />
      <PracticeControl />
      <PracticeTableRTKQuery />
    </div>
  );
}

export default App;
