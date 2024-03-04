import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSelectGenre={(e) => setSelectedGenre(e)}
          onSelectPlatforms={(e) => setSelectedPlatform(e)}
          onSelectOrder={(e) => setSortOrder(e)}
          onSearch={(e)=> setSearch(e)}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack paddingLeft={2} spacing={5} marginBottom={5}>
          <PlatformSelector
            onPlatformSelect={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectPlatform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
            sortOrder={sortOrder}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={sortOrder}
          selectSearch = {search}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
