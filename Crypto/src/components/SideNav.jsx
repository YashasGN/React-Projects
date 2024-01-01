import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
const SideNav = () => {

    const navLinks=[{
        icon:MdOutlineDashboard,
        text:"Dashboard",
        link:"/",
    },
    {
        icon:GrTransaction,
        text:"Transactions",
        link:"/ ",
    }
];
  return( <Stack boxShadow="sm" w="256px" h="100vh" >
    <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@YOYO</Heading>
   <Box mt="6"  mx="3">
   {
        navLinks.map((nav)=>(
            <HStack
            borderRadius="10px"
             key={nav.text} py="3" px="4" _hover={{
                bg:"#F3F3F7",
                color:"#171717"
            }}
            color="#787E82">
                <Icon as={nav.icon}/>
                <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
            </HStack>
        ))
    }
   </Box>
  </Stack>
  );
};

export default SideNav