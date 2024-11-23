import { type ModalProps } from 'f-react-use-modal';
import Modal from 'react-modal';

export const CustomModal = ({ open, onClose }: ModalProps) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => onClose()}
      contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <button onClick={() => onClose()}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};
