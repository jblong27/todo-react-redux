const initialState = [
  {
    id: 1,
    title: "Learn Redux",
    description: "learning redux today",
    status: "In Progress",
  },
  {
    id: 2,
    title: "get coffee",
    description: "getting coffee",
    status: "In Progress",
  },
];

const todos = (state = { todos: initialState }, action) => {
  return state;
}