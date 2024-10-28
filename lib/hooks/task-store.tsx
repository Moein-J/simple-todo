import { create } from "zustand";

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [{ name: "Homework", status: "To do", tags: ["Javascript"] }],
  addTask: (task) =>
    set((state) => {
      if (!state.tasks.some((t) => t.name === task.name)) {
        return { tasks: [...state.tasks, task] };
      }
      return state;
    }),
  removeTask: (name) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        return task.name !== name;
      }),
    })),
  updateTask: (name, field, value) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.name === name) {
          return { ...task, [field]: value };
        }
        return task;
      }),
    })),
}));
