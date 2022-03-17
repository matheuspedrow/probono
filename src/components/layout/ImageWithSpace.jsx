import styled from 'styled-components'
const WIDTH_BREAK = '600px'


const StyledFlex = styled.div`
display: flex;
`

const StyledImage = styled.div`
  background-image: url('/image-background.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin: 0px;
  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`

const StyledContainer = styled.div `
background-color: #8f86ff;
padding: 30px 50px;

@media (min-width: ${WIDTH_BREAK}) {
  min-width: ${WIDTH_BREAK};
}
@media (max-width: ${WIDTH_BREAK}) {
  width: 100%;
}

`

export default function ImaWithSpace ({ children }) {
  return (
    <StyledFlex>
      <StyledImage />
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledFlex>
  )
}