import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../Hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    Nintendo: SiNintendo,
    "Apple Macintosh": FaApple,
    Linux: FaLinux,
    Android: FaAndroid,
    iOS: MdPhoneIphone,
    Web: BsGlobe,
  };

  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.name]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
