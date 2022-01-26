import ServicesCard from '@/components/home/ServicesCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ServicesSection({
  heading,
  experiencesCard,
  destinationsCard,
}) {
  return (
    <section className="tw-section max-w-7xl mx-auto">
      <SectionHeading passedClassName="text-center">{heading}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-12">
        <ServicesCard
          heading={experiencesCard?.heading}
          body={experiencesCard?.body}
          image={experiencesCard?.image}
          btnLinkText={experiencesCard?.callToAction?.linkText}
          btnURL={experiencesCard?.callToAction?.url}
        />
        <ServicesCard
          heading={destinationsCard?.heading}
          body={destinationsCard?.body}
          image={destinationsCard?.image}
          btnLinkText={destinationsCard?.callToAction?.linkText}
          btnURL={destinationsCard?.callToAction?.url}
        />
      </div>
    </section>
  );
}
