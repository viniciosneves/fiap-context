import styled from "styled-components"
import BtnIcon from "../BtnIcon/BtnIcon"
import Botao from "../Botao/Botao"
import { useLivros } from "../../context/LivrosContext/LivrosContext"

const Card = styled.div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-grow: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`

const Sobre = styled.h3`
    color: #027C87;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`

const Titulo = styled.h4`
    color: #009EAC;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`

const Tipografia = styled.p`
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

const LegendaPreco = styled.small`
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Preco = styled.strong`
    color: #009EAC;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const UlFlex = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 32px;
    align-items: start;
`

const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`

const CardLivro = () => {
    const { livroSelecionado } = useLivros()
    return (<Card>
        <ContainerFlex>
            <Sobre>Sobre o livro:</Sobre>
            <UlFlex>
                <li>
                    <BtnIcon>
                        <img src="/icones/sacola.png" alt="" />
                    </BtnIcon>
                </li>
                <li>
                    <BtnIcon>
                        <img src="/icones/favoritos.png" alt="" />
                    </BtnIcon>
                </li>
            </UlFlex>
        </ContainerFlex>
        <div>
            <Titulo>{livroSelecionado.titulo}</Titulo>
            <Tipografia>
                {livroSelecionado.resumo}
            </Tipografia>
            <Tipografia>
                Por: {livroSelecionado.autor}
            </Tipografia>
        </div>
        <ContainerFlex>
            <div>
                <Tipografia>
                    <LegendaPreco>
                        A partir de:
                    </LegendaPreco>
                </Tipografia>
                <Tipografia>
                    <Preco>
                        R$ {livroSelecionado.preco.toFixed(2)}
                    </Preco>
                </Tipografia>
            </div>
            <Botao>
                Comprar
            </Botao>
        </ContainerFlex>
    </Card>)
}

export default CardLivro