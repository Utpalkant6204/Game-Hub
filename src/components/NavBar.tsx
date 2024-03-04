import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";


interface Props {
  onSelectGenre : (genre: null) =>void;
}

const NavBar = ({onSelectGenre} : Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Button variant={"link"} onClick={() => onSelectGenre(null)}>
        <Image src={logo} boxSize={"60px"} />
      </Button>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
