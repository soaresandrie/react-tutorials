import styled from 'styled-components';

export const Title = styled.h1`
    color: #F00;
    background: #000;
    font-size: ${props => `${props.fontSize}px`}; 

    span {
        font-size: 12px;
    }
`; 

//css escopado
export const TitleSmall = styled(Title)`
    color: #00F;
    font-size: 16px;
`;
//vai herdar todas as propriedades do primeiro component
//basicamente uma herança de estilos