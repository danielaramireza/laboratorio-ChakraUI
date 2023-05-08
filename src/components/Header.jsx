import { Heading, Button, ButtonGroup, Box, VStack } from "@chakra-ui/react";

function Header() {
  return (
    <Box className="contenedorPadre">
      <Box width="100vw" p="30px">
        <Box
          className="contenedorImgSuperior"
          display="flex"
          flexDirection="column"
          gap="15px"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="450"
          py={12}
          bgImage="url('https://cdn.pixabay.com/photo/2019/01/06/18/18/sunset-3917605_640.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          mb="60px"
        >
          <Heading
            as="h2"
            size="2xl"
            color="white"
            textAlign="center"
            fontWeight="normal"
          >
            DOMINA EL TERRENO
          </Heading>
          <ButtonGroup gap="4">
            <Button
              colorScheme="white"
              _hover={{ bg: "white", color: "black" }}
              variant="outline"
              borderRadius="none"
            >
              VER DETALLES
            </Button>
            <Button
              colorScheme="white"
              _hover={{ bg: "white", color: "black" }}
              variant="outline"
              borderRadius="none"
            >
              VER VIDEO
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          className="contenedorImgInferior"
          display="flex"
          flexDirection="column"
          gap="15px"
          alignItems="center"
          justifyContent="center"
          width="fit-content"
          height="450"
          bgImage="url('https://cdn.pixabay.com/photo/2019/01/06/18/18/sunset-3917605_640.jpg')"
          bgPosition="left"
          bgRepeat="no-repeat"
          padding="0 60px"
          bgSize="cover"
        >
          <Heading
            as="h2"
            size="lg"
            color="white"
            textAlign="left"
            fontWeight="normal"
          >
            DOMINA EL TERRENO
          </Heading>
          <VStack gap="4" align="stretch" w="100%">
            <Button
              colorScheme="white"
              _hover={{ bg: "white", color: "black" }}
              variant="outline"
              borderRadius="none"
            >
              VER DETALLES
            </Button>
            <Button
              colorScheme="white"
              _hover={{ bg: "white", color: "black" }}
              variant="outline"
              borderRadius="none"
              marginLeft="0"
            >
              VER VIDEO
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
