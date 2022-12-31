export default function BoxHeader({ text }) {
  return (
    <div
      style={{
        borderRadius: '10px 10px 0px 0px',
        backgroundColor: '#fff',
        paddingLeft: '0.5rem',
      }}
    >
      <h3>{text}</h3>
    </div>
  );
}
