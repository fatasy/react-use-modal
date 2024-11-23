import React from 'react';
import { Button, Dialog, Portal, Text, TextInput } from 'react-native-paper';
import { type ModalProps } from 'react-use-modal';

export const CustomDialogResult = ({
  open,
  onClose,
}: ModalProps<void, string>) => {
  const [name, setName] = React.useState('Marcelo');

  return (
    <Portal>
      <Dialog visible={open}>
        <Dialog.Title>Enter your name</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Your name is: {name}</Text>
          <TextInput value={name} onChangeText={setName} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => onClose(name)}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
