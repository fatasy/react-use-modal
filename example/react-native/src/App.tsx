import { Alert, Button, StyleSheet, View } from 'react-native';
import { useModals } from 'react-use-modal';
import { CustomModal } from './components/custom-modal';
import { CustomModalPayload } from './components/custom-modal-payload';
import { CustomModalResult } from './components/custom-modal-result';

export default function App() {
  const modals = useModals();

  const handleOpenDialogButtonPress = () => {
    modals.open(CustomModal);
  };

  const handleOpenDialogPayloadButtonPress = () => {
    modals.open(CustomModalPayload, {
      title: 'Title',
      body: 'Body',
    });
  };

  const handleOpenDialogResultButtonPress = async () => {
    const result = await modals.open(CustomModalResult);
    Alert.alert('Result', result);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={handleOpenDialogButtonPress} />

      <Button
        title="Open Modal with Payload"
        onPress={handleOpenDialogPayloadButtonPress}
      />

      <Button
        title="Open Modal with Result"
        onPress={handleOpenDialogResultButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
