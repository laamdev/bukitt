export default function SectionContainer({ children, heading }) {
  return (
    <section className="space-y-12 sm:space-y-12 lg:space-y-16">
      {children}
    </section>
  );
}
