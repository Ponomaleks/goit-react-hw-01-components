// import './App.css';

import Profile from './components/Social-profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/Friend-list/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/Transaction-history/TransactionHistory';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Profile {...user} />
      <div className="App">
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
