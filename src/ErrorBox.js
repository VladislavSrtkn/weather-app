export default function ErrorBox({ errorText }) {
  return (
    <div style={{ padding: '1rem' }}>
      <h4>Ooops! Something went wrong :(</h4>
      <p>{errorText}</p>
      <p>
        Please make sure you have no problems with your internet connection and try again later.
      </p>
    </div>
  );
}
