export default function List({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-24 gap-y-12 sm:gap-y-24">
      {children}
    </div>
  );
}
