import S_PageTitle from "components/layout/S_PageTitle";
import Form from "./parts/Form";
import Summary from "./parts/Summary";
import { useState } from "react";

const Transfer: React.FC = () => {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  return (
    <>
      <S_PageTitle>
        {showSummary ? "Transfer summary" : "New transfer"}
      </S_PageTitle>
      {!showSummary ? (
        <Form setShowSummary={setShowSummary} />
      ) : (
        <Summary setShowSummary={setShowSummary} />
      )}
    </>
  );
};

export default Transfer;
