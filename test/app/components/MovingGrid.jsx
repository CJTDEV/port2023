import React, { useState, useEffect, useRef } from 'react';
import movingGrid from '../styles/movingGrid.module.scss'
import cv from '../styles/cv.module.scss'

//icons
import IHTML from '/public/icons/html5.svg'
import IQuestion from '/public/icons/question-solid.svg'
import IExpand from '/public/icons/expand.svg'
import IClose from '/public/icons/xmark-solid.svg'
import ICSS from '/public/icons/css3-alt.svg'
import ISCSS from '/public/icons/sass.svg'
import IJS from '/public/icons/square-js.svg'
import IReact from '/public/icons/react.svg'
import INode from '/public/icons/node-js.svg'
import IWebpack from '/public/icons/cube-solid.svg'
import IMongo from '/public/icons/leaf-solid.svg'
import IWP from '/public/icons/wordpress.svg'
import IExp from '/public/icons/truck-fast-solid.svg'
import IPHP from '/public/icons/php.svg'
import IVue from '/public/icons/vuejs.svg'
import IPlus from '/public/icons/plus-solid.svg'
import IMinus from '/public/icons/minus-solid.svg'
import IDownload from '/public/icons/download.svg'


const MovingGrid = (props) => {
    const [expandedItem, setExpandedItem] = useState(null);
    const icons = props.data
    const gridRef = useRef(null);

    useEffect(() => {
        const gridHeight = gridRef.current.getBoundingClientRect().height;
        gridRef.current.style.maxHeight = `${gridHeight}px`
    }, [])



    const handleItemClick = (e, index) => {
        const el = e.target
        const grid = el.closest('.grid-select')
        const gridItems = grid.querySelectorAll('.js-grid-item')
        const gridItemsLength = gridItems.length

        const gridStyles = window.getComputedStyle(grid, null)

        const gridHeight = parseInt(gridStyles.getPropertyValue('height'));
        const rowHeight = parseInt(gridStyles.getPropertyValue('grid-auto-rows')) || parseInt(gridStyles.getPropertyValue('grid-template-rows').split(' ')[0]);
        const rows = Math.floor(gridHeight / rowHeight);


        const gridItemRect = el.getBoundingClientRect();
        const gridContainerRect = grid.getBoundingClientRect();
        const columnsPerRow = Math.floor(gridItemsLength / rows) + 1
        console.log("columnsPR", columnsPerRow)
        const row = Math.floor((gridItemRect.top - gridContainerRect.top) / rowHeight) + 1;
        console.log(row)

        const isAnyExpandedItemVisible = Array.from(gridItems).some((item) => item.dataset.expanded === 'true');

        if (el.dataset.expanded === 'true') {
            el.style.gridArea = 'initial'
            gridItems.forEach((item) => {
                item.style.opacity = '1'
                item.style.pointerEvents = 'all'
            })
        } else {
            //just ad styles
            if (row == 1) {
                el.style.gridArea = `${row} / ${index + 1} / ${row + 2} / ${index + 1}`
            }
            if (row == 2) {
                el.style.gridArea = `${row} / ${(index + 1) - columnsPerRow} / ${row + 2} / ${(index + 1) - columnsPerRow}`
            }
            if (row == 3) {
                console.log(row)
                console.log(index)
                el.style.gridArea = `${row - 1} / ${(index - (columnsPerRow * 2)) + 1} / ${row + 1} / ${(index - (columnsPerRow * 2)) + 1}`
            }

            gridItems.forEach((item) => {
                item.style.opacity = '0.3'
                item.style.pointerEvents = 'none'
            })
        }

        /*   if (isAnyExpandedItemVisible) {
              gridItems.forEach(item => {
                  // remove style from prev el
                  if (item.dataset.expanded === 'true') {
  
                      item.style.gridArea = 'initial'
                  }
                  //ad styles for new el
                  if (item.dataset.expanded !== 'true' && item.dataset.index == index) {
  
                      if (row == 1) {
                          console.log("first")
                          el.style.gridArea = `${row} / ${index + 1} / ${row + 2} / ${index + 1}`
                      }
                      if (row == 2) {
                        
                              el.style.gridArea = `${row} / ${(index + 1) - columnsPerRow} / ${row + 2} / ${(index + 1) - columnsPerRow}`
                          } 
                      if (row == 3) {
                         
                          el.style.gridArea = `${row - 1} / ${(index - (columnsPerRow * 2)) + 1} / ${row + 1} / ${(index - (columnsPerRow * 2)) + 1}`
                      }
                  }
              });
          
          } else {
              //just ad styles
              if (row == 1) {
                  el.style.gridArea = `${row} / ${index + 1} / ${row + 2} / ${index + 1}`
              }
              if (row == 2) {
                  el.style.gridArea = `${row} / ${(index + 1) - columnsPerRow} / ${row + 2} / ${(index + 1) - columnsPerRow}`
              }
              if (row == 3) {
                  console.log(row)
                  console.log(index)
                  el.style.gridArea = `${row - 1} / ${(index - (columnsPerRow * 2)) + 1} / ${row + 1} / ${(index - (columnsPerRow * 2)) + 1}`
              }
          } */

        // Set the expanded item state
        setExpandedItem((prevExpandedItem) => (prevExpandedItem === index ? null : index));
    };


    return (
        <ul className={`${movingGrid.grid} grid-select`} ref={gridRef}>
            {icons.map((icon, index) => (
                <li
                    key={index}
                    data-index={index}
                    data-expanded={`${index === expandedItem ? 'true' : ''}`}
                    className={`${movingGrid.grid__item} js-grid-item copy-small`}
                    onClick={(e) => handleItemClick(e, index)}>

                    {
                        {
                            'HTML': <IHTML />,
                            'CSS': <ICSS />,
                            'SCSS / SASS': <ISCSS />,
                            'JavaScript': <IJS />,
                            'React': <IReact />,
                            'Node.js': <INode />,
                            'Webpack': <IWebpack />,
                            'Express.js': <IExp />,
                            'WordPress': <IWP />,
                            'PHP': <IPHP />,
                        }[icon.label]
                    }
                    <div className={movingGrid.grid__item__text}>{icon.text ? icon.text : ''}</div>
                </li>
            ))}

        </ul>
    );
};

export default MovingGrid;
