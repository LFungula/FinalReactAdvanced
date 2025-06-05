import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Button,
} from "@chakra-ui/react";

export const Confirm = ({
  isOpen: isOpen,
  onClose: onClose,
  onYes: onYes,
  onNo: onNo,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you you want to proceed? </Text>
          <Button onClick={onNo}> No </Button>
          <Button onClick={onYes}> Yes </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
