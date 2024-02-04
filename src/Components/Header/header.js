import React from "react";
import logo from "../images/logo.png";
import search from "../images/search-icon.png";
import cart from "../images/cart.png";
import {Link} from "react-router-dom";
import threept from "../images/humberger.png";

export default function header() {
  return (
    <div>
      <header className="containerr container-fluid">
        <div>
          <div>
          
            <ul className="uli">
              <div className="link">
                <li className="applelog">
                <Link to ="/"> <img id="" src={logo} alt="" />{" "} </Link>
                </li>
                <li className="linkoch">
                  {" "}
                  <Link to="/Mac">
                    {" "}
                    Mac{" "}
                  </Link>
                </li>
                <li className="linkoch">
                  {" "}
                  <Link to="/Iphone">
                    {" "}
                    iphone{" "}
                    </Link>
                
                </li>
                <li className="linkoch">
                  {" "}
                  <a href="/mac ">
                    {" "}
                    ipad{" "}
                  </a>
                </li>
                <li className="linkoch">
                  {" "}
                  <a href="">
                    {" "}
                    watch{" "}
                  </a>
                </li>
                <li className="linkoch">
                  {" "}
                  <a href=""> tv </a>
                </li>
                <li className="linkoch">
                  {" "}
                  <Link to="/Music">
                    {" "}
                    music{" "}
                  </Link>
                </li>
                <li className="linkoch">
                  {" "}
                  <a href="">
                    {" "}
                    support{" "}
                  </a>
                </li>
                <li className="linkoch">
                  <a>
                    {" "}
                    <img src={search} alt="" />{" "}
                  </a>{" "}
                </li>{" "}
                <li className="linkoch">
                  <a>
                    {" "}
                    <img src={cart} alt="" />{" "}
                  </a>{" "}
                </li>

                  <div className="div1 div11"> 

                            <li>
                                <h3><a href="#">Mac</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">iphone</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">ipad</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">watch</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">tv</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">music</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">support</a></h3>
                            </li>
                            <li>
                                <a><img src={search} />{" "}</a>
                            </li>
                        </div>
                        <li className="threept">
                            <img id="btn
                            " src={threept} alt="" />
                        </li>
                </div>
              </ul>
            </div>
          </div>
          </header>
        </div>
        
      
  
  );
}
