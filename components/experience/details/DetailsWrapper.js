export default function DetailsWrapper({ children }) {
  return (
    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
      {children}
    </div>
  );
}
