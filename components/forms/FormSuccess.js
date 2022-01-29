export default function FormSuccess({ children }) {
  return (
    <span role="alert" className="text-green-500 text-xs leading-3">
      ✅ {children}
    </span>
  );
}
