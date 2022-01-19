export default function DetailsWrapper({ children, passedClassName }) {
  return (
    <div
      className={`flex flex-col border-neutral-200 p-6 text-center ${passedClassName}`}
    >
      {children}
    </div>
  );
}
