export default function List({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6  lg:gap-x-12 gap-y-12"
    >
      {children}
    </ul>
  );
}
