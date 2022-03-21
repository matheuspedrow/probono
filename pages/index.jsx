import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typography/H1'
import H4 from '../src/components/typography/H4'
import H2 from '../src/components/typography/H2'
import Button from '../src/components/inputs/Button'
import ButtonCity from '../src/components/inputs/ButtonCity'
import Input from '../src/components/inputs/Input'


const CityContainer = styled.div`
  margin-top: 60px;
`

const CityDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`


function HomePage () {
  //useState: armazenamento de estados
  const [activities, setActivities] = useState(false)
  const [city, setCity] = useState('')
  const [cityList, setCityList] = useState([])



  const getActivies = async () => {
    const response = await axios.get("https://raw.githubusercontent.com/probono-digital/DesafioTecnico/main/MOCK_DATA.json",)
    setActivities(response.data)
  }

  const searchCity = async () => {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=a805f9af1b44dfbf238efc5038aa2c2b&limit=10`)
    console.log(response.data)
    setCityList(response.data)
  }

  const cityOnClick = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a805f9af1b44dfbf238efc5038aa2c2b`)
    console.log(response.data)
  }

  //usar quando não tem ação do usuario
  useEffect(() => {
    getActivies()
  }, [])



  return (
    <ImageWithSpace>
      <H1>Atividades diárias!</H1>
      <H4>As melhores dicas e previsões para você!</H4>
      <CityContainer>
        <H2>Escolha uma cidade para sugestões</H2>
        <CityDiv>
          <Input 
            placeholder="Digite uma cidade" 
            type="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <Button onClick={searchCity}>Pesquisar cidade</Button>
        </CityDiv>
        <div>
          {
            cityList.map((city, i) => 
              <div 
                key={`city-${i}`}
                onClick={() => cityOnClick(city.lat, city.lon)}
              >
                {city.name}, {city.state}, {city.country}
              </div>
            )
          }
        </div>
        <div>
          {

          }
        </div>
      </CityContainer>
    </ImageWithSpace>
  )
}

export default HomePage