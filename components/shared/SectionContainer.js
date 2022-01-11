export default function SectionContainer({ children, modClass }) {
  return (
    <section className={`py-24 ${modClass ? modClass : ''}`}>
      {children}
    </section>
  );
}
