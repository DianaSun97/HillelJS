
import "./App.css";
import RecordList from "./component/recordList";
import Login from "./component/login";
import AuthProvider from "./authorization/authProvider";
import {AuthContext} from "./authorization/authContext";

function App() {
  return (
    <div className="App">
      Demo
       <AuthProvider>
            <Login />
      <RecordList />
       </AuthProvider>
    </div>
  );
}

export default App;
