import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2> Shopping Cart</h2>
            <div style={{marginTop:'17px',marginRight:'15px'}}>
            <Link to="/" style={{textDecoration:'none'}}><button style={{ marginRight:'20px'}}> Home</button></Link>
            <Link to="/Carts" style={{textDecoration:'none'}}><button > Carts</button></Link>

      </div>
        </div>
    )
}

export default Navbar