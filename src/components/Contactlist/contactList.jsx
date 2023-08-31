export const ContactList = ({ onValues, onDelete }) => {
  return (
    <>
      {onValues.map(value => (
        <li key={value.id}>
          <p> {value.name} </p>
          <p> {value.number} </p>
          <button
            type="button"
            name="delete"
            onClick={() => onDelete(value.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
