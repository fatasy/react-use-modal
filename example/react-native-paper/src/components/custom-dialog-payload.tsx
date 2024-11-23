import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { type ModalProps } from 'react-use-modal';

type CustomDialogPayloadProps = ModalProps<{
  title: string;
  body: string;
}>;

export const CustomDialogPayload = ({
  open,
  onClose,
  payload,
}: CustomDialogPayloadProps) => {
  const { title, body } = payload;
  return (
    <Portal>
      <Dialog visible={open} onDismiss={onClose}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{body}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => onClose()}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
