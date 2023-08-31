export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="firstName">
        Find contact by name
        <input name="name" value={value} onChange={onChange} />
      </label>
    </>
  );
};
