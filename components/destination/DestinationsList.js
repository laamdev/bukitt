export default function DestinationsList({ children }) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-12"
    >
      {children}
    </ul>
  );
}
