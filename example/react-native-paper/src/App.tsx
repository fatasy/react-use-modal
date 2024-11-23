import { Alert, Button, StyleSheet, View } from 'react-native';
import { useModals } from 'react-use-modal';
import { CustomDialog } from './components/custom-dialog';
import { CustomDialogPayload } from './components/custom-dialog-payload';
import { CustomDialogResult } from './components/custom-dialog-result';

export default function App() {
  const modals = useModals();

  const handleOpenDialogButtonPress = () => {
    modals.open(CustomDialog);
  };

  const handleOpenDialogPayloadButtonPress = () => {
    modals.open(CustomDialogPayload, {
      title: 'Title',
      body: 'Body',
    });
  };

  const handleOpenDialogResultButtonPress = async () => {
    const result = await modals.open(CustomDialogResult);
    Alert.alert('Result', result);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Dialog" onPress={handleOpenDialogButtonPress} />

      <Button
        title="Open Dialog with Payload"
        onPress={handleOpenDialogPayloadButtonPress}
      />

      <Button
        title="Open Dialog with Result"
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
