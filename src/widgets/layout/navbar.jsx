import React from "react";
import PropTypes from "prop-types";
import {
  Navbar as MTNavbar,
  Button,
} from "@material-tailwind/react";

export function Navbar({ brandName, routes, action }) {


  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div className="flex gap-2 lg:flex">
          
          
          <Button variant="gradient" disabled size="sm" fullWidth>
        Everest IT Service
      </Button>
        </div>
      </div>
    
    </MTNavbar>
  );
}

// Navbar.defaultProps = {
//   brandName: "Everest IT Services",
//   action: (
   
      
   
//   ),
// };

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
