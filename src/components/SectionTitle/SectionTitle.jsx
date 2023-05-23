const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="my-8 w-4/12 text-center mx-auto">
      <h3 className="text-yellow-600 italic pb-3">--- {subtitle} ---</h3>
      <p className="text-3xl uppercase border-y-4 py-4">{title}</p>
    </div>
  );
};

export default SectionTitle;
