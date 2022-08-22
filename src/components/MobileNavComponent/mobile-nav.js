import React from "react";
import "./mobile-nav.css";

// 📝: ICONS
import { ReactComponent as MenuClose } from "../../assets/svg/form_icons/menu-icon-open.svg";

// 📝: Other Components
import ListView from "../ListComponent/list-view";
import ProfileWidget from "../ProfileWidgetComponent/profile-widget";

function MobileNav() {
  const navEmptyMessage = () => {
    return (
      <ul>
        <li>
          <p>Search For Cities To Select</p>
        </li>
        <li>
          <p>Once Selected They Will Be Added To Your List</p>
        </li>
      </ul>
    );
  };

  return (
    <div className='container d-md-none mobile-nav show-border'>
      <div className='row d-flex flex-column'>
        <div className='col text-end mb-5'>
          <MenuClose />
        </div>
        <div className='col mb-5'>
          <ProfileWidget />
        </div>
        <div className='col mb-5'>
          <ListView />
        </div>
        <div className='col'>{navEmptyMessage()}</div>
      </div>
    </div>

    // <nav className='navbar navbar-expand-lg bg-light'>
    //   <div className='container-fluid'>
    //     <a className='navbar-brand' href='#'>
    //       Navbar
    //     </a>
    //     <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon'></span>
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    //         <li className='nav-item'>
    //           <a className='nav-link active' aria-current='page' href='#'>
    //             Home
    //           </a>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='#'>
    //             Link
    //           </a>
    //         </li>
    //         <li className='nav-item dropdown'>
    //           <a
    //             className='nav-link dropdown-toggle'
    //             href='#'
    //             role='button'
    //             data-bs-toggle='dropdown'
    //             aria-expanded='false'
    //           >
    //             Dropdown
    //           </a>
    //           <ul className='dropdown-menu'>
    //             <li>
    //               <a className='dropdown-item' href='#'>
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className='dropdown-item' href='#'>
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr className='dropdown-divider' />
    //             </li>
    //             <li>
    //               <a className='dropdown-item' href='#'>
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link disabled'>Disabled</a>
    //         </li>
    //       </ul>
    //       <form className='d-flex' role='search'>
    //         <input
    //           className='form-control me-2'
    //           type='search'
    //           placeholder='Search'
    //           aria-label='Search'
    //         />
    //         <button className='btn btn-outline-success' type='submit'>
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default MobileNav;
