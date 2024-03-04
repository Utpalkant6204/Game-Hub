import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSelectGenre: (genre: null) => void;
  onSelectPlatforms: (platform: null) => void;
  onSelectOrder: (order: string) => void;
  onSearch: (searchText: string) => void;
}

const NavBar = ({
  onSelectGenre,
  onSelectPlatforms,
  onSelectOrder,
  onSearch,
}: Props) => {
  return (
    <HStack padding="10px">
      <Button
        variant={"link"}
        onClick={() => {
          onSelectGenre(null);
          onSelectPlatforms(null);
          onSelectOrder("");
        }}
      >
        <Image src={logo} boxSize={"60px"} />
      </Button>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
