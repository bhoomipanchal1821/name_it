import "./SearchBox.css";

const SearchBox = ({onInputChange}) => {
  return (
    <div>
      <form>
        <div className="row d-flex justify-content-center mt-5 ms-5">
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control pt-2 ps-3 fs-5 border-0"
              placeholder="Type KeyWord"
              onChange={(event) => onInputChange(event.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
