import api from '../../services/api'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'

const Home = () => {
    const [movie, setMovie] = useState()
    const [topMovies, setMovies] = useState()

    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        getMovies()

        async function getTopMovies() {
            const { data: { results } } = await api.get('/movie/top_rated')

            console.log(results)

            setMovies(results[0])
        }

        getMovies()
        getTopMovies()
    }, [])

    return (
        <>
            {movie && (
                <Background
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                >
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red>Assista Agora</Button>
                                <Button>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="capa-do-filme" />
                        </Poster>
                    </Container>

                </Background>
            )}
        </>

    )
}

export default Home


