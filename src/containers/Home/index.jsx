import api from '../../services/api'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'
import { getImages } from '../../utils/getImages'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setpopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        getMovies()

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')

            setTopMovies(results)
        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')

            setTopSeries(results)
        }

        async function getPopularSeries() {
            const { data: { results } } = await api.get('/tv/popular')

            console.log(results)

            setpopularSeries(results)
        }

        async function getTopPeople() {
            const { data: { results } } = await api.get('/person/popular')

            console.log(results)

            setTopPeople(results)
        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()
    }, [])

    return (
        <>
            {movie && (
                <Background
                    img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />)}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {popularSeries && <Slider info={topSeries} title={'Series Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>

    )
}

export default Home


