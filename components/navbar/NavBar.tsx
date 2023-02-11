export interface INavBar {
  sampleProp?: string;
}

const NavBar: React.FC<INavBar> = ({ sampleProp }) => {
  return <nav className="bg-black h-12 text-white">{sampleProp}</nav>;
};

export default NavBar;
