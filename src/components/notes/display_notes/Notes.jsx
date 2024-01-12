import React, { useEffect, useRef } from "react";
import AddNotesContainer from "../add_notes/AddNotesContainer";
import "./notes.css";
import Bricks from "bricks.js";
import pin from "../../../assets/images/pin.svg";
import Loader from "../../../base/loader/Loader";
import ColorPalette from "../../../base/color_palette/ColorPalette";
import heart from "../../../assets/images/heart.svg";
import { Popover } from "antd";
import { useSelector } from "react-redux";

const Notes = ({
  notes,
  handlePinnedNotes,
  isLoading,
  handleDelete,
  handleUnPinnedNotes,
  handleCopy,
  handleOpenNote,
  openPalette,
  initData,
  userId,
  setOpenPalette,
  handleAddToFavourites,
  handleRemoveFromFavourites,
  handleDrawSketch,
}) => {
  const mainContainerRef = useRef(null);
  const noteElRefs = useRef([]);
  const noteImages = useSelector((state) => state.note.noteImages);

  useEffect(() => {
    const sizes = [
      { columns: 1, gutter: 10 },
      { mq: "768px", columns: 2, gutter: 15 },
      { mq: "1024px", columns: 4, gutter: 10 },
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

  const content = (id) => {
    return (
      <>
        <div className="popover__content" onClick={() => handleDrawSketch(id)}>
          <p>Add Drawing</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="display__notes__container">
        <AddNotesContainer />

        <div ref={mainContainerRef} className="display__notes__ref">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {notes?.map((item, idx) => (
                <div
                  ref={(el) => (noteElRefs.current[idx] = el)}
                  key={item?._id}
                  style={{ backgroundColor: `${item?.color}` }}
                  className="display__notes"
                >
                  {item?.imageData && (
                    <div className="notes__image">
                      <img
                        src={noteImages[item?._id]}
                        alt="..."
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div
                    className="notes__content__display"
                    key={item?.id}
                    ref={(el) => (noteElRefs.current[idx] = el)}
                  >
                    <div className="display__notes__title">
                      <div className="notes__title">{item?.title}</div>
                      <div>
                        {item?.isPinned ? (
                          <img
                            onClick={() => handleUnPinnedNotes(item?._id)}
                            src={pin}
                            alt="..."
                            loading="lazy"
                          />
                        ) : (
                          <span
                            onClick={() => handlePinnedNotes(item?._id)}
                            class="material-symbols-outlined"
                          >
                            push_pin
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="display__notes__content__container">
                      <div
                        className="display__notes__content"
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                    </div>

                    <div className="display__notes__icons">
                      <span
                        onClick={() => handleDelete(item?._id)}
                        class="material-symbols-outlined"
                      >
                        delete
                      </span>
                      {item?.liked ? (
                        <img
                          loading="lazy"
                          src={heart}
                          alt="..."
                          onClick={() => handleRemoveFromFavourites(item?._id)}
                        />
                      ) : (
                        <span
                          onClick={() => handleAddToFavourites(item?._id)}
                          class="material-symbols-outlined"
                        >
                          favorite
                        </span>
                      )}

                      <span
                        onClick={() => handleOpenNote(item?._id)}
                        class="material-symbols-outlined"
                      >
                        palette
                      </span>
                      <span
                        onClick={() => handleCopy(item?.title, item?.content)}
                        class="material-symbols-outlined"
                      >
                        content_copy
                      </span>
                      <Popover
                        trigger="click"
                        placement="topLeft"
                        content={() => content(item?._id)}
                      >
                        <>
                          <span class="material-symbols-outlined">
                            more_vert
                          </span>
                        </>
                      </Popover>
                    </div>
                  </div>

                  {openPalette[item?._id] && (
                    <ColorPalette
                      noteId={item?._id}
                      selectedColor={item?.color}
                      initData={initData}
                      userId={userId}
                      setOpenPalette={setOpenPalette}
                    />
                  )}
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
