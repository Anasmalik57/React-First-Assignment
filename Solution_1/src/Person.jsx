function Person(props) {
    return (
      <>
        <div style={{border: "2px solid green",width:"fit-content",display:"flex", alignItems: "center", justifyContent:"center",flexDirection:"column", padding:"4px 15px", margin:"auto", borderRadius: "10px"}}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </div>
      </>
    );
  }
  
  export default Person;
  