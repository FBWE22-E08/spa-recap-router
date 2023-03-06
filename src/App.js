import mockData from "./MOCK_DATA";

import { useState } from "react";
import { NoteContext } from "./contexts/NoteContext";
import { ActiveNote } from "./contexts/ActiveNote";

import NoteList from "./components/NoteList/NoteList";
import NoteView from "./components/NoteView/NoteView";

import styles from "./App.module.css";
import Impressum from "./components/Impressum/Impressum";
import DeletedNotes from "./components/DeletedNotes/DeletedNotes";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [notes, setNotes] = useState(mockData);
  const [activeNote, setActiveNote] = useState({
    id: "",
    title: "",
    body: "",
  });

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <ActiveNote.Provider value={{ activeNote, setActiveNote }}>
        <div>
          <h1>Notey - the notetaking application!</h1>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/impressum">Impressum</Link>
              </li>
              <li>
                <Link to="/deleted">Deleted</Link>
              </li>
            </ul>
            <Routes>
              <Route
                path="/"
                element={
                  <div className={styles.container}>
                    <NoteList />
                    <NoteView />
                  </div>
                }
              />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/deleted" element={<DeletedNotes />} />
              <Route
                path="/note/:noteId"
                element={
                  <div className={styles.container}>
                    <NoteList />
                    <NoteView />
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </ActiveNote.Provider>
    </NoteContext.Provider>
  );
}

export default App;
