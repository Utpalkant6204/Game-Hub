import useGenre from '../Hooks/useGenre'

const GenreList = () => {

    const {data} = useGenre();
    console.log(data)

  return (
    <ul>
        {
            data.map((genre) => <li key={genre.id}>{genre.name}</li>)
        }
    </ul>
  )
}

export default GenreList