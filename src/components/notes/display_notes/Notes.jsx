import React, { useState } from "react";
import AddNotesContainer from "../add_notes/AddNotesContainer";
import { notesData } from "../../../../data";
import "./notes.css";
const Notes = () => {
  const [notes, setNotes] = useState(notesData);

  return (
    <>
      <div>
        <AddNotesContainer />

        {/* Display Notes */}
        <div className="display__notes">
          <div>
            {notes.map((item) => (
              <div key={item.id} className="display__notes__content">
                <div>{item.title}</div>
                <div>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
