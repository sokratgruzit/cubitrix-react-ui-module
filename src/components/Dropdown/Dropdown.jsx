import { useState } from "react";
import { Switches } from "../Switches";
import "./Dropdown.css";

export const Dropdown = (props) => {
  const [inputData, setInputData] = useState(
    {
    title: '',
    img: null,
    numbering: ''
  });

  function updateData(data,field) {
    setInputData(prev => ({...prev, [field] : data }))
  }

  let element = '';
  if (props.type === 'country') {
    element =
        <div style={props.customStyles} className="dropdown-country">
          <h1 className="dropdown-toggle">
            Select Country
          </h1>
          {props.countryData?.map((item, index) => {
            return (
              <div key={index} className="dropdown-menu-country">
                <div onClick={() => props.handlerClick({image: item.image, title: item.title, numbering: item.numbering})} className="dropdown-item-country">
                  <img src={item.image} alt="country" />
                  <p>{item.title}</p>
                  <p>{item.numbering}</p>
                </div>
              </div>
            )
          })}
        </div>
  }
  if (props.type === 'dropdown') {
    element =
        <div style={props.customStyles} className={` active ${props.dropdown}`}>
          {props.data?.map((item, index) => {
            return (
                <div key={index}>
                  <h1 onClick={() => props.handlerClick(item.title)} className="dropdown-toggle">
                    {item.title}
                  </h1>
                  {item.list?.map((item, index) => {
                    return (
                        <div key={index} className="dropdown-item">
                          {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                          <span className={item.id < 3 ? "filter" : ''}>
                            {item.svg}
                          </span>
                          <div>
                            <p id={item.id}  className={`${props.active === `${item.id}` ? "left-line" : ''}`}>
                              {item.title}
                            </p>
                            {item.togle === 'true' &&
                                <Switches />
                            }
                          </div>
                        </div>
                    )
                  })}
                </div>
            )
          })}
        </div>
  }
  if(props.type === 'default-dropdown') {
    element = (
      <div style={props.customStyles} className={`${'active'} ${'dropdown'}`}>
        {props.data?.map((item, index) => {
          return (
            <div className="dropdown-item" onClick={() => {
              props.handlerClick(item.name)
              props.selectHandler(item.name)
            } 
            } key={index}>
              {item.name} 
            </div>
          )
        })
        }
      </div>
    )
  }
  return element;
}
