import Modal from "react-modal";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
};

Modal.setAppElement("#root");

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirmar ação",
  message = "Você tem certeza que deseja continuar?",
}: ConfirmModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmação"
      className="bg-white rounded-xl shadow-lg max-w-md mx-auto p-6 mt-40 relative"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-6">{message}</p>

      <div className="flex gap-3">
        <button
          onClick={onClose}
          className="w-1/2 px-4 py-2 text-center text-apple rounded-xl border border-apple hover:bg-apple hover:text-white transition delay-90 duration-200"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className="w-1/2 bg-sky-blue text-white px-4 py-2 rounded-xl hover:bg-sky-light-blue transition delay-90 duration-200"
        >
          Confirmar
        </button>
      </div>
    </Modal>
  );
}
