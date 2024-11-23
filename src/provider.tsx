import invariant from 'invariant';
import * as React from 'react';
import { ModalsContext } from './context';
import type { ModalComponent, OpenModal, OpenModalOptions } from './use-modal';

type ModalStackEntry<P, R> = {
  key: string;
  open: boolean;
  promise: Promise<R>;
  Component: ModalComponent<P, R>;
  payload: P;
  onClose: (result: R) => Promise<void>;
  resolve: (result: R) => void;
};

export type ModalProviderProps = {
  children?: React.ReactNode;
  unmountAfter?: number;
};

/**
 * Provider for Modals stacks. The subtree of this component can use the `useDialogs` hook to
 * access the modals API. The modals are rendered in the order they are requested.
 *
 */
const ModalsProvider = (props: ModalProviderProps) => {
  const { children, unmountAfter = 1000 } = props;
  const [stack, setStack] = React.useState<ModalStackEntry<any, any>[]>([]);
  const keyPrefix = React.useId();
  const nextId = React.useRef(0);

  const requestModal = React.useCallback<OpenModal>(
    function open<P, R>(
      Component: ModalComponent<P, R>,
      payload: P,
      options: OpenModalOptions<R> = {}
    ) {
      const { onClose = async () => {} } = options;
      let resolve: ((result: R) => void) | undefined;
      const promise = new Promise<R>((resolveImpl) => {
        resolve = resolveImpl;
      });
      invariant(resolve, 'resolve not set');

      const key = `${keyPrefix}-${nextId.current}`;
      nextId.current += 1;

      const newEntry: ModalStackEntry<P, R> = {
        key,
        open: true,
        promise,
        Component,
        payload,
        onClose,
        resolve,
      };

      setStack((prevStack) => [...prevStack, newEntry]);
      return promise;
    },
    [keyPrefix]
  );

  const closeModalUi = React.useCallback(
    function closeDialogUi<R>(modal: Promise<R>) {
      const updateStack = (prevStack: typeof stack) =>
        prevStack.map((entry) =>
          entry.promise === modal ? { ...entry, open: false } : entry
        );

      const filterStack = (prevStack: typeof stack) =>
        prevStack.filter((entry) => entry.promise !== modal);

      setStack(updateStack);

      setTimeout(() => {
        setStack(filterStack);
      }, unmountAfter);
    },
    [unmountAfter]
  );

  const closeModal = React.useCallback(
    async function closeModal<R>(modal: Promise<R>, result: R): Promise<R> {
      const entryToClose = stack.find((entry) => entry.promise === modal);

      invariant(entryToClose, 'Dialog not found');

      const { onClose, resolve } = entryToClose;

      await onClose(result);

      resolve(result);

      closeModalUi(modal);

      return modal;
    },
    [stack, closeModalUi]
  );

  const contextValue = React.useMemo(
    () => ({ open: requestModal, close: closeModal }),
    [requestModal, closeModal]
  );

  return (
    <ModalsContext.Provider value={contextValue}>
      {children}
      {stack.map(({ key, open, Component, payload, promise }) => (
        <Component
          key={key}
          payload={payload}
          open={open}
          onClose={async (result) => {
            await closeModal(promise, result);
          }}
        />
      ))}
    </ModalsContext.Provider>
  );
};

export { ModalsProvider };
