import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"

const GamePlay = () => {
    return (
        <Mains>
            <div className="top_section">
                <TotalScore />
                <NumberSelector />
            </div>
        </Mains>
    )
}

export default GamePlay

const Mains = styled.main`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`;