import {
  Box,
  Button,
  Img,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import Link from "next/link";
import NearLogIn from "../components/navigation/NEARLogin";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#f7fafc"
    >
      <Box display="flex" width="100%" height="35rem">
        <Box
          bgGradient="linear(to-l,  #537895,#09203F)"
          padding={{ base: "2rem", lg: "6rem" }}
          width={{ base: "100vw", lg: "60vw" }}
          display="flex"
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="left"
            gap="1rem"
            maxWidth="567px"
          >
            <Text
              fontSize="md"
              color="yellow.200"
              fontWeight="bold"
              alignSelf={{ lg: "flex-start" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Buy Now. Pay Later.
            </Text>
            <Text
              fontSize="8xl"
              fontWeight="bold"
              lineHeight="1.1em"
              letterSpacing="tighter"
              textAlign={{ base: "center", lg: "left" }}
              color="white"
            >
              FLEX
            </Text>
            <Text
              textAlign={{ base: "center", md: "left" }}
              color="white"
              fontSize="4xl"
              fontWeight="thin"
              marginBottom="2rem"
              maxWidth={{ base: "20ch", lg: "100%" }}
              lineHeight="1.3em"
            >
              Permission-less Financing of Digital Assets for anyone at anytime.
            </Text>

            {/* <Button
              colorScheme="orange"
              alignSelf={{ lg: "flex-start" }}
              size="lg"
            >
              <Link href="/login">
                <a>Get Your Unique Page</a>
              </Link>
            </Button> */}
          </Box>
        </Box>
        <Box
          width={{ base: "0%", lg: "55%" }}
          bgImage="./images/background1.jpeg"
          bgPos="right center"
          bgSize="cover"
        ></Box>
      </Box>
      {/* Hours of coding */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="3rem"
        maxWidth="1440px"
        padding={{ base: "2rem", md: "5rem" }}
      >
        <Box width="100%">
          <Text
            fontSize="5xl"
            fontWeight="medium"
            lineHeight="1.1em"
            textAlign="center"
            bgGradient="linear(to-l,  #537895,#09203F)"
            bgClip="text"
            paddingY="3rem"
          >
            A First Of It's Kind
          </Text>
          <Text
            fontSize="xl"
            textAlign="center"
            fontWeight="light"
            maxWidth="70ch"
          >
            {`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida tortor a egestas laoreet. Donec vel turpis at quam gravida porttitor. Proin blandit nec justo eget gravida. Suspendisse sagittis ipsum odio, a sodales turpis ullamcorper ut. `}
          </Text>
        </Box>
      </Box>
      {/* Points */}
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        gap="5rem"
        marginTop={{ base: "3rem", lg: "1rem" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Img
            src="./images/3d2.png"
            width="150px"
            borderRadius="5px"
            mb="10"
          />
          <Text
            fontSize="3xl"
            fontWeight="medium"
            lineHeight="1.1em"
            textAlign="center"
            color="#09203F"
            paddingY="1rem"
          >
            Point 1
          </Text>
          <Text fontWeight="light" fontSize="xl" width="30ch">
            Fusce non facilisis odio. Aliquam blandit nulla quis sagittis mollis
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Img
            src="./images/3d3.png"
            width="150px"
            borderRadius="5px"
            mb="10"
          />
          <Text
            fontSize="3xl"
            fontWeight="medium"
            lineHeight="1.1em"
            textAlign="center"
            color="#09203F"
            paddingY="1rem"
          >
            Point 2
          </Text>
          <Text fontWeight="light" fontSize="xl" width="30ch">
            Fusce non facilisis odio. Aliquam blandit nulla quis sagittis mollis
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Img
            src="./images/3d4.png"
            width="150px"
            borderRadius="5px"
            mb="10"
          />
          <Text
            fontSize="3xl"
            fontWeight="medium"
            lineHeight="1.1em"
            textAlign="center"
            color="#09203F"
            paddingY="1rem"
          >
            Point 3
          </Text>
          <Text fontWeight="light" fontSize="xl" width="30ch">
            Fusce non facilisis odio. Aliquam blandit nulla quis sagittis mollis
          </Text>
        </Box>
      </Box>
      {/* Points */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="5rem"
        maxWidth="1280px"
        width="80%"
        marginY="10rem"
      >
        <Box maxWidth="500px" display={{ base: "none", sm: "flex" }}>
          {" "}
          <Img
            src="./images/background2.jpeg"
            borderRadius="10px"
            boxShadow="xl"
          />
        </Box>
        <Box>
          <Text
            fontSize="5xl"
            fontWeight="medium"
            lineHeight="1.1em"
            textAlign="left"
            bgGradient="linear(to-l,  #537895,#09203F)"
            bgClip="text"
            paddingY="2rem"
          >
            Unique Selling Point 1
          </Text>
          <Text fontSize="xl" textAlign={{ base: "center", md: "left" }}>
            Built for speed. It all starts with a short and memorable User Name
            that leads to your own custom page.
          </Text>
          <Tabs marginTop="3rem">
            <TabList>
              <Tab>Step 1</Tab>
              <Tab>Step 2</Tab>
              <Tab>Step 3</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text
                  fontWeight="bold"
                  marginY="1rem"
                  fontSize="2xl"
                  color="#09203F"
                >
                  Something Here
                </Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  gravida tortor a egestas laoreet. Donec vel turpis at quam
                  gravida porttitor. Proin blandit nec justo eget gravida.
                  Suspendisse sagittis ipsum odio, a sodales turpis ullamcorper
                  ut. Sed interdum dui quis arcu varius, in congue sem luctus.
                </p>
              </TabPanel>
              <TabPanel>
                <Text
                  fontWeight="bold"
                  marginY="1rem"
                  fontSize="2xl"
                  color="#09203F"
                >
                  Something Here
                </Text>
                <p>
                  gravida tortor a egestas laoreet. Donec vel turpis at quam
                  gravida porttitor. Proin blandit nec justo eget gravida. ut.
                  Sed interdum dui quis arcu varius, in congue sem luctus.
                </p>
              </TabPanel>
              <TabPanel>
                <Text
                  fontWeight="bold"
                  marginY="1rem"
                  fontSize="2xl"
                  color="#09203F"
                >
                  Something Here
                </Text>
                <p>
                  gravida porttitor. Proin blandit nec justo eget gravida.
                  Suspendisse sagittis ipsum odio, a sodales turpis ullamcorper
                  ut. Sed interdum dui quis arcu varius, in congue sem luctus.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button
            marginTop="3rem"
            colorScheme="orange"
            alignSelf={{ lg: "flex-start" }}
            size="lg"
          >
            <a>View The Marketplace</a>
          </Button>
        </Box>
      </Box>

      {/* Colors */}

      {/* Footer */}
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        width="80%"
        marginBottom="5rem"
      >
        {/* logo side */}
        <Box marginBottom="3rem">
          <Text
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="1.1em"
            letterSpacing="tighter"
            textAlign="left"
            color="black"
          >
            FLEX
          </Text>
          <Text maxWidth="50ch" marginTop="1rem">
            gravida porttitor. Proin blandit nec justo eget gravida. Suspendisse
            sagittis ipsum odio, a sodales turpis ullamcorper ut.
          </Text>
        </Box>
        {/* logo side */}

        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ lg: "5rem" }}
        >
          <Box>
            <Text
              fontWeight="bold"
              marginY="1rem"
              fontSize="lg"
              color="#09203F"
            >
              Clients
            </Text>
            <Text>Help</Text>
            <Text>Account Management</Text>
          </Box>
          <Box>
            <Text
              fontWeight="bold"
              marginY="1rem"
              fontSize="lg"
              color="#09203F"
            >
              Businesses
            </Text>
            <Text>Affiliates</Text>
            <Text>Developers</Text>
            <Text>Resellers</Text>
          </Box>
          <Box>
            <Text
              fontWeight="bold"
              marginY="1rem"
              fontSize="lg"
              color="#09203F"
            >
              Company
            </Text>
            <Text>About Us</Text>
            <Text>Careers</Text>
            <Text>Investors</Text>
            <Text>Media Kit</Text>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
    </Box>
  );
}
