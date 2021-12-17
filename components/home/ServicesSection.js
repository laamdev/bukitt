import ServicesCard from '@/components/home/ServicesCard';

export default function ServicesSection({
  heading,
  experiencesCard,
  tailoredCard,
}) {
  return (
    <section className="max-w-3xl mx-auto space-y-6 sm:space-y-12">
      <div className="tw-subheading text-center">{heading}</div>

      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
        <ServicesCard
          title={experiencesCard?.title}
          imageUrl={experiencesCard?.image}
          btnLinkText={experiencesCard?.callToAction?.linkText}
          btnUrl={experiencesCard?.callToAction?.url}
        />
        <ServicesCard
          title={tailoredCard?.title}
          imageUrl={tailoredCard?.image}
          btnLinkText={tailoredCard?.callToAction?.linkText}
          btnUrl={tailoredCard?.callToAction?.url}
        />
      </div>
    </section>
  );
}
