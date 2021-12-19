export default function PartnersList({ children }) {
  return (
    <ul
      className="grid grid-cols-2 gap-x-12 gap-y-3 md:grid-cols-6 lg:grid-cols-5"
      role="list"
    >
      {children}
    </ul>
  );
}
