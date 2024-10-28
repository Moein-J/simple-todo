
const DragArea = ({ showDrop }: { showDrop: boolean }) => {

  return (
    <>
      <div
        className={`w-full transition-all ${
          !showDrop ? "opacity-0 h-5" : "opacity-100 h-32"
        } rounded-lg border-neutral-300 border flex items-center justify-center`}
      >
        DROP HERE
      </div>
    </>
  );
};

export default DragArea;
