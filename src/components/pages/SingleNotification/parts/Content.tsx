import Text from "../elements/Text";

interface Props {
  text: string;
}

const Content: React.FC<Props> = ({ text }) => {
  return <Text text={text} />;
};

export default Content;
