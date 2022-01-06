export default function DetailsWrapper({ children }) {
  return (
    <div className="flex flex-col items-center border-b border-gray-300 sm:border-0 sm:border-r p-6 text-center">
      {children}
    </div>
  );
}
