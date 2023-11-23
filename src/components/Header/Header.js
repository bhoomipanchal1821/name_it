import "./Header.css";

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="text-center">
      <img
        src="./images/logo.png"
        alt="logo"
        className={`mt-5 ${
          headerExpanded ? "head-img-expand" : "head-img-contracted "
        }`}
      />
      <div
        className={`fs-1 fw-bold flex-column ${
          headerExpanded ? "head-text-expand" : "head-text-contracted "
        }`}
      >
        {headTitle}
      </div>
    </div>
  );
};

export default Header;
