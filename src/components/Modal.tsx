import { Icon } from "@iconify/react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg relative whitespace-pre-line">
        <button
          onClick={onClose}
          className="cursor-pointer p-1 bg-(--primary-color) rounded-bl-lg rounded-tr-lg absolute top-0 right-0 text-white shadow-md hover:bg-(--primary-lite-color) transition duration-200"
        >
          <Icon icon="qlementine-icons:close-16" width="20" height="20" />
        </button>
        <p className="p-8">{children}</p>
      </div>
    </div>
  );
}

export default Modal;
