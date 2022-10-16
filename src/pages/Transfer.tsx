import { useState } from "react";

import StyledPageTitle from "components/styled/StyledPageTitle";
import Form from "components/pages/Transfer/parts/Form";
import Summary from "components/pages/Transfer/parts/Summary";

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
