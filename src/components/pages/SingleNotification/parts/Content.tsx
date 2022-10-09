import Text from "../elements/Text";

interface IProps {
  text: string;
}

const Content: React.FC<IProps> = ({ text }) => {
  return <Text text={text} />;
};

export default Content;
