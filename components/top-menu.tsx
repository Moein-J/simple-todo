"use client";
import { useTaskStore } from "@/lib/hooks/task-store";
import { useState } from "react";
import { useForm } from "react-hook-form";

const tags = ["HTML", "CSS", "Javascript", "React"];

const TopMenu = () => {
  const {addTask} = useTaskStore((state) => state);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<Task>();

  const onSubmit = (data: Task) => {
    addTask({ ...data, tags: selectedTags });
    setSelectedTags([]);
  };

  const handleCategoryToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-28 flex flex-col items-center gap-2 justify-center shadow-md text-zinc-700"
    >
      <input
        {...register("name", {
          required: { value: true, message: "Please fill the input" },
        })}
        type="text"
        className="w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/3 px-2 text-md outline-none h-12 rounded-md shadow-sm border border-gray-300"
        placeholder="Enter Your Task"
      />
      <div className="flex justify-between items-center w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/3 px-1">
        <div className="h-fit flex gap-2">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => handleCategoryToggle(tag)}
              className={`p-1 px-2 rounded-sm text-xs ${
                selectedTags.includes(tag)
                  ? "bg-gray-400"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          <select
            {...register("status", { required: "Status is required" })}
            className="p-2 px-4 rounded-sm text-xs ring-1 ring-gray-800"
          >
            <option value="To do">To do</option>
            <option value="Done">Done</option>
            <option value="Doing">Doing</option>
          </select>
          <button
            type="submit"
            className="bg-indigo-500 text-white p-1 px-4 rounded-sm text-xs"
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TopMenu;
