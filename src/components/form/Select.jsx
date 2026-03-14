export default function Select({ label, id, options, register, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <select
        id={id}
        className={`form-select ${error ? "is-invalid" : ""}`}
        {...register(id)}
      >
        <option value="">-- Selecciona una categoria --</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
}
