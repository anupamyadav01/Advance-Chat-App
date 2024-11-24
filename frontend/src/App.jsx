import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));
const Chat = lazy(() => import("./pages/Chat/Chat.jsx"));
const GroupChat = lazy(() => import("./pages/GroupChat/GroupChat.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat/:charId" element={<Chat />} />
        <Route path="/groupchar" element={<GroupChat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
