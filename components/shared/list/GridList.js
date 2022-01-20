export default function GridList({ children }) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"
    >
      {children}
    </ul>
  );
}
