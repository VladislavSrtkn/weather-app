export default function ConditionString({ icon, text, value }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '1rem',
      }}
    >
      <span>
        {icon} {text}
      </span>
      {value}
    </div>
  );
}
