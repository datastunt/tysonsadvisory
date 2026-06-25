import IconItem from '@/components/IconItem'

type Props = {
  content: {
    icon: React.ReactNode;
    header: string;
    description: string;
  }[];
};

const ServiceDetails = ({ content }: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12 space-y-8">
      {content.map((ct, index) => (
        <IconItem key={index} icon={ct.icon} header={ct.header} description={ct.description} index={index} />
      ))}
    </div>
  );
};

export default ServiceDetails;
