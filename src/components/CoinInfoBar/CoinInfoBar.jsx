import React, { useState } from "react";
import "./CoinInfoBar.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AddSquareIcon, DragIcon, EthIcon } from '../../assets/svgs'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


export const CoinInfoBar = ({ 
  itemList,
  setItemList,
  handleChange,
  customStyles
}) => {
  const [showDragableList, setShowDraggableList] = useState(false)

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;

    var updatedList = [...itemList];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    
    setItemList(updatedList);
  };

  return (
    <div className="coin-info-container" style={customStyles}>
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
                  {item.name === 'Index Price' && `$${item.value}`}
                  {item.name === 'Oracle Price' && `$${item.value}`}
                  {item.name === '24h Change' && (
                    <span className={'plus-market'}>
                      <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.86334 2.4877L4.48717 1.11153L3.6469 0.26697C3.47569 0.0960182 3.24363 0 3.00169 0C2.75974 0 2.52769 0.0960182 2.35648 0.26697L0.135753 2.4877C-0.155771 2.77922 0.0542977 3.27652 0.461574 3.27652H5.53752C5.94908 3.27652 6.15486 2.77922 5.86334 2.4877Z" fill="#9CCC65"/>
                      </svg>
                      {item.value}
                    </span>
                  )}
                  {item.name === '24h Volume' && `$${item.value}`}
                  {item.name === 'Open Interest' && (
                    <span>
                      {item.value}
                      <EthIcon />
                    </span>
                  )}
                  {item.name === '1h Funding' && (
                    <span className={'minus-market'}>
                      <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.86334 2.4877L4.48717 1.11153L3.6469 0.26697C3.47569 0.0960182 3.24363 0 3.00169 0C2.75974 0 2.52769 0.0960182 2.35648 0.26697L0.135753 2.4877C-0.155771 2.77922 0.0542977 3.27652 0.461574 3.27652H5.53752C5.94908 3.27652 6.15486 2.77922 5.86334 2.4877Z" fill="#9CCC65"/>
                      </svg>
                      {item.value}
                    </span>
                  )}
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
