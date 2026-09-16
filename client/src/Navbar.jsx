import { NavLink } from "react-router-dom";

import './App.css'
export const Navbar=()=>{
return (
    <>
    <div className="navbarcontainer">
    <section id="navbar" className="navbar">

<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "noactive"
}
>
Home</NavLink>

<NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "noactive"
}
>
about</NavLink>

<NavLink
  to="/names"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "noactive"
}
>
Controlled Form</NavLink>
    </section>
    </div>
    </>
)
}
