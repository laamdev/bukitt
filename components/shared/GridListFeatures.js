export default function GridListFeatures({ children }) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 tw-grid-gap"
    >
      {children}
    </ul>
  );
}
