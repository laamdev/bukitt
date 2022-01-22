export default function Body({ children, passedClassName }) {
  return (
    <p className={`prose prose-neutral text-lg sm:text-2xl ${passedClassName}`}>
      {children}
    </p>
  );
}
