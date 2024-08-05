const SectionHeading = ({heading, subHeading}) => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center text-black">
        <span className="border-indigo-500 border-b-2">{heading}</span>
      </h2>
      <p className="font-semibold text-gray-600 text-center text-lg mt-5">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
