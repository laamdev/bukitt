export default function DetailsContainer({ children }) {
  return (
    <dl className="rounded-2xl bg-gray-100 shadow-md sm:grid sm:grid-cols-4">
      {children}
    </dl>
  );
}
