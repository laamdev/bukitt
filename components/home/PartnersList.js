export default function PartnersList({ children }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12"
    >
      {children}
    </ul>
  );
}
