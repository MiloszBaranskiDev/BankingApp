import styled from "styled-components";

const S_SummaryDetails = styled.ul`
  margin-bottom: 20px;
  li {
    line-height: 26px;
    font-size: ${(props) => props.theme.typography.size_big};
    span:first-child {
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

interface ITransaction {
  category: string;
  date: string;
  details: object[];
}

interface Props {
  transaction: ITransaction;
}

const SummaryDetails: React.FC<Props> = ({ transaction }) => {
  return (
    <S_SummaryDetails>
      <>
        <li>
          <p>
            <span>Date</span>
            <span>{transaction.date}</span>
          </p>
        </li>
        {transaction.details.map((detail) => (
          <li key={Object.values(detail)[0]}>
            <p>
              {Object.entries(detail).map(([key, value]) => (
                <span key={key}>{value}</span>
              ))}
            </p>
          </li>
        ))}
      </>
    </S_SummaryDetails>
  );
};

export default SummaryDetails;