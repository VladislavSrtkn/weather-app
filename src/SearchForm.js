export default function SearchForm({ value, changeHandler, submitHandler }) {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        placeholder='Search'
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      ></input>
      <button>Add city</button>
    </form>
  );
}
