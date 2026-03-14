export default function Textarea({ label, id, register, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea
        id={id}
        className={`form-control ${error ? "is-invalid" : ""}`}
        rows={4}
        {...register(id)}
      ></textarea>

      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
}
