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
        backgroundColor: '#02539d',
      }}
    >
      {children}
    </div>
  );
}
