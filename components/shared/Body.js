export default function Body({ children, className }) {
  return (
    <p className={`prose prose-neutral text-lg sm:text-2xl ${className}`}>
      {children}
    </p>
  );
}
