import React, { useState } from 'react';

import { Input } from '../Input';

import './FilterBox.css';

export const FilterBox = ({
    tableFilterData,
    tableFilterOutcomingData,
    setTableFilterOutcomingData
}) => {
  const [showSearchBox, setShowSearchBox] = useState(false); 

  const handleSelectChange = (option, name) => {
    setTableFilterOutcomingData((prev) => ({
        ...prev,
        selects: {
            ...prev.selects,
            [name]: option
        }
    }));
  }

  const handleSearchChange = (e) => {
    setTableFilterOutcomingData(prev => ({ ...prev, search: {
        value: e.target.value,
    }}));
  };

  const handleSearchSelect = (option) => {
    setTableFilterOutcomingData(prev => ({ ...prev, search: {
        ...prev.search,
        option
    }}));
  };

  return (
    <div className={'filter-box-container'}>
        <div className={`filter-box ${showSearchBox && 'show-filters'}`}>
            <div className={'filter-box-list font-14'}>
                {tableFilterData.head.map(item => (
                    <div 
                        key={item.title}
                        className={`filter-box-list__item ${tableFilterOutcomingData.head === item.title && 'list-item__active'}`}
                        onClick={() => setTableFilterOutcomingData({...tableFilterOutcomingData, head: item.title})}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            <button 
                className={`advanced-search-btn ${showSearchBox && 'search-btn-active'} font-14`} 
                onClick={() => setShowSearchBox(!showSearchBox)}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3334 6.0415H13.3334C12.9917 6.0415 12.7084 5.75817 12.7084 5.4165C12.7084 5.07484 12.9917 4.7915 13.3334 4.7915H18.3334C18.675 4.7915 18.9584 5.07484 18.9584 5.4165C18.9584 5.75817 18.675 6.0415 18.3334 6.0415Z" fill="white"/>
                    <path d="M5.00002 6.0415H1.66669C1.32502 6.0415 1.04169 5.75817 1.04169 5.4165C1.04169 5.07484 1.32502 4.7915 1.66669 4.7915H5.00002C5.34169 4.7915 5.62502 5.07484 5.62502 5.4165C5.62502 5.75817 5.34169 6.0415 5.00002 6.0415Z" fill="white"/>
                    <path d="M8.33335 8.95833C7.39472 8.95613 6.49516 8.58229 5.83145 7.91857C5.16773 7.25486 4.79389 6.3553 4.79169 5.41667C4.79389 4.47803 5.16773 3.57848 5.83145 2.91476C6.49516 2.25105 7.39472 1.8772 8.33335 1.875C9.27199 1.8772 10.1715 2.25105 10.8353 2.91476C11.499 3.57848 11.8728 4.47803 11.875 5.41667C11.8728 6.3553 11.499 7.25486 10.8353 7.91857C10.1715 8.58229 9.27199 8.95613 8.33335 8.95833ZM8.33335 3.125C7.06669 3.125 6.04169 4.15 6.04169 5.41667C6.04169 6.68333 7.06669 7.70833 8.33335 7.70833C9.60002 7.70833 10.625 6.68333 10.625 5.41667C10.625 4.15 9.60002 3.125 8.33335 3.125Z" fill="white"/>
                    <path d="M18.3333 15.2085H15C14.6583 15.2085 14.375 14.9252 14.375 14.5835C14.375 14.2418 14.6583 13.9585 15 13.9585H18.3333C18.675 13.9585 18.9583 14.2418 18.9583 14.5835C18.9583 14.9252 18.675 15.2085 18.3333 15.2085Z" fill="white"/>
                    <path d="M6.66669 15.2085H1.66669C1.32502 15.2085 1.04169 14.9252 1.04169 14.5835C1.04169 14.2418 1.32502 13.9585 1.66669 13.9585H6.66669C7.00835 13.9585 7.29169 14.2418 7.29169 14.5835C7.29169 14.9252 7.00835 15.2085 6.66669 15.2085Z" fill="white"/>
                    <path d="M11.6667 18.1248C10.728 18.1226 9.82848 17.7488 9.16476 17.0851C8.50105 16.4214 8.1272 15.5218 8.125 14.5832C8.1272 13.6445 8.50105 12.745 9.16476 12.0813C9.82848 11.4175 10.728 11.0437 11.6667 11.0415C12.6053 11.0437 13.5049 11.4175 14.1686 12.0813C14.8323 12.745 15.2061 13.6445 15.2083 14.5832C15.2061 15.5218 14.8323 16.4214 14.1686 17.0851C13.5049 17.7488 12.6053 18.1226 11.6667 18.1248ZM11.6667 12.2915C10.4 12.2915 9.375 13.3165 9.375 14.5832C9.375 15.8498 10.4 16.8748 11.6667 16.8748C12.9333 16.8748 13.9583 15.8498 13.9583 14.5832C13.9583 13.3165 12.9333 12.2915 11.6667 12.2915Z" fill="white"/>
                </svg>
                Advanced Search
            </button>
        </div>
        <div className={`filter-box-search-container ${showSearchBox && 'filter-box-container-active'}`}>
            <div className={'filter-box-search'}>
                <div className={'filter-box-input'}>
                    <Input
                        type={'search-input'}
                        label={'Search'}
                        onChange={handleSearchChange}
                        defaultData={tableFilterData.search.options}
                        selectHandler={handleSearchSelect}
                        placeholder={'search'}  
                        selectLabel={tableFilterOutcomingData.search.option}
                    />
                </div>  
                <div className={'filter-box-selects'}>
                    {tableFilterData.selects.map(select => (
                        <Input
                            key={select.name}
                            type={"lable-input-select"}
                            icon={false}
                            value={select.name}
                            defaultData={select.options}
                            selectHandler={(opt) => handleSelectChange(opt, select.name)}
                            selectLabel={select.defaultOption}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
