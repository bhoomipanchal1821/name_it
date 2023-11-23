import "./NameCard.css";

const nameUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
const NameCard = ({ suggestedName }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${nameUrl}${suggestedName}`}
      className="text-decoration-none "
    >
      <div className="d-flex justify-content-center  align-items-center mt-5 text-light ms-5">
        <div className="card col-sm-1 rounded-3">
          <div className="card-body ">
            <p>{suggestedName}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NameCard;
