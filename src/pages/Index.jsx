import { useState } from "react";
import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Input, Select, Button } from "@chakra-ui/react";
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
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = () => {
    let filtered = properties.filter((property) => {
      return (
        property.title.toLowerCase().includes(location.toLowerCase()) &&
        property.price.includes(priceRange) &&
        property.title.toLowerCase().includes(propertyType.toLowerCase())
      );
    });
    setFilteredProperties(filtered);
  };

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

        <Flex mb={4}>
          <Input
            placeholder="Search by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            mr={4}
          />
          <Select
            placeholder="Select price range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            mr={4}
          >
            <option value="$80/night">$80/night</option>
            <option value="$120/night">$120/night</option>
            <option value="$350/night">$350/night</option>
            <option value="$500/night">$500/night</option>
          </Select>
          <Input
            placeholder="Search by property type"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            mr={4}
          />
          <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProperties.map((property) => (
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