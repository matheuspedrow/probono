import styled from 'styled-components'
import localization from '../../../pages/localization'

const Button = styled.button`
width: 195px;
height: 60px;
margin-top: 0;
--color: #00A97F;
--color2: black;
padding: 0.8em 1.75em;
background-color: #3A3A3A;
border-radius: 30px;
border: .5px solid;
transition: .5s;
position: relative;
overflow: hidden;
cursor: pointer;
z-index: 1;
font-weight: bold;
font-size: 15px;
font-size: bold;
font-family: 'Roboto', 'Segoe UI', sans-serif;
text-transform: uppercase;
color: var(--color);

:after,:before {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  transform: skew(90deg) translate(-50%, -50%);
  position: absolute;
  inset: 50%;
  left: 25%;
  z-index: -1;
  transition: .5s ease-out;
  background-color: var(--color);
 }

 :before {
  top: -50%;
  left: -25%;
  transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
 }

 :hover::before {
  transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
 }

 :hover::after {
  transform: skew(45deg) translate(-50%, -50%);
 }

 :hover {
  color: var(--color2);
 }

 :active {
  filter: brightness(.7);
  transform: scale(.98);
 }

`

export default Button

