import { Dashboard } from "./component/Dashboard/dashboard"
import { Send } from "./component/Send.jsx/send"
import { Siginin } from "./component/Signin/siginin"
import { Signup } from "./component/Signup/signup"
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Siginin></Siginin>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/send" element={<Send></Send>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App