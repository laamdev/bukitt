export default function PartnersList({ children }) {
  return (
    <ul
      className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"
      role="list"
    >
      {children}
    </ul>
  );
}
