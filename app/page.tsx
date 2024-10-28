import List from "@/components/list";


export default function Home() {
  const statuses = [
    { name: "To do", icon: "/dart.svg"},
    { name: "Done", icon: "/done.svg"},
    { name: "Doing", icon: "/star.svg" },
  ];

  return (
    <section className="w-full flex items-center justify-center p-2 py-4">
      <div className="w-11/12 lg:w-5/6 grid grid-cols-3 gap-4">
        {statuses.map((status) => (
          <List
            key={status.name}
            title={status.name}
            icon={status.icon}
          />
        ))}
      </div>
    </section>
  );
}
