import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "elements/Loader";

interface Props {
  amount?: string;
}

const S_TotalBalanceAmount = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-size: ${(props) => props.theme.typography.size_extra_big};
  font-weight: ${(props) => props.theme.typography.weight_bold};
  span {
    margin-left: 8px;
    color: #00cf00;
    font-size: ${(props) => props.theme.typography.size_normal};
    font-weight: ${(props) => props.theme.typography.weight_normal};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.mobile_big}) {
    font-size: ${(props) => props.theme.typography.size_title};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 42px;
  }
`;

const TotalBalanceAmount: React.FC<Props> = ({ amount }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    amount !== undefined ? setLoading(false) : setLoading(true);
  }, [amount]);

  return (
    <>
      {!loading ? (
        <S_TotalBalanceAmount>
          ~{amount} PLN <span>+15%**</span>
        </S_TotalBalanceAmount>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TotalBalanceAmount;
