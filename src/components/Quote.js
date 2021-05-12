function Quote(props) {
  return (
    <div className="card">
      <h2 id="quote">{props.text}</h2>
      <h3 id="author">{props.author}</h3>
    </div>
  );
}

export default Quote;
