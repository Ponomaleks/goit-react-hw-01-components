// import './App.css';

import Profile from './components/Social-profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

function App() {
  return (
    <>
      <Profile {...user} />
      <div className="App">
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
    </>
  );
}

export default App;
