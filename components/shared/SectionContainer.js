export default function SectionContainer({ children, heading }) {
  return (
    <section className="space-y-6 sm:space-y-12">
      <h3 className="text-xl sm:text-2xl lg:text-5xl font-bold text-center">
        {heading}
      </h3>
      {children}
    </section>
  );
}
