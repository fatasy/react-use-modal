import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { type ModalProps } from 'react-use-modal';

export const CustomDialog = ({ open, onClose }: ModalProps) => {
  return (
    <Portal>
      <Dialog visible={open} onDismiss={onClose}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => onClose()}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
