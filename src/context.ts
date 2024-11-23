import * as React from 'react';
import type { CloseModal, OpenModal } from './use-modal';

/**
 * @ignore - internal component.
 */

export const ModalsContext = React.createContext<{
  open: OpenModal;
  close: CloseModal;
} | null>(null);
