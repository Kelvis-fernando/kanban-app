interface HeaderPageProps {
  title: string;
  subtitle: string;
}

const HeaderPage = ({ title, subtitle }: HeaderPageProps) => {
  return (
    <div className="mb-10">
      <h1 className="font-black text-lg">{title}</h1>
      <h3 className="text-sm">{subtitle}</h3>
    </div>
  );
};

export default HeaderPage;
