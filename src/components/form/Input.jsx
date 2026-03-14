export default function Input({ label, id, type = "text", register, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        id={id}
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        {...register(id)}
      />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
}
