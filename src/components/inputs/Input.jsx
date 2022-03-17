import styled from 'styled-components'

const InputContainer = styled.div`
  widht: 100%
`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0px;
`

const StyledInput = styled.input `
  width: 190px;
  height: 20px;
  padding: 20px
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
`

function Input ({ label, ...props}) {
  return (
    <InputContainer>
      <StyledLabel>Cidade</StyledLabel>
      <StyledInput placehorlder={label} {...props} />
    </InputContainer>
  )
}

export default Input