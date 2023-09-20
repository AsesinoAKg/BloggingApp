/* import {useState , useEffect} from 'react';

export default function Input() {

    const[name,setName] = useState("");
    const[lastName,setlastName] = useState("");

    useEffect(()=>{
        document.title = name+" "+lastName;
    },[lastName]);

    useEffect(() => {
      let timer = setInterval(() => {
        console.log("window width",window.innerWidth);
      }, 2000);

      return(clearInterval(timer));
    })

  return (
    <>
      <div className="section">
        <Row lable="Name">
            <input value={name}
            onChange={(e) => setName(e.target.value)}/>
        </Row>
        <Row lable="Last Name">
            <input value={lastName}
            onChange={(e) => setlastName(e.target.value)}/>
        </Row>
      </div>
      <h2>Hello, {name + " " + lastName} </h2>
    </>
  )
}

function Row(props){
    const{lable} = props;
    return(
        <>
        <lable>{lable}<br /></lable>
        {props.children}
        <hr />
        </>
    )
} */