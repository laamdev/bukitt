export default function ListGrid({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12"
    >
      {children}
    </ul>
  );
}
