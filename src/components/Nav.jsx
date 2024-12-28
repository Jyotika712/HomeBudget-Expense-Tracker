// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav style={{backgroundColor:"darkblue"}}>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img style={{color:'black'}} src={logomark} alt="" height={30} />
        <span style={{color:"white"}} >HomeBudget</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Are you sure you want to log out?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="logout-btn">
              <span>Logout</span>
              
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav