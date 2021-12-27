export default function ContentWrapper({ children }) {
  return (
    <div className="relative -mt-32 z-20">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded shadow px-5 sm:px-6 py-6 sm:py-12 space-y-12 sm:space-y-36">
          {children}
        </div>
      </div>
    </div>
  );
}
