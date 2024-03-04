import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../Hooks/useGenre";


interface Props {
  selectedGenre : Genre | null;
}
const GameGrid = ({selectedGenre} : Props) => {
  const { data, error, isloading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{'Loading Failed!, Please Refresh'}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isloading &&
          skeleton.map((skel) => (
            <GameContainer key={skel}>
              <GameCardSkeleton  />
            </GameContainer>
          ))}
        {!isloading && data.map((game) => (
          <GameContainer key={game.id}>
            <GameCard  game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
