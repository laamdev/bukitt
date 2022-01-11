export default function PostsList({ children }) {
  return (
    <ul className="grid gap-x-24 gap-y-12 grid-cols-1 lg:grid-cols-3">
      {children}
    </ul>
  );
}
