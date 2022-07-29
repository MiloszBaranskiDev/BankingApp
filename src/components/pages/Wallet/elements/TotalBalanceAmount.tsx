import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "components/Loader";

interface Props {
  amount?: string;
}

const TotalBalanceAmount: React.FC<Props> = ({ amount }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    amount !== undefined ? setLoading(false) : setLoading(true);
  }, [amount]);

  return (
    <>
      {!loading ? (
        <StyledTotalBalanceAmount>
          ~{amount} PLN <span>+15%**</span>
        </StyledTotalBalanceAmount>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TotalBalanceAmount;

const StyledTotalBalanceAmount = styled.p`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  word-break: break-all;
  font-size: ${(props) => props.theme.typography.size_extra_big};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  span {
    word-break: normal;
    margin-left: 8px;
    color: ${(props) => props.theme.colors.green};
    font-size: ${(props) => props.theme.typography.size_normal};
    font-weight: ${(props) => props.theme.typography.weight_normal};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
    font-size: ${(props) => props.theme.typography.size_title};
  }
`;
