export default function Body({ children, modClass }) {
  return (
    <p
      className={`prose prose-slate text-lg sm:text-2xl ${
        modClass ? modClass : ''
      }`}
    >
      {children}
    </p>
  );
}
