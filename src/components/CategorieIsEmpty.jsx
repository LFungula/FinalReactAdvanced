import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

export const CategorieIsEmpty = ({ isOpen: isOpen, onClose: onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            You have not selected a category. Please do so before continuing{" "}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
