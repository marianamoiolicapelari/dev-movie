import { Title, Container } from './styles'

function Credits({ credits }) {
  console.log(credits)
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          <div></div>
        </Container>
      )}
    </>
  )
}

export default Credits
