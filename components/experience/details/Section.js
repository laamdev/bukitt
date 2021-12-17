export default function Section({ children }) {
  return (
    <section className="flex flex-col space-y-12 sm:flex-row sm:space-y-0 sm:justify-evenly">
      {children}
    </section>
  );
}
