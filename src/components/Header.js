import Button from "./Buttons";
const Header=()=>{
return(
    <header class="header">
        <div class="header-logo"><img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/><span class="header-logo-name">GeekFood</span></div>
        <div class="header-links">
            <ul>
                <li style={{color:"blue"}}>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>

            </ul>
        </div>
       
       <div>  <Button bgColor="blue" color="white" title="Get Started"></Button><i class="fa-solid fa-bars menu"></i></div>

    </header>
)
}
export default Header;