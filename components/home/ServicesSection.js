import ServicesCard from '@/components/home/ServicesCard';
import SectionHeading from '@/components/shared/SectionHeading';

export default function ServicesSection({
  heading,
  experiencesCard,
  destinationsCard,
  tailoredTripsCard,
}) {
  return (
    <section className="tw-section mx-auto max-w-7xl">
      <SectionHeading className="text-center">{heading}</SectionHeading>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-0 md:gap-x-6 lg:gap-x-12">
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
        <ServicesCard
          heading={tailoredTripsCard?.heading}
          body={tailoredTripsCard?.body}
          image={tailoredTripsCard?.image}
          btnLinkText={tailoredTripsCard?.callToAction?.linkText}
          btnURL={tailoredTripsCard?.callToAction?.url}
        />
      </div>
    </section>
  );
}
