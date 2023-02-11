export interface INavBar {
  sampleProp?: string;
}

const NavBar: React.FC<INavBar> = ({ sampleProp }) => {
  return (
    <nav
      style={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        height: '4rem',
      }}
    >
      {sampleProp}
    </nav>
  );
};

export default NavBar;
