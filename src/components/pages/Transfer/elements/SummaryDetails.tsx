import styled from "styled-components";
import { ITransaction } from "interfaces/ITransaction";

interface IProps {
  transaction: ITransaction;
}

const SummaryDetails: React.FC<IProps> = ({ transaction }) => {
  return (
    <StyledSummaryDetails>
      <>
        <li>
          <p>
            <span>Date</span>
            <span>{transaction.date}</span>
          </p>
        </li>
        {Object.entries(transaction.details).map(([key, value]) => (
          <li key={key}>
            <p>
              <span>{key.split("_")[0]}</span>
              <span>{value}</span>
            </p>
          </li>
        ))}
      </>
    </StyledSummaryDetails>
  );
};

export default SummaryDetails;

const StyledSummaryDetails = styled.ul`
  margin-bottom: 20px;
  li {
    line-height: 26px;
    span:first-child {
      text-transform: capitalize;
      margin-right: 12px;
      position: relative;
      font-weight: ${(props) => props.theme.typography.weight_bold};
      &::after {
        content: ":";
        position: absolute;
        right: -5px;
      }
    }
  }
`;
