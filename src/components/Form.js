const BuyerForm = ({setBuyer , buyer, name})=>{

    const handleBuyerChange = (e) =>{
        setBuyer({...buyer, [e.target.name] : e.target.value})
    }

    return(
        <div>
        <input type ='text' name ={name} onChange = {handleBuyerChange}/>    
            
        </div>

    );
}

export default BuyerForm