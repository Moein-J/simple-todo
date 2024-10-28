import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const Modal: React.FC<ModalProps> = ({
  selectedItem,
  onClose,
  removeTaskHandler,
}) => {
  if (!selectedItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-70 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <motion.div
          className="bg-[#252525] rounded-lg md:p-6 p-2 max-w-xl w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <p className="text-gray-600">Are you sure you want delete it ?</p>
          <div className="flex items-center gap-2">
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg"
              onClick={() => {
                removeTaskHandler();
                onClose();
              }}
            >
              Confirm
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
