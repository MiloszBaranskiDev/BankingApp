import Text from "../elements/Text";

const Content: React.FC = () => {
  const lorem: string[] = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim ea culpa sequi perferendis? Eius error dolorem autem provident magnam nobis ea, debitis ipsam eum repudiandae ipsa mollitia aliquid obcaecati. At consequuntur quos eligendi excepturi nemo quasi animi accusamus debitis illum quas, optio eveniet, aliquid impedit rerum omnis deleniti vero. Repudiandae pariatur eligendi laudantium vero veniam maxime explicabo, iste blanditiis.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro consectetur tempore minima ratione accusantium, corrupti hic, optio ullam vel odio perspiciatis at sequi mollitia dolores sapiente? Error, sequi ipsa. Vel, deserunt illum obcaecati modi provident tempore delectus facilis tempora eos sint minus reiciendis quis suscipit cupiditate nesciunt sunt saepe. Numquam id eos delectus quo cumque dolor. Voluptas, vel similique. Eum nobis optio facilis ullam. Earum architecto eligendi neque quo. Pariatur impedit quos debitis labore ducimus dolorem optio quia recusandae quaerat voluptatibus sed in, sapiente repellat error totam nam harum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem dolorem quia aspernatur numquam officia explicabo corporis odit nam quod iste omnis, delectus illum, a quasi eos, facilis ipsa cumque? Voluptate quam repellat impedit dolorum quasi, enim perspiciatis placeat rem id consequatur. Eos vitae voluptate, quos laboriosam iusto quaerat repudiandae explicabo ducimus culpa? Enim maxime sint nostrum odit cupiditate rem? Sunt magnam suscipit, velit unde repudiandae accusantium dolorem pariatur aperiam quia odit porro aspernatur laborum a mollitia sapiente omnis quod vitae nemo iure ab quasi voluptatum necessitatibus. Repellat, animi obcaecati! Aperiam tempora nihil assumenda eos, itaque numquam? Recusandae, velit maiores quasi ex odio quisquam nostrum reprehenderit eius magnam. Sequi tempore non explicabo eligendi magnam sunt odit eaque dolorum ipsam nostrum? Quasi, ex alias? Culpa qui eum quis ipsa perspiciatis vel asperiores eligendi voluptates aliquid dolorum laudantium iure facere eos, molestias magnam ex neque ea, fugit itaque. Suscipit laudantium error quasi. Beatae facilis aliquid laboriosam cupiditate officiis quo itaque molestias nihil quisquam dicta laudantium, accusantium odio, ad ea repellat cum ex, incidunt impedit unde explicabo omnis. Natus voluptas consectetur dolorem. Consequuntur!",
  ];

  return (
    <>
      {lorem.map((text: string) => (
        <Text text={text} key={text} />
      ))}
    </>
  );
};

export default Content;
