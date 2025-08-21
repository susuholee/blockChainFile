import LoginButton from "./Components/atoms/LoginButton";
import Order from "./Components/atoms/Order";
import UserInfo from "./Components/atoms/UserInfo";
import LogoutButton from "./Components/LogoutButton";


function App() {
  return (
    <div className="App">
      <UserInfo />
      <LoginButton />
      <LogoutButton />
      <Order />
    </div>
  );
}

export default App;
