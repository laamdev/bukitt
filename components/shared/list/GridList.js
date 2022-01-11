export default function GridList({ children }) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-32 gap-y-12 sm:gap-y-14 lg:gap-y-16"
    >
      {children}
    </ul>
  );
}
