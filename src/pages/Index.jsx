import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    image: "https://via.placeholder.com/300",
    price: "$120/night",
  },
  {
    id: 2,
    title: "Beachfront Villa with Private Beach",
    image: "https://via.placeholder.com/300",
    price: "$350/night",
  },
  {
    id: 3,
    title: "Cozy Cabin in the Woods",
    image: "https://via.placeholder.com/300",
    price: "$80/night",
  },
  {
    id: 4,
    title: "Luxury Penthouse with Panoramic Views",
    image: "https://via.placeholder.com/300",
    price: "$500/night",
  },
];

const Index = () => {
  return (
    <Box>
      <Box as="nav" bg="blue.600" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Heading size="md">RentMyPlace</Heading>
          <Flex>
            <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
            <Link to="/listings">Listings</Link>
          </Flex>
        </Flex>
      </Box>

      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="xl" mb={8}>Find Your Perfect Rental</Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {properties.map((property) => (
            <Box key={property.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.image} alt={property.title} />

              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>{property.title}</Heading>
                <Text>{property.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box as="footer" bg="blue.600" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <VStack spacing={4}>
            <Text>&copy; 2023 RentMyPlace. All rights reserved.</Text>
            <Text>123 Street, City, Country</Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;