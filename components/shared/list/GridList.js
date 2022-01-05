export default function GridList({ children }) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 xl:gap-x-8 gap-y-16"
    >
      {children}
    </ul>
  );
}
