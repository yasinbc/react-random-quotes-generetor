import "./App.css";
import React from "react";

function App() {
  const [apiData, setApiData] = React.useState(() => []);

  const quotesApi = async () => {
    try {
      const request = await fetch("https://type.fit/api/quotes");
      const data = await request.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    quotesApi();
  }, []);

  const [randomNumber, setRandomNumber] = React.useState(() =>
    parseInt(Math.random() * 1000)
  );

  const handleRandomNumber = () => {
    setRandomNumber(parseInt(Math.random() * 1600));
  };

  return (
    <div className="container p-5" id="quote-box">
      <div className="d-grid gap-2" id="new-quote">
        <div id="text">
          {apiData.map((item, index) => (
            <div key={index}>
              {index === randomNumber ? (
                <div key={item} className="quote-container">
                  <div className="quote-container__text">
                    <h1>{item.text}</h1>
                    <br />
                  </div>
                  <div className="quote-container__author">
                    <h4>{item.author ? item.author : "Unknown"}</h4>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div id="author"></div>
      </div>
      <button
        onClick={() => handleRandomNumber()}
        className="btn-primary rounded mt-5 btn pull-right"
        id="button"
      >
        Next quote
      </button>

      <a
        href="twitter.com/intent/tweet"
        target="_BLANK"
        className="tweet-quote"
        id="tweet-quote"
      >
        <div data-icon="ei-sc-twitter" data-size="l"></div>
      </a>

      <p className="mt-2 text-center">By Yasin B.C.</p>
    </div>
  );
}

export default App;
