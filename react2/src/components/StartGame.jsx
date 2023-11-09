import styled from 'styled-components'
const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div><img src="/images/dices 1.png" /></div>

            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play now</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content{
h1{
    font-size: 96px;
    white-space: nowrap;
}
}
`;

const Button = styled.button`  
  
  padding: 10px 18px;
  color: white;
  width: 220px;
  background:#000000;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s ease-in;

  &:hover{
    background-color: #383838;
    border:1px solide black;
    color:blacl;
    transition: 0.3s ease-in;
  }
`;