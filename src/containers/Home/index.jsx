import api from '../../services/api'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'
import { getImages } from '../../utils/getImages'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Slider from '../../components/Slider'

const Home = () => {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()

    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        getMovies()

        async function getTopMovies() {
            const { data: { results } } = await api.get('/movie/top_rated')

            console.log(results)

            setTopMovies(results)
        }

        getMovies()
        getTopMovies()
    }, [])

    return (
        <>
            {movie && (
                <Background
                    img={getImages(movie.backdrop_path)}
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
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>

    )
}

export default Home


