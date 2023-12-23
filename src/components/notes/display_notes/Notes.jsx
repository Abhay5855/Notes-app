import React, { useEffect, useRef } from "react";
import AddNotesContainer from "../add_notes/AddNotesContainer";
import { notesData } from "../../../../data";
import "./notes.css";
import Bricks from "bricks.js";
import { getNotes } from "../../../api/api";
import { set } from "lodash";
const Notes = ({notes}) => {

  const mainContainerRef = useRef(null);
  const noteElRefs = useRef([]);

  useEffect(() => {
    const sizes = [
      { columns: 1, gutter: 10 },
      { mq: "768px", columns: 2, gutter: 15 },
      { mq: "1024px", columns: 3, gutter: 20 },
      { mq: "1440px", columns: 4, gutter: 40 },
      { mq: "1500px", columns: 5, gutter: 10 },
      { mq: "1600px", columns: 5, gutter: 30 },
      { mq: "1800px", columns: 6, gutter: 10 },
      { mq: "1900px", columns: 6, gutter: 20 },
      { mq: "2560px", columns: 8, gutter: 40 },
    ];

    const buildMasonry = () => {
      const instance = Bricks({
        container: mainContainerRef.current,
        packed: "data-packed",
        sizes: sizes,
        position: false,
      });

      instance.pack();
    };

    // Initial build
    buildMasonry();

    // Event listener for window resize
    window.addEventListener("resize", buildMasonry);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", buildMasonry);
    };
  }, [notes]); // Re-run on notes change

  return (
    <>
      <div className="display__notes__container">
        <AddNotesContainer />

        {/* Display Notes */}
        <div ref={mainContainerRef} className="display__notes">
          {notes?.map((item, idx) => (
            <>
            <div
              ref={(el) => (noteElRefs.current[idx] = el)}
              key={item?._id}
              className="display__notes__content"
            >
              <div className="display__notes__title">{item?.title}</div>
              <div
      dangerouslySetInnerHTML={{__html: item?.content}}
    />
            </div>

            <p>Edit</p>
            </>
            

          ))}
          
        </div>
        
      </div>
    </>
  );
};

export default Notes;
