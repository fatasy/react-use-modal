import { Button, Modal, Text } from 'react-native';
import { type ModalProps } from 'react-use-modal';

export const CustomModal = ({ open, onClose }: ModalProps) => {
  return (
    <Modal visible={open} onDismiss={onClose}>
      <Text>Alert</Text>
      <Text>This is simple modal</Text>
      <Button title="Close" onPress={() => onClose()} />
    </Modal>
  );
};
