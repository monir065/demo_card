import { useState } from "react";
import "./index.css";

const pages = [
  {
    id: 1,
    type: "cover",
  },
  {
    id: 2,
    type: "couple",
  },
  {
    id: 3,
    type: "event",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection("next");
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setDirection("previous");
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main className="app">

      {/* =========================
          OUTER FIXED FRAME
      ========================== */}

      <div className="frame">

        {/* Decorative corners */}

        <div className="frame-corner top-left">
          ❈
        </div>

        <div className="frame-corner top-right">
          ❈
        </div>

        <div className="frame-corner bottom-left">
          ❈
        </div>

        <div className="frame-corner bottom-right">
          ❈
        </div>


        {/* =========================
            BOOK
        ========================== */}

        <div className="book">

          {/* Page shadow behind */}
          <div className="page-shadow"></div>


          {/* Current Page */}

          <div
            key={currentPage}
            className={`page ${
              direction === "next"
                ? "turn-next"
                : "turn-previous"
            }`}
          >

            {/* =====================
                PAGE 1
            ====================== */}

            {currentPage === 0 && (
              <div className="page-content cover-page">

                <div className="top-ornament">
                  ✦
                </div>

                <p className="eyebrow">
                  TOGETHER WITH THEIR FAMILIES
                </p>

                <div className="rings">
                  ♡
                </div>

                <p className="invited">
                  You are warmly invited to
                </p>

                <h1>
                  Our Wedding
                </h1>

                <div className="gold-divider">
                  <span>❦</span>
                </div>

                <p className="cover-date">
                  25 · DECEMBER · 2026
                </p>

                <p className="cover-location">
                  NAOGAON · BANGLADESH
                </p>

                <div className="bottom-ornament">
                  ❧
                </div>

              </div>
            )}


            {/* =====================
                PAGE 2
            ====================== */}

            {currentPage === 1 && (
              <div className="page-content couple-page">

                <p className="eyebrow">
                  THE HAPPY COUPLE
                </p>

                <div className="photo-placeholder">
                  <div className="photo-inner">
                    R
                    <span>♥</span>
                    K
                  </div>
                </div>

                <h2>
                  Rahim
                </h2>

                <div className="ampersand">
                  &
                </div>

                <h2>
                  Karima
                </h2>

                <div className="gold-divider">
                  <span>❦</span>
                </div>

                <p className="love-text">
                  Two hearts, one beautiful journey,
                  and a lifetime of love ahead.
                </p>

                <p className="family-text">
                  With the blessings of our families
                </p>

              </div>
            )}


            {/* =====================
                PAGE 3
            ====================== */}

            {currentPage === 2 && (
              <div className="page-content event-page">

                <p className="eyebrow">
                  JOIN US FOR
                </p>

                <h2>
                  Wedding Ceremony
                </h2>

                <div className="flower">
                  ❀
                </div>

                <div className="event-list">

                  <div className="event-item">
                    <span>DATE</span>
                    <strong>
                      25 December 2026
                    </strong>
                  </div>

                  <div className="event-item">
                    <span>TIME</span>
                    <strong>
                      07:00 PM
                    </strong>
                  </div>

                  <div className="event-item">
                    <span>VENUE</span>
                    <strong>
                      Royal Community Center
                    </strong>

                    <small>
                      Naogaon, Bangladesh
                    </small>
                  </div>

                </div>

                <button className="location-btn">
                  <span>⌖</span>
                  View Location
                </button>

              </div>
            )}

          </div>

        </div>


        {/* =========================
            NAVIGATION
        ========================== */}

        <div className="navigation">

          <button
            className="nav-button"
            onClick={previousPage}
            disabled={currentPage === 0}
          >
            ←
          </button>


          <div className="page-info">

            <span className="page-number">
              {String(currentPage + 1).padStart(2, "0")}
            </span>

            <div className="dots">

              {pages.map((page, index) => (
                <span
                  key={page.id}
                  className={
                    index === currentPage
                      ? "dot active"
                      : "dot"
                  }
                />
              ))}

            </div>

            <span className="page-total">
              {String(pages.length).padStart(2, "0")}
            </span>

          </div>


          <button
            className="nav-button"
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
          >
            →
          </button>

        </div>

      </div>

    </main>
  );
}

export default App;