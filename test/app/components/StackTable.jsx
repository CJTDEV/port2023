import React from 'react';
import Swiper from './Swiper';
import stackTable from '../styles/stackTable.module.scss'
import { Button } from './Button'
import { DimensionalModule } from './DimensionalModule'

export const StackTable = () => {


    return (
        <div className={stackTable.wrapper}>
            <div className={stackTable.table}></div>
        </div>
    );
};


