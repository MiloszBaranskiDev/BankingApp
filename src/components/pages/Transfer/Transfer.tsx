import StyledPageTitle from "components/layout/StyledPageTitle";
import Form from "./parts/Form";
import Summary from "./parts/Summary";
import { useState } from "react";

const Transfer: React.FC = () => {
  const [showSummary, setShowSummary] = useState<boolean>(false);

  return (
    <>
      <StyledPageTitle>
        {showSummary ? "Transfer summary" : "New transfer"}
      </StyledPageTitle>
      {!showSummary ? (
        <Form setShowSummary={setShowSummary} />
      ) : (
        <Summary setShowSummary={setShowSummary} />
      )}
    </>
  );
};

export default Transfer;
