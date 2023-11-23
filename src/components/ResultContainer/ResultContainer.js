import NameCard from "../NameCard/NameCard";

const ResultContainer = ({ suggestedNames }) => {
  const suggestNameJsx = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName}/>
  });
  return <div className="text-center fs-4 mt-5">{suggestNameJsx}</div>;
};

export default ResultContainer;
