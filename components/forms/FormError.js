export default function FormError({ children }) {
  return (
    <span role="alert" className="text-red-500 text-xs leading-3">
      ❗{children}
    </span>
  );
}
