import styled from 'styled-components'
import {subtleBoxShadow, redBoxShadow, greyBackground} from './Styles'

const Card = styled.div`
    ${subtleBoxShadow};
    ${greyBackground};
    border-radius:10px;
`
export const CardWrapper = styled.div`
    padding: 20px;
`

export default Card;