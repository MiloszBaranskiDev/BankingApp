import GetCurrentHour from "utils/GetCurrentHour";
import GetMessageId from "./GetMessageId";
import { loremIpsum } from "react-lorem-ipsum";

interface IMessage {
  text: string;
  hour: string;
  user: boolean;
  id: number;
}

const GetRandomMessage = () => {
  const randomMessage: IMessage = {
    text: String(
      loremIpsum({
        p: 1,
        avgSentencesPerParagraph: 1,
        avgWordsPerSentence: Math.floor(Math.random() * (30 - 3 + 1) + 3),
      })
    ),
    hour: GetCurrentHour(),
    user: false,
    id: GetMessageId(),
  };

  return randomMessage;
};

export default GetRandomMessage;
