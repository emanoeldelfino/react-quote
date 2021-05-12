import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import { getQuote } from "./service/requests";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote(setQuote);
  }, []);

  console.log(quote);

  return (
    <div className="main">
      <h1>Quotes</h1>
      {quote ? <Quote text={quote.content} author={quote.author} /> : <h1>Quote not found.</h1>}
    </div>
  );
}

export default App;
