export default function DetailsWrapper({ children, className }) {
  return (
    <div
      className={`flex flex-col border-slate-200 p-6 text-center ${className}`}
    >
      {children}
    </div>
  );
}
