import React, { useState } from 'react'
import './FilterBox.css'

import { Input } from '../Input';
import { Button } from '../Button';

export const FilterBox = (props) => {
  const [showSearchBox, setShowSearchBox] = useState(false);  
//   const [showResultBox, setShowResultBox] = useState(false);  

//   const ResultDummyData = {
//     resultNum: 10,
//     search: 'TNX00432',
//     type: 'Withdraw'
//   }

  return (
    <div className={'filter-box-container'}>
        <div className={showSearchBox ? 'filter-box show-filters' : 'filter-box'}>
            <div className={'filter-box-list font-14'}>
                {props.searchData.map(item => (
                    <div 
                        key={item.label}
                        className={props.filterTitle === item.label ? 'filter-box-list__item list-item__active' : 'filter-box-list__item'}
                        onClick={() => props.setFilterTitle(item.label)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <button 
                className={showSearchBox ? 'advanced-search-btn search-btn-active font-14' : 'advanced-search-btn font-14'} 
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
        {showSearchBox && (
            <div className={'filter-box-search'}>
                <div className={'filter-box-input'}>
                    <Input
                        type={"default"}
                        icon={false}
                        label={'Search'}
                        subLabel={false}
                        placeholder={"Search"}
                        onChange={() => console.log('log')}
                    />
                    <div 
                        className={'filter-box-input-btn font-14'}
                        onClick={() => console.log('transaction')}
                    >
                        Transaction
                    </div>
                </div>  
                <div className={'filter-box-selects'}>
                    <Input
                        type={"default"}
                        icon={false}
                        label={'Tranx Type'}
                        subLabel={false}
                        placeholder={"Any Type"}
                        onChange={() => console.log('log')}
                        customStyles={{ width: "50%", marginRight: '20px' }}
                    />
                    <Input
                        type={"default"}
                        icon={false}
                        label={'Date Within'}
                        subLabel={false}
                        placeholder={"All Time"}
                        onChange={() => console.log('log')}
                        customStyles={{ width: "50%" }}
                    />
                </div>
                {/* <div className={'filter-box-buttons'}>
                    <Button 
                        element={'button'}
                        type={'btn-primary'}
                        arrow={'arrow-none'}
                        label={'Close'}
                        size={'btn-lg'}
                        customStyles={{ padding: '12px 41px', marginLeft: '0'}}
                        onClick={() => console.log('btn log')}
                    />
                    <Button 
                        element={'button'}
                        type={'btn-primary'}
                        arrow={'arrow-none'}
                        label={'Search'}
                        size={'btn-lg'}
                        customStyles={{ padding: '12px 41px'}}
                        onClick={() => {
                            setShowSearchBox(!showResultBox)
                            setShowResultBox(true)
                        }}
                    />
                </div> */}
            </div>
        )}
        {/* {showResultBox && !showSearchBox && (
            <div className={'result-data-container'}>
                <p className={'result-data__header font-12'}>Found {ResultDummyData.resultNum} Result:</p>
                <div className={'result-data'}>
                    <span className={'font-12'}>Search</span>
                    <span className={'font-12'}>{ResultDummyData.search}</span>
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => console.log('close log')}
                    >
                        <path d="M10.0001 18.3332C14.5834 18.3332 18.3334 14.5832 18.3334 9.99984C18.3334 5.4165 14.5834 1.6665 10.0001 1.6665C5.41675 1.6665 1.66675 5.4165 1.66675 9.99984C1.66675 14.5832 5.41675 18.3332 10.0001 18.3332Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.64185 12.3583L12.3585 7.6416" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.3585 12.3583L7.64185 7.6416" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={'result-data'}>
                    <span className={'font-12'}>Type</span>
                    <span className={'font-12'}>{ResultDummyData.type}</span>
                    <svg
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => console.log('close log')}
                    >
                        <path d="M10.0001 18.3332C14.5834 18.3332 18.3334 14.5832 18.3334 9.99984C18.3334 5.4165 14.5834 1.6665 10.0001 1.6665C5.41675 1.6665 1.66675 5.4165 1.66675 9.99984C1.66675 14.5832 5.41675 18.3332 10.0001 18.3332Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.64185 12.3583L12.3585 7.6416" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.3585 12.3583L7.64185 7.6416" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div 
                    className={'result-clear-all'}
                    onClick={() => {
                        setShowResultBox(false)
                        console.log('clear all')
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.19287 17.4408C7.19287 17.1321 7.44314 16.8818 7.75186 16.8818H16.6957C17.0044 16.8818 17.2547 17.1321 17.2547 17.4408C17.2547 17.7495 17.0044 17.9998 16.6957 17.9998H7.75186C7.44314 17.9998 7.19287 17.7495 7.19287 17.4408Z" fill="#EF5350"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5915 2.81739C11.1156 2.29399 11.826 2 12.5666 2C13.3073 2 14.0177 2.29399 14.5417 2.81739L17.158 5.4337C17.6814 5.95775 17.9757 6.66838 17.9757 7.40904C17.9757 8.1497 17.6817 8.86008 17.1583 9.38413L9.38437 17.158C8.86032 17.6814 8.1497 17.9757 7.40904 17.9757C6.66838 17.9757 5.958 17.6817 5.43395 17.1583L2.81764 14.542C2.29423 14.0179 2 13.3073 2 12.5666C2 11.826 2.29399 11.1156 2.81739 10.5915L10.5915 2.81739ZM3.60841 13.7517C3.60843 13.7517 3.60839 13.7517 3.60841 13.7517L6.22398 16.3673C6.53841 16.6813 6.96464 16.8577 7.40904 16.8577C7.85344 16.8577 8.27966 16.6813 8.59409 16.3673L16.3673 8.59409C16.6813 8.27966 16.8577 7.85344 16.8577 7.40904C16.8577 6.96464 16.6813 6.53841 16.3673 6.22398L13.7517 3.60841C13.7517 3.60839 13.7517 3.60843 13.7517 3.60841C13.4373 3.29441 13.011 3.11798 12.5666 3.11798C12.1223 3.11798 11.6961 3.29434 11.3816 3.60834C11.3816 3.60836 11.3817 3.60832 11.3816 3.60834L3.60841 11.3816C3.60839 11.3816 3.60843 11.3816 3.60841 11.3816C3.29441 11.696 3.11798 12.1223 3.11798 12.5666C3.11798 13.011 3.29441 13.4373 3.60841 13.7517Z" fill="#EF5350"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.95547 7.45327C6.17377 7.23498 6.5277 7.23498 6.746 7.45327L12.5222 13.2295C12.7405 13.4478 12.7405 13.8017 12.5222 14.02C12.3039 14.2383 11.95 14.2383 11.7317 14.02L5.95547 8.2438C5.73717 8.0255 5.73717 7.67157 5.95547 7.45327Z" fill="#EF5350"/>
                    </svg>
                    <span className={'font-12'}>Clear All</span>
                </div>
            </div>
        )} */}
    </div>
  )
}
