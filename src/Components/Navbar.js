import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2> Shopping Cart</h2>
            <div style={{marginTop:'17px',marginRight:'15px'}}>
            <button style={{ marginRight:'20px'}}><Link to="/" style={{textDecoration:'none'}}> Home</Link></button>
            <button ><Link to="/Carts" style={{textDecoration:'none'}}> Carts</Link></button>

      </div>
        </div>
    )
}

export default Navbar