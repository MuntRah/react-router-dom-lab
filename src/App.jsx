import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";

const initialState = [
  { _id: 1, boxSize: "Small", boxHolder: "Alex" },
  { _id: 2, boxSize: "Medium", boxHolder: "Jordan" },
  { _id: 3, boxSize: "Large", boxHolder: "Taylor" },
];

const App = () => {
  const [mailbox, setMailBox] = useState(initialState);

  const addMailbox = (newMailbox) => {
    const newId = mailbox.length ? mailbox[mailbox.length - 1]._id + 1 : 1;
    newMailbox._id = newId; 
    setMailBox([...mailbox, newMailbox]);
  };

  return (
    <>
      <h1>MailBox</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>box offset</h1>}/>
        <Route
          path="/mailbox/:mailboxId"
          element={<MailboxDetails mailbox={mailbox} />}
        />
        <Route
          path="/mailbox/new"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route path="/mailbox" element={<MailboxList mailbox={mailbox}/>} />
      </Routes>
    </>
  );
};

export default App;
