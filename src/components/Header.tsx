import CallIcon from "@mui/icons-material/Call";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between min-h-[72px] px-5 py-5 md:px-28 md:py-6">
        <a href="/" className="flex items-center">
          <img
            src={"/src/assets/header-logo.svg"}
            alt="Logo"
            className="h-8 w-auto md:h-10"
          />
        </a>
        <button className="w-9 h-9 rounded border-secondary border flex justify-center items-center">
          <CallIcon height={36} className="text-secondary" />
        </button>
      </div>
    </header>
  );
};

export default Header;
