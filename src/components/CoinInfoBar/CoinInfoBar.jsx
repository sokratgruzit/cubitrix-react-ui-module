import React, { useState } from "react";
import "./CoinInfoBar.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AddSquareIcon, DragIcon, EthIcon } from '../../assets/svgs'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const defaultList = [
  {
    name: "Index Price", 
    value: "1,220.2",
    active: true,
  },
  {
    name: "Oracle Price", 
    value: "1,220.2",
    active: true,
  },
  {
    name: "24h Change", 
    value: "1,6 (0.18%)",
    active: true,
  },
  {
    name: "Open Interest", 
    value: "104,683.72",
    active: true,
  },
  {
    name: "1h Funding", 
    value: "-0.00178%",
    active: true,
  },
  {
    name: "24h Volume", 
    value: "330,220,228",
    active: true,
  },
  {
    name: "24h Trade", 
    value: "45,452",
    active: true,
  },
  {
    name: "Next Funding", 
    value: "01:28",
    active: true,
  },
];

export const CoinInfoBar = (props) => {
  const [showDragableList, setShowDraggableList] = useState(false)

  const [itemList, setItemList] = useState(defaultList);

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

  const handleChange = (item) => {
    setItemList(prev => prev.map(prevItem => prevItem.name === item.name ? {...prevItem, active: !item.active} : prevItem ))
  }
  return (
    <div className="coin-info-container" style={props.customStyles}>
      <div className="coin-info-list">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          className='mySwiper'
          freeMode={true}
          mousewheel={true}
        >
          {itemList.filter(item => item.active).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="coin-info-list__item font-12" key={item.name}>
                <p>{item.name}</p>
                <p>
                  {/* {item.value} */}
                  {item.name === 'Index Price' && `$${item.value}`}
                  {item.name === 'Oracle Price' && `$${item.value}`}
                  {item.name === '24h Change' && `$${item.value}`}
                  {item.name === '24h Volume' && `$${item.value}`}
                  {item.name === 'Open Interest' && (
                    <span>
                      {item.value}
                      <EthIcon />
                    </span>
                  )}
                  {item.name === '1h Funding' && `${item.value}`}
                  {item.name === '24h Trade' && `${item.value}`}
                  {item.name === 'Next Funding' && `${item.value}`}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="add-square-container" onClick={() => setShowDraggableList(!showDragableList)}>
          <AddSquareIcon />
        </div>
      </div>
      {showDragableList && (
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="draggable-list">
            {(provided) => (
              <div
                className="draggable-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3 className="font-12">View Option</h3>
                {itemList.map((item, index) => (
                  <Draggable 
                    key={item.name} 
                    draggableId={item.name} 
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <label 
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className={snapshot.isDragging ? 'draggable-list__item draggingListItem' : 'draggable-list__item'}
                        htmlFor={item.name} 
                      >
                        <input 
                          className="draggable-checkbox" 
                          id={item.name} 
                          type="checkbox" 
                          name={item.name}  
                          value={item.active}
                          onChange={() => handleChange(item)}
                        />
                        <div className={item.active ? "marker" : 'marker marker-not-checked'}>
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.36745 7.53291L0.0507812 4.23291L0.534115 3.74958L3.36745 6.58291L9.46745 0.48291L9.95078 0.966243L3.36745 7.53291Z"
                              fill="#3D5AFE"
                            />
                          </svg>
                        </div>
                        <p className="draggable-label">
                          {item.name}
                        </p>
                        <DragIcon customStyle={{ marginLeft: 'auto'}}  active={snapshot.isDragging} />
                      </label>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}
