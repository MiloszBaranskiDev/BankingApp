import S_PageTitle from "elements/layout/S_PageTitle";
import Form from "parts/Transfer/Form";
import Summary from "parts/Transfer/Summary";
import { useState } from "react";

const Transfer: React.FC = () => {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  return (
    <>
      <S_PageTitle>Transfer</S_PageTitle>
      {!showSummary ? (
        <Form setShowSummary={setShowSummary} />
      ) : (
        <Summary setShowSummary={setShowSummary} />
      )}
    </>
  );
};

export default Transfer;
