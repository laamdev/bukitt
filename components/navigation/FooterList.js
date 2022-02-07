export default function FooterList({ children }) {
  return (
    <ul
      role="list"
      className="mt-3 flex flex-col justify-between space-y-6 lg:mt-6"
    >
      {children}
    </ul>
  );
}
