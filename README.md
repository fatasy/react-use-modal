### Documentation for `f-react-use-modals` (with React Native, Expo and React Examples)

The `useModals` hook provides a simple and practical API for managing modals in both React Native and React applications, allowing you to open, pass data to, and retrieve results from custom modal components.

---

### Installation

Before using it, make sure to install the library:

```bash
npm install f-react-use-modal
# or
yarn add f-react-use-modal
```

---

### Basic Usage

The `useModals` hook allows you to open and manage modals. It provides methods such as `open` to interact with custom modals.

#### Importing

```tsx
import { useModals } from 'f-react-use-modal';
```

---

### Usage in **React Native**

#### Opening a Basic Modal

```tsx
const modals = useModals();

const handleOpenModal = () => {
  modals.open(CustomModal);
};
```

#### Integrating in the Root Component

Wrap your application with the `ModalProvider`:

```tsx
import { ModalProvider } from 'f-react-use-modal';

export default function App() {
  return (
    <ModalProvider>
      <YourMainComponent />
    </ModalProvider>
  );
}
```

#### Example of a Custom Modal Component (React Native)

```tsx
import { Button, Modal, Text } from 'react-native';
import { type ModalProps } from 'f-react-use-modal';

export const CustomModal = ({ open, onClose }: ModalProps) => {
  return (
    <Modal visible={open} onDismiss={onClose}>
      <Text>Alert</Text>
      <Text>This is simple modal</Text>
      <Button title="Close" onPress={() => onClose()} />
    </Modal>
  );
};
```

---

#### Example React Integration

Wrap your React application with `ModalProvider`:

```tsx
import { ModalProvider } from 'f-react-use-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root')
);
```

#### Example of a Custom Modal Component (React)

```tsx
import React from 'react';
import Modal from 'react-modal';

export const CustomModal = ({ onClose }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => onClose()}
      contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <button onClick={() => onClose()}>close</button>
    </Modal>
  );
};
```

---

### Opening Modals (Common for React Native and React)

#### Opening a Modal with Payload

```tsx
modals.open(CustomModal, {
  title: 'Modal Title',
  message: 'This is the content of the modal.',
});
```

#### Modal with Result (Async Behavior)

```tsx
const handleOpenModalWithResult = async () => {
  const result = await modals.open(CustomModalWithResult);
  console.log('Result:', result);
};
```

#### Example of a Modal with Result

React Native:

```tsx
import React from 'react';
import { Button, Modal, Text, TextInput } from 'react-native';
import { type ModalProps } from 'f-react-use-modal';

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
```

React:

```tsx
export const CustomModalWithResult = ({ onClose }) => {
  const handleConfirm = () => onClose('Confirmed!');
  const handleCancel = () => onClose('Canceled.');

  return (
    <div>
      <h3>Do you want to proceed?</h3>
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
};
```

---

### Advanced Features

1. **Dynamic Modals**: You can dynamically pass different components and props to `open`.
2. **Cross-Platform Support**: This library works seamlessly in both React Native, Expo and React.
