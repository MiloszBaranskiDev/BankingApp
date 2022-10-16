import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ITransaction } from "interfaces/ITransaction";

import StyledButton from "components/styled/StyledButton";
import StyledHeading from "components/styled/StyledHeading";

interface IProps {
  transactions: ITransaction[];
}

const LastTransactions: React.FC<IProps> = ({ transactions }) => {
  return (
    <>
      {transactions.length > 0 && (
        <StyledLastTransactions>
          <StyledHeading>Last transactions</StyledHeading>
          <ul>
            {transactions
              .slice(-5)
              .reverse()
              .map((transaction) => (
                <li key={transaction.id}>
                  - {transaction.category + " / " + transaction.date}
                </li>
              ))}
          </ul>
          <StyledButtonContainer>
            <StyledButton as={NavLink} to="/transactions">
              See more
            </StyledButton>
          </StyledButtonContainer>
        </StyledLastTransactions>
      )}
    </>
  );
};

export default LastTransactions;

const StyledLastTransactions = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bgc};
  padding: ${(props) => props.theme.tilePadding};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow};
  ul {
    margin-bottom: 14px;
    li {
      line-height: 30px;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-basis: calc(50% - 8px);
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: auto;
  padding-top: 20px;
`;
