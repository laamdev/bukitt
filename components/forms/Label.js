export default function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block tw-form-label">
      {children}
    </label>
  );
}
