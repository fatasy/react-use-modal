import React from 'react';
import { Button, Modal, Text, TextInput } from 'react-native';
import { type ModalProps } from 'react-use-modal';

export const CustomModalResult = ({
  open,
  onClose,
}: ModalProps<void, string>) => {
  const [name, setName] = React.useState('Marcelo');

  return (
    <Modal visible={open}>
      <Text>Your name is: {name}</Text>
      <Text>This is simple modal</Text>
      <TextInput value={name} onChangeText={setName} />
      <Button title="Done" onPress={() => onClose(name)} />
    </Modal>
  );
};
