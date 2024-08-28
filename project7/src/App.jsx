import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} userName="user1"/>
      <UserGreeting isLoggedIn={false} userName="user2"/>
    </>
  );
}

export default App