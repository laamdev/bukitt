export default function Grid3x2x({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12"
    >
      {children}
    </ul>
  );
}
