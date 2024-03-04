import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";

const GameGrid = () => {
  const { games, error, isloading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={10}
        padding={"10px"}
      >
        {isloading &&
          skeleton.map((skel) => (
            <GameContainer>
              <GameCardSkeleton key={skel} />
            </GameContainer>
          ))}
        {games.map((game) => (
          <GameContainer>
            <GameCard key={game.id} game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
