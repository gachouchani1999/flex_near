import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { wallet, signIn, signOut } from "../../near/near-setup";
import NEARIcon from "../NEARicon";

const NearLogIn = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (wallet?.getAccountId()) {
      setUser(wallet.getAccountId());
    } else return;
  }, [wallet]);

  const logout = () => {
    signOut();
    setUser(null);
    location.reload();
  };

  return (
    <>
      {user ? (
        <Box
          onClick={() => logout()}
          letterSpacing={"widest"}
          as="button"
          py="3"
          px="3"
          backgroundColor={"black"}
          fontSize="sm"
          fontWeight="medium"
          //   bg="#000"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="2"
        >
          <Box>LOGOUT</Box>
          <NEARIcon />
        </Box>
      ) : (
        <Box
          onClick={() => signIn()}
          letterSpacing={"widest"}
          as="button"
          py="3"
          px="3"
          backgroundColor={"black"}
          fontSize="sm"
          fontWeight="medium"
          //   bg="#000"
          color="#fff"
          display="flex"
          alignItems="center"
          gap="2"
        >
          <Box>LOGIN</Box>
          <NEARIcon />
        </Box>
      )}
    </>
  );
};

export default NearLogIn;
