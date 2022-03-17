import styled from 'styled-components'

import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typography/H1'
import H4 from '../src/components/typography/H4'
import H2 from '../src/components/typography/H2'
import Button from '../src/components/inputs/Button'
import ButtonCity1 from '../src/components/inputs/ButtonCity1'
import ButtonCity2 from '../src/components/inputs/ButtonCity2'
import ButtonCity3 from '../src/components/inputs/ButtonCity3'
import Input from '../src/components/inputs/Input'


const CityContainer = styled.div`
  margin-top: 60px;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;

`


function HomePage () {
  
  return (
    <ImageWithSpace>
      <H1>Atividades diárias!</H1>
      <H4>As melhores dicas e previsões para você!</H4>
      <CityContainer>
        <H2>Escolha uma cidade para sugestões</H2>
        <Form>
          <Input placeholder="Digite uma cidade" type="city" />
          <Button>Pesquisar cidade</Button>
          <ButtonCity1>CIDADE 01</ButtonCity1>
          <ButtonCity2>CIDADE 02</ButtonCity2>
          <ButtonCity3>CIDADE 03</ButtonCity3>
        </Form>
      </CityContainer>
    </ImageWithSpace>
  )
}



export default HomePage
