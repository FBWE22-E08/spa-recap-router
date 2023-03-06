import { NoteContext } from "../../contexts/NoteContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

// import CSS module
import styles from "./NoteList.module.css";

export default function NoteList() {
  const { notes } = useContext(NoteContext);

  return (
    <div className={styles.container}>
      <ol>
        {notes.map((note) => (
          <li>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
