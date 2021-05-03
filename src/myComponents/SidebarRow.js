import React,{useEffect} from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title, selected }) {
  useEffect(() => {

let sidebarComponents = document.getElementsByClassName("sidebarRow");

  for (let i = 0; i < sidebarComponents.length; i++) {

    sidebarComponents[i].addEventListener("click", function () {

      let current = document.getElementsByClassName("selected{");

      console.log(current);

      if (current.length != 0) {

        current[0].className = current[0].className.replace(

          " selected",

          ""

        );

      }

      this.className += " selected";

    });

    }

  }, []);
  
  return <div className={`sidebarRow ${selected && " selected"}`}>
    <Icon className="sidebarRow__icon"/>
    <h2 className="sidebarRow__title">{title}</h2>
  </div>;
}

export default SidebarRow;
