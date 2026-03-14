export default function Checkbox({ label, id, register }) {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        {...register(id)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
