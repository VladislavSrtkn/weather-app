export default function BoxBody({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        margin: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        borderRadius: '10px',
        color: '#fff',
        backgroundColor: '#2469ce',
        boxShadow: 'rgb(205 205 205) -4px 2px 3px 0px',
      }}
    >
      {children}
    </div>
  );
}
