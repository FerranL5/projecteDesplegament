export default function ErrorMessage({ error }) {
  if (!error) return null;
  return <div className="invalid-feedback d-block">{error.message}</div>;
}
