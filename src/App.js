import UserProfile from "./pages/UserProfile";
import UsersTable from "./pages/UsersTable";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UsersTable />} />
          <Route path="/user/" element={<UserProfile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
