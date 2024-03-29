import React, { useEffect, useRef } from "react";
import "./favourite.css";
import Bricks from "bricks.js";
import Loader from "../../../base/loader/Loader";
import { useSelector } from "react-redux";

const DisplayFavourite = ({ notes, isLoading }) => {
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

  return (
    <>
      <div className="display__notes__container">
        <div ref={mainContainerRef} className="display__notes__ref">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {notes?.length > 0 ? (
                notes.map((item, idx) => (
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
                      key={item?.id}
                      ref={(el) => (noteElRefs.current[idx] = el)}
                      className="notes__content__display"
                    >
                      <div className="display__notes__title">
                        <div className="notes__title">{item?.title}</div>
                      </div>

                      <div className="display__notes__content__container">
                        <div
                          className="display__notes__content"
                          dangerouslySetInnerHTML={{
                            __html: item?.content,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="favourite__message">
                  Add to view liked Notes
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayFavourite;
