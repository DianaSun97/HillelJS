import "./App.css";

import { useContext, useState } from "react";
import WSProvider from "./providers/wsProvider";
import { wsContext } from "./providers/wsContext";

const WsDemo = () => {
  const wsCtx = useContext(wsContext);
  const [message, setMessage] = useState();

  const sendMessageHandler = () => {
    wsCtx.sendMessage(message);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    return message;
  };



  return (
    <>
      <input
        type="text"
        placeholder="Введите сообщение"
        onChange={handleChange} />
      <button onClick={sendMessageHandler}>Send</button>
      {wsCtx.messages.map((msg, index) => (
        <p key={`msg-${index}`}>{msg.message}</p>
      ))}
    </>
  );
};

const App = () => (
  <WSProvider>
    <WsDemo />
  </WSProvider>
);

export default App;
