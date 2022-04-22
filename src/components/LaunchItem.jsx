import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Box, Text, Flex, Spacer, Tag, Button, Icon } from "@chakra-ui/react";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.200" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex aling="center">
        <Icon as={HiCalendar} color="gray.500"></Icon>
        <Text fontSize="sm" ml={2} color="gray.500">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button colorScheme="purple">More Details</Button>
      </Link>
    </Box>
  );
}
