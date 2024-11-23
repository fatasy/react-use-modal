import React from 'react';
import { ModalsContext } from './context';
import { useNonNullableContext } from './use-non-nullable-context';

export interface OpenModalOptions<R> {
  /**
   * A function that is called before closing the modal closes. The modal
   * stays open as long as the returned promise is not resolved. Use this if
   * you want to perform an async action on close and show a loading state.
   *
   * @param result The result that the modal will return after closing.
   * @returns A promise that resolves when the modal can be closed.
   */
  onClose?: (result: R) => Promise<void>;
}

export interface ModalProps<P = undefined, R = void> {
  /**
   * The payload that was passed when the modal was opened.
   */
  payload: P;
  /**
   * Whether the modal is open.
   */
  open: boolean;
  /**
   * A function to call when the modal should be closed. If the modal has a return
   * value, it should be passed as an argument to this function. You should use the promise
   * that is returned to show a loading state while the modal is performing async actions
   * on close.
   * @param result The result to return from the modal.
   * @returns A promise that resolves when the modal can be fully closed.
   */
  onClose: (result: R) => Promise<void>;
}

export type ModalComponent<P, R> = React.ComponentType<ModalProps<P, R>>;

export interface OpenModal {
  /**
   * Open a modal without payload.
   * @param Component The modal component to open.
   * @param options Additional options for the modal.
   */
  <P extends undefined, R>(
    Component: ModalComponent<P, R>,
    payload?: P,
    options?: OpenModalOptions<R>
  ): Promise<R>;
  /**
   * Open a modal and pass a payload.
   * @param Component The modal component to open.
   * @param payload The payload to pass to the modal.
   * @param options Additional options for the modal.
   */
  <P, R>(
    Component: ModalComponent<P, R>,
    payload: P,
    options?: OpenModalOptions<R>
  ): Promise<R>;
}

export interface CloseModal {
  /**
   * Close a modal and return a result.
   * @param modal The modal to close. The promise returned by `open`.
   * @param result The result to return from the modal.
   * @returns A promise that resolves when the modal is fully closed.
   */
  <R>(modal: Promise<R>, result: R): Promise<R>;
}

export interface useModalHook {
  open: OpenModal;
  close: CloseModal;
}

export const useModals = (): useModalHook => {
  const { open, close } = useNonNullableContext(ModalsContext);

  return React.useMemo(
    () => ({
      open,
      close,
    }),
    [close, open]
  );
};
