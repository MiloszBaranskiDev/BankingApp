import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INotification {
  title: string;
  date: string;
  content: string;
  read: boolean;
  id: string;
}

const initialState: INotification[] = [
  {
    title: "Example",
    date: "10.07.2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim ea culpa sequi perferendis? Eius error dolorem autem provident magnam nobis ea, debitis ipsam eum repudiandae ipsa mollitia aliquid obcaecati. At consequuntur quos eligendi excepturi nemo quasi animi accusamus debitis illum quas, optio eveniet, aliquid impedit rerum omnis deleniti vero. Repudiandae pariatur eligendi laudantium vero veniam maxime explicabo, iste blanditiis.",
    read: false,
    id: "4r1deb4d-3b7d-4bad-9bdd-1b0d7b3dcb6d",
  },
  {
    title: "Example 2",
    date: "12.07.2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro consectetur tempore minima ratione accusantium, corrupti hic, optio ullam vel odio perspiciatis at sequi mollitia dolores sapiente? Error, sequi ipsa. Vel, deserunt illum obcaecati modi provident tempore delectus facilis tempora eos sint minus reiciendis quis suscipit cupiditate nesciunt sunt saepe. Numquam id eos delectus quo cumque dolor. Voluptas, vel similique. Eum nobis optio facilis ullam.",
    read: false,
    id: "1r1deb1a-3b7d-8bad-9bdd-1b0d7b3dcb6d",
  },
];

export const NotificationsSlice = createSlice({
  name: "NotificationsSlice",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<INotification>) => {
      const { title, date, content, read, id } = action.payload;
      return [
        ...state,
        { title: title, date: date, content: content, read: read, id: id },
      ];
    },

    removeNotification: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return (state = state.filter((notification) => notification.id !== id));
    },

    updateNotification: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const index: number = state.findIndex((item) => item.id === id);
      state[index].read = true;
    },
  },
});

export const { addNotification, removeNotification, updateNotification } =
  NotificationsSlice.actions;

export default NotificationsSlice.reducer;
