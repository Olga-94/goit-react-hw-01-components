import user from "./data/User.json";
import Profile from "./components/Profile/Profile";
import friends from "./data/Friend-list.json";
import FriendList from "./components/Friends/FriendList";
import statisticalData from "./data/Statistical-data.json";
import Statistics from "./components/Statistics/Statistics";
import transactions from "./data/Transactions.json";
import Transactions from "./components/Transactions/Transactions";

const App = () => (
  <div>
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>

    <div>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div>

    <div>
      <FriendList friends={friends} />
    </div>

    <div>
      <Transactions items={transactions} />
    </div>
  </div>
);

export default App;
