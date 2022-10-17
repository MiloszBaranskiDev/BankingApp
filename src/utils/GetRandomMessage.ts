import { loremIpsum } from "react-lorem-ipsum";

import GetCurrentHour from "utils/GetCurrentHour";
import GetRandomId from "./GeRandomId";

import { IMessage } from "interfaces/IMessage";

const GetRandomMessage = (): IMessage => {
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
    id: GetRandomId(),
  };

  return randomMessage;
};

export default GetRandomMessage;
