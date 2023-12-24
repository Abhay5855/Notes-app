import React, { useEffect, useRef } from "react";
import AddNotesContainer from "../add_notes/AddNotesContainer";
import "./notes.css";
import Bricks from "bricks.js";
import pin from "../../../assets/images/pin.svg";
import Loader from "../../../base/loader/Loader";

const Notes = ({
  notes,
  handlePinnedNotes,
  isPinned,
  isLoading,
  handleDelete,
}) => {
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
  }, [notes]);

  return (
    <>
      <div className='display__notes__container'>
        <AddNotesContainer />

        <div ref={mainContainerRef} className='display__notes__ref'>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {notes?.map((item, idx) => (
                <div
                  ref={(el) => (noteElRefs.current[idx] = el)}
                  key={item?._id}
                  className='display__notes'
                >
                  <div
                    key={item?.id}
                    ref={(el) => (noteElRefs.current[idx] = el)}
                  >
                    <div className='display__notes__title'>
                      <div className='notes__title'>{item?.title}</div>
                      <div onClick={() => handlePinnedNotes()}>
                        {isPinned ? (
                          <img src={pin} alt='pin' />
                        ) : (
                          <span class='material-symbols-outlined'>
                            push_pin
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='display__notes__content__container'>
                      <div
                        className='display__notes__content'
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    </div>

                    <div className='display__notes__icons'>
                      <span
                        onClick={() => handleDelete(item?._id)}
                        class='material-symbols-outlined'
                      >
                        delete
                      </span>
                      <span class='material-symbols-outlined'>archive</span>
                      <span class='material-symbols-outlined'>palette</span>
                      <span class='material-symbols-outlined'>edit</span>
                      <span class='material-symbols-outlined'>
                        content_copy
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
