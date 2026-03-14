export default function RadioGroup({ label, id, options, register, error }) {
  return (
    <div className="mb-3">
      <p className="form-label">{label}</p>

      {options.map(opt => (
        <div className="form-check" key={opt.value}>
          <input
            className={`form-check-input ${error ? "is-invalid" : ""}`}
            type="radio"
            id={`${id}-${opt.value}`}
            value={opt.value}
            {...register(id)}
          />
          <label className="form-check-label" htmlFor={`${id}-${opt.value}`}>
            {opt.label}
          </label>
        </div>
      ))}

      {error && <div className="invalid-feedback d-block">{error.message}</div>}
    </div>
  );
}
