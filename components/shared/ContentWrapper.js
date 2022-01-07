export default function ContentWrapper({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto space-y-12 lg:space-y-24 mt-12 lg:mt-24 px-6 sm:px-12 lg:px-24">
      {children}
    </div>
  );
}
