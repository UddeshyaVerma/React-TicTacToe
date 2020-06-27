import React,{useState} from 'react';
import Icons from './components/Icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const ItemArray=new Array(9).fill("empty");

function App() {
  const [isCross,setIsCross]=useState(false)
  const [WinMessage,setWinMessage]=useState("")

  const ReloadGame=()=>{
    setIsCross(false)
    setWinMessage("")
    ItemArray.fill("empty",0,9)
  }
  const IsWinner=()=>{
    let f=0;
    if (ItemArray[0]===ItemArray[1] && ItemArray[0]===ItemArray[2] && ItemArray[0]!=="empty")
    {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if(ItemArray[3]===ItemArray[4] && ItemArray[3]===ItemArray[5] && ItemArray[3]!=="empty")
    {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if(ItemArray[6]===ItemArray[7] && ItemArray[6]===ItemArray[8] && ItemArray[6]!=="empty")
    {
      setWinMessage(`${ItemArray[6]} wins`)
    }
    else if(ItemArray[0]===ItemArray[3] && ItemArray[0]===ItemArray[6] && ItemArray[0]!=="empty")
    {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if(ItemArray[1]===ItemArray[4] && ItemArray[1]===ItemArray[7] && ItemArray[3]!=="empty")
    {
      setWinMessage(`${ItemArray[1]} wins`)
    }
    else if(ItemArray[2]===ItemArray[5] && ItemArray[2]===ItemArray[8] && ItemArray[2]!=="empty")
    {
      setWinMessage(`${ItemArray[2]} wins`)
    }
    else if(ItemArray[0]===ItemArray[4] && ItemArray[0]===ItemArray[8] && ItemArray[0]!=="empty")
    {
      setWinMessage(`${ItemArray[0]} wins`)
    }
    else if(ItemArray[2]===ItemArray[4] && ItemArray[2]===ItemArray[6] && ItemArray[2]!=="empty")
    {
      setWinMessage(`${ItemArray[2]} wins`)
    }
  }  
  const ChangeItem = itemNumber =>
  {
    if(WinMessage)
    {
      return toast(WinMessage,{type:"success"})
    }
    if(ItemArray[itemNumber]==="empty")
    {
      ItemArray[itemNumber]=isCross?"cross":"circle";
      setIsCross(!isCross)
    }
    else
    {
      return toast("error already filled",{type:"error"})
    }
    IsWinner();

  }
    
  return (
    
   <Container className="p-5">
     
     <ToastContainer position="bottom-center"/>
     <Row>
      <Col md={6} className="offset-md-3">
        {WinMessage ?(
          <div className="mb-2 mt-2">
            <h1>{WinMessage}</h1>
            <Button color="success" onClick={ReloadGame} >Reload</Button>
          </div>
        ):(
          <h1 className="text-center"  color="red">
            {isCross ?"cross" :"circle"} turns
          </h1>
        )}
        <div className="grid">
       { ItemArray.map((item,index)=>
        (
            <Card color="warning" onClick={()=>ChangeItem(index) }>
              <CardBody className="box">
                <Icons name={item}/>
              </CardBody>
            </Card>
        )
        )}
        </div>
      </Col>
     </Row>
     </Container>
  );

        }
export default App;
        