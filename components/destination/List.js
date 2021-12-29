export default function List({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-12"
    >
      {children}
    </ul>
  );
}
