"use client";
import { useTaskStore } from "@/lib/hooks/task-store";
import React, { useEffect, useMemo, useState } from "react";
import { TbTrashFilled } from "react-icons/tb";
import DragArea from "./drag-area";
import Image from "next/image";
import { Modal } from "./modal";

const List: React.FC<ListProps> = ({ title, icon }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [showDrop, setShowDrop] = useState(false);
  const [dragData, setDragData] = useState("");
  const { tasks, removeTask, updateTask } = useTaskStore((state) => state);
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === title),
    [tasks, title]
  );

  useEffect(() => {
    setDragData("");
  }, [filteredTasks]);

  const removeTaskHandler = () => {
    removeTask(selectedItem as string);
  };

  return (
    <section>
      <div className="font-bold gap-2 text-xl flex items-center">
        <Image src={icon} width={24} height={24} alt="dart" />
        <p>{title}</p>
      </div>
      <div
        className="flex flex-col w-full min-h-svh gap-4 mt-4"
        onDragOver={(e) => {
          e.preventDefault();
          if (title !== dragData) {
            setShowDrop(true);
          }
        }}
        onDragLeave={() => {
          setShowDrop(false);
        }}
        onDrop={(e) => {
          setShowDrop(false);
          updateTask(e.dataTransfer.getData("task"), "status", title);
        }}
      >
        {filteredTasks.map((task) => {
          if (task.status === title) {
            return (
              <div
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("task", task.name);
                  setDragData(task.status);
                }}
                key={task.name}
                className="w-full h-32 flex justify-between flex-col shadow-md border border-neutral-300 rounded-lg p-4"
              >
                <p className="font-semibold">{task.name}</p>
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-1 text-sm">
                    {task.tags.map((tag) => (
                      <p
                        className={`p-[2px] px-2 rounded-md ${
                          tag === "Javascript"
                            ? "bg-yellow-400"
                            : tag === "React"
                            ? "bg-teal-500"
                            : "bg-green-600"
                        }`}
                        key={tag}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedItem(task.name);
                    }}
                  >
                    <TbTrashFilled />
                  </button>
                </div>
              </div>
            );
          }
        })}
        <DragArea showDrop={showDrop} />
      </div>
      {/* Modal */}
      <Modal
        selectedItem={selectedItem}
        removeTaskHandler={removeTaskHandler}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};

export default React.memo(List);
