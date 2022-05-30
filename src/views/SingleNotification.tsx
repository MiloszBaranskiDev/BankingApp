import styled from "styled-components";
import StyledPageTitle from "elements/layout/StyledPageTitle";
import { useParams } from "react-router-dom";

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 60px 0;
  h1 {
    flex-basis: 100%;
    padding: 0;
    margin-bottom: 12px;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      flex-basis: auto;
      margin-bottom: 0;
      margin-right: auto;
      padding-right: 30px;
    }
  }
`;

const StyledIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s;
  font-size: ${(props) => props.theme.typography.size_extra_big};
  color: ${(props) => props.theme.colors.main};
  &:hover {
    color: unset;
  }
`;

const StyledDate = styled.p`
  margin-left: 12px;
  font-size: ${(props) => props.theme.typography.size_big};
  color: ${(props) => props.theme.colors.main};
`;

const StyledText = styled.p`
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typography.size_big};
  &:last-child {
    margin-bottom: 0;
  }
`;

const SingleNotification: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <StyledTop>
        <StyledPageTitle>Single notification</StyledPageTitle>
        <StyledIcon>
          <i className="far fa-trash-alt"></i>
        </StyledIcon>
        <StyledDate>12.05.2022</StyledDate>
      </StyledTop>
      <StyledText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim ea
        culpa sequi perferendis? Eius error dolorem autem provident magnam nobis
        ea, debitis ipsam eum repudiandae ipsa mollitia aliquid obcaecati. At
        consequuntur quos eligendi excepturi nemo quasi animi accusamus debitis
        illum quas, optio eveniet, aliquid impedit rerum omnis deleniti vero.
        Repudiandae pariatur eligendi laudantium vero veniam maxime explicabo,
        iste blanditiis.
      </StyledText>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
        consectetur tempore minima ratione accusantium, corrupti hic, optio
        ullam vel odio perspiciatis at sequi mollitia dolores sapiente? Error,
        sequi ipsa. Vel, deserunt illum obcaecati modi provident tempore
        delectus facilis tempora eos sint minus reiciendis quis suscipit
        cupiditate nesciunt sunt saepe. Numquam id eos delectus quo cumque
        dolor. Voluptas, vel similique. Eum nobis optio facilis ullam. Earum
        architecto eligendi neque quo. Pariatur impedit quos debitis labore
        ducimus dolorem optio quia recusandae quaerat voluptatibus sed in,
        sapiente repellat error totam nam harum.
      </StyledText>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem
        dolorem quia aspernatur numquam officia explicabo corporis odit nam quod
        iste omnis, delectus illum, a quasi eos, facilis ipsa cumque? Voluptate
        quam repellat impedit dolorum quasi, enim perspiciatis placeat rem id
        consequatur. Eos vitae voluptate, quos laboriosam iusto quaerat
        repudiandae explicabo ducimus culpa? Enim maxime sint nostrum odit
        cupiditate rem? Sunt magnam suscipit, velit unde repudiandae accusantium
        dolorem pariatur aperiam quia odit porro aspernatur laborum a mollitia
        sapiente omnis quod vitae nemo iure ab quasi voluptatum necessitatibus.
        Repellat, animi obcaecati! Aperiam tempora nihil assumenda eos, itaque
        numquam? Recusandae, velit maiores quasi ex odio quisquam nostrum
        reprehenderit eius magnam. Sequi tempore non explicabo eligendi magnam
        sunt odit eaque dolorum ipsam nostrum? Quasi, ex alias? Culpa qui eum
        quis ipsa perspiciatis vel asperiores eligendi voluptates aliquid
        dolorum laudantium iure facere eos, molestias magnam ex neque ea, fugit
        itaque. Suscipit laudantium error quasi. Beatae facilis aliquid
        laboriosam cupiditate officiis quo itaque molestias nihil quisquam dicta
        laudantium, accusantium odio, ad ea repellat cum ex, incidunt impedit
        unde explicabo omnis. Natus voluptas consectetur dolorem. Consequuntur!
      </StyledText>
    </>
  );
};

export default SingleNotification;
