import PartnerCard from '@/components/home/PartnerCard';
import PartnersList from '@/components/home/PartnersList';

export default function PartnersSection({ heading, partners }) {
  return (
    <div>
      <h2 className="tw-subheading text-center">{heading}</h2>
      <PartnersList>
        {partners?.map((partner) => (
          <PartnerCard key={partner?.name} partner={partner} />
        ))}
      </PartnersList>
    </div>
  );
}
