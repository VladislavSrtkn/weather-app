export default function BoxHeader({ text }) {
  return (
    <div
      style={{
        borderRadius: '10px 10px 0px 0px',
        backgroundColor: '#2d39596b',
        paddingLeft: '0.5rem',
      }}
    >
      <h3 style={{ fontSize: '1rem' }}>{text}</h3>
    </div>
  );
}
