interface ListProps {
  title: string;
  icon: string;
}

interface ModalProps {
  selectedItem: string | null;
  onClose: () => void;
  removeTaskHandler: () => void;
}

type Task = {
  name: string;
  tags: string[];
  status: string;
};

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (name: string) => void;
  updateTask: (name: string, field: keyof Task, value: unknown) => void;
}
