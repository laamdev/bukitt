export default function SectionContent({ children, modClass }) {
  return (
    <div className={`max-w-7xl mx-auto ${modClass ? modClass : ''}`}>
      {children}
    </div>
  );
}
