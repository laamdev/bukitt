import PartnerCard from '@/components/home/PartnerCard';
import PartnersList from '@/components/home/PartnersList';
import PartnersSlider from '@/components/home/PartnersSlider';

export default function PartnersSection({ heading, partners }) {
  return (
    <div>
      <h2 className="tw-subheading text-center">{heading}</h2>
      <PartnersSlider partners={partners} />
      {/* <PartnersList>
        {partners?.map((partner) => (
          <PartnerCard key={partner?.name} partner={partner} />
        ))}
      </PartnersList> */}
    </div>
  );
}
