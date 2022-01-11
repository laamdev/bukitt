import ServicesCard from '@/components/home/ServicesCard';

export default function ServicesSection({
  heading,
  experiencesCard,
  tailoredCard,
}) {
  return (
    <section className="tw-section max-w-7xl mx-auto">
      <h3 className="tw-section-heading">{heading}</h3>
      <div className="flex flex-col sm:flex-row justify-between space-x-0 lg:space-x-24 space-y-6 sm:space-y-0">
        <ServicesCard
          title={experiencesCard?.title}
          description={experiencesCard?.description}
          imageUrl={experiencesCard?.image}
          btnLinkText={experiencesCard?.callToAction?.linkText}
          btnURL={experiencesCard?.callToAction?.url}
        />
        <ServicesCard
          title={tailoredCard?.title}
          description={tailoredCard?.description}
          imageUrl={tailoredCard?.image}
          btnLinkText={tailoredCard?.callToAction?.linkText}
          btnURL={tailoredCard?.callToAction?.url}
        />
      </div>
    </section>
  );
}
