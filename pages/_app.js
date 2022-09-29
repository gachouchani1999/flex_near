import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { initNear } from "../near/near-setup";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  // LOAD NEAR API
  useEffect(() => {
    initNear();
    setIsLoading(false);
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
