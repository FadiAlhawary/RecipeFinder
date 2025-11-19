import { Dialog, Button, Portal, CloseButton } from '@chakra-ui/react';
import React from 'react';

interface DynamicModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  showCloseButton?: boolean;
  showOkButton?: boolean;
  OkButtonText?: string;
  onOk: () => void;
}
const DynamicModal: React.FC<DynamicModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  showCloseButton = true,
  showOkButton = true,
  OkButtonText = 'OK',
  onOk,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{content}</Dialog.Body>
            <Dialog.Footer>
              {showCloseButton && (
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              )}
              {showOkButton && <Button onClick={onOk}>{OkButtonText}</Button>}
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default React.memo(DynamicModal);
