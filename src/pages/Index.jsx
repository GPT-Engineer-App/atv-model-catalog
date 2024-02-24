import { Box, Container, SimpleGrid, Image, Text, Heading, Button, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const atvModels = [
  {
    id: 1,
    name: "ATV Pro Max",
    description: "The newest model with enhanced suspension and power.",
    imageUrl: 'https://images.unsplash.com/photo-1516933857371-5a895d657803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdHYlMjBwcm8lMjBtYXh8ZW58MHx8fHwxNzA4ODAwNzMzfDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "ATV Adventure",
    description: "Ready for any terrain, the Adventure is your outdoor companion.",
    imageUrl: 'https://images.unsplash.com/photo-1549221279-aca391fb56d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdHYlMjBhZHZlbnR1cmV8ZW58MHx8fHwxNzA4ODAwNzMzfDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "ATV Sport",
    description: "Sleek design with high performance for sport enthusiasts.",
    imageUrl: 'https://images.unsplash.com/photo-1489731300081-a03b0ce82303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdHYlMjBzcG9ydHxlbnwwfHx8fDE3MDg4MDA3MzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 4,
    name: "ATV Explorer",
    description: "Built for the explorers who seek the unbeaten path.",
    imageUrl: 'https://images.unsplash.com/photo-1700540807392-baa30e4e73ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdHYlMjBleHBsb3JlcnxlbnwwfHx8fDE3MDg4MDA3MzR8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const ATVCard = ({ model }) => {
  return (
    <VStack p={4} borderWidth="1px" borderRadius="lg" spacing={4} alignItems="stretch">
      <Image src={model.imageUrl} borderRadius="md" alt={`Image of ${model.name}`} />
      <Heading size="md">{model.name}</Heading>
      <Text>{model.description}</Text>
      <Button rightIcon={<FaArrowRight />} colorScheme="blue">
        View Details
      </Button>
    </VStack>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>ATV Model Catalog</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {atvModels.map((model) => (
          <ATVCard key={model.id} model={model} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
