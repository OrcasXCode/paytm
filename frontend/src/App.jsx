import { Dashboard } from "./component/Dashboard/dashboard"
import { Send } from "./component/Send/send"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Signup } from "./component/Signup/signup";
import { Signin } from "./component/Signin/signin";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/send" element={<Send></Send>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App