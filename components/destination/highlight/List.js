export default function List({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      {children}
    </ul>
  );
}
