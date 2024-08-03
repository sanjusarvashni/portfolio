const Navbar = ()=>{
   return(
    <div className=" bg-slate-950  min-w-screen flex gap-24 h-30 justify-between content-center px-10 py-7"  >
        <h1><a href="#" className=" text-slate-100 text-5xl font-bold font-mono " >SANJU</a></h1>
        <div>
            <ul className=" text-yellow-200 text-2xl font-semibold font-mono flex gap-9 align-middle">
                <li className=" hover:text-yellow-100 "><a href="">About</a></li>
                <li className=" hover:text-yellow-100"><a href="">Skills</a></li>
                <li className=" hover:text-yellow-100"><a href="">Projects</a></li>
                <li className=" hover:text-yellow-100" ><a href="">Contact</a></li>
               
                
            </ul>
        </div>
    </div>
   )
}

export default Navbar;