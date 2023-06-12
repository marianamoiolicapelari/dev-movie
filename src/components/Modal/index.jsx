import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import api from '../../services/api'

function Modal({ movieId }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get(`/movie/${movieId}/videos`)

            console.log(results[0])
            setMovie(results[0])
        }

        getMovies()
    }, [])

    return (
        <Background>
            {movie && (
                <Container>
                <iframe
                    src={`https://www.youtube.com/embed/${movie.key}`}
                    title='Youtube Vídeo Player'
                    height='500px'
                    width='100%'
                ></iframe>
            </Container>
            )}
            
        </Background>
    )
}

export default Modal