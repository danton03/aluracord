function GlobalStyle() {
  return (
    <style global jsx>
      *{
        `margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;`
      }
    </style>
  );
}

function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <h1>
        Boas vindas de volta!
      </h1>
      <h2>
        Discord - Alura Matrix
      </h2>
    </div>
  )
}

export default HomePage