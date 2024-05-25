import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    edit: {
      todo: {},
      isEdit: false,
    },
  },
  reducers: {
    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },
  }
})
export const { edit } = todoSlice.actions;
export default todoSlice.reducer;
//   extraReducers: (builder) =>
//     builder
//       .addCase(getTodo.pending, (state) => {
//         return {
//           ...state,
//           isLoading: true,
//         };
//       })
//       .addCase(getTodo.fulfilled, (state, action) => {
//         return {
//           ...state,
//           isLoading: false,
//           isSuccess:true,
//           allTodos: action.payload,
//         };
//       })
//       .addCase(getTodo.rejected, (state) => {
//         return {
//           ...state,
//           allTodos: [],
//           isLoading : false,
//           isSuccess:false,
//           isError: true,
//         };
//       })
//       .addCase(createTodo.pending, (state) => {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           isSuccess:false,
//         };
//       })
//       .addCase(createTodo.fulfilled, (state, action) => {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           isSuccess : true,
//           allTodos: [...state.allTodos, action.payload],
//         };
//       })
//       .addCase(createTodo.rejected, (state) => {
//         return {
//           ...state,
//           allTodos: [],
//           isLoading: false,
//           isSuccess : false,
//           isError: true,
//         };
//       })
//       .addCase(deleteTodo.pending, (state) => {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           isSuccess: false,
//         };
//       })
//       .addCase(deleteTodo.fulfilled, (state, action) => {
//         return {
//           ...state,
//           allTodos: state.allTodos.filter((tds) => tds._id !== action.payload),
//           isLoading: false,
//           isError: false,
//           isSuccess: false,
//         };
//       })
//       .addCase(deleteTodo.rejected, (state) => {
//         return {
//           ...state,
//           allTodos: [],
//           isError: true,
//           isLoading: false,
//           isSuccess: false,
//         };
//       })
//       .addCase(updateTodo.pending, (state) => {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//           isSuccess : false,
//         };
//       })
//       .addCase(updateTodo.fulfilled, (state, action) => {
//         return {
//           ...state,
//           isLoading: false,
//           isSuccess : true,
//           allTodos: state.allTodos.map((tds) =>
//             tds._id === action.payload._id ? action.payload : tds
//           ),
//           edit: { todo: {}, isEdit: false },
//         };
//       })
//       .addCase(updateTodo.rejected, (state) => {
//         return {
//           ...state,
//           isError: true,
//           isLoading: false,
//           isSuccess : false,
//         };
//       }),
// });

// export const getTodo = createAsyncThunk("GET/TODO", async () => {
//   try {
//     return await fetchTodo();
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const createTodo = createAsyncThunk("ADD/TODO", async (todo) => {
//   try {
//     return await addTodo(todo);
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const deleteTodo = createAsyncThunk("DELETE/TODO", async (id) => {
//   try {
//     return await removeTodo(id);
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const updateTodo = createAsyncThunk("UPDATE/TODO", async (todo) => {
//   try {
//     return await editTodo(todo);
//   } catch (error) {
//     console.log(error);
//   }
// });

