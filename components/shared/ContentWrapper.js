export default function ContentWrapper({ children }) {
  return (
    <div className="relative -mt-32 z-20">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 space-y-12 sm:space-y-24">
          {children}
        </div>
      </div>
    </div>
  );
}
