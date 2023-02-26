export interface INavBar {
  sampleProp?: string;
}

const NavBar: React.FC<INavBar> = ({ sampleProp }) => {
  return (
    <nav className="flex w-full items-center justify-between bg-slate-900 py-2 px-4 text-white">
      {sampleProp}
    </nav>
  );
};

export default NavBar;
