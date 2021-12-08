export default function List({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12"
    >
      {children}
    </ul>
  );
}
