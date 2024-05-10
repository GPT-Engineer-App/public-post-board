import { Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ onLogin, onLogout, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="gray.200">
      <Box fontSize="2xl" fontWeight="bold">Public Post Board</Box>
      <Button leftIcon={<FaUserCircle />} onClick={user ? onLogout : onOpen}>
        {user ? 'Logout' : 'Login'}
      </Button>
    </Flex>
  );
};

export default Header;