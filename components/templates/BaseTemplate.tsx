export interface IBaseTemplate {
  sampleProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleProp }) => {
  return <div className="tailwind">{sampleProp}</div>;
};

export default BaseTemplate;
