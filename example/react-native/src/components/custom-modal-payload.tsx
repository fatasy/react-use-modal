import { Button, Modal, Text } from 'react-native';
import { type ModalProps } from 'react-use-modal';

type CustomModalPayloadProps = ModalProps<{
  title: string;
  body: string;
}>;

export const CustomModalPayload = ({
  open,
  onClose,
  payload,
}: CustomModalPayloadProps) => {
  const { title, body } = payload;
  return (
    <Modal visible={open} onDismiss={onClose}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Button title="Close" onPress={() => onClose()} />
    </Modal>
  );
};
