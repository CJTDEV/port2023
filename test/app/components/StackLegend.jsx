import React, { useState, useEffect, useRef } from 'react';
import legend from '../styles/legend.module.scss'
import SvgRenderer from "../components/SvgRenderer"
import { Modal } from "../../utils/modal_utils";
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";
import StackInfoPopup from "../popups/StackInfoPopup"





export function StackLegend() {

    //Modal

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMobileStackVisible, setIsMobileStackVisible] = useState(false);
    const [isMobileStackExpand, setIsMobileStackExpand] = useState(false);
    const [isLegendMobileInfo, setIsLegendMobileInfo] = useState(false);
    const dimensions = useWindowDimensions();


    const showModal = () => {

        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //opening modal in a global scope
    const openModal = () => {
        Modal.open({
            title: "Technology Stack",
            component: StackInfoPopup,
            props: {
                callback: () => {
                    //closes the modal
                    Modal.close();
                },
                update: () => {
                    //update the current modal props any where from the application using
                    //this methods
                    Modal.updateProps(
                        {
                            data: "hello",
                        },
                        0
                    );
                },
            },
        });
    };


    return (
        <ul className={legend.list}>
            <li className={`${legend.item} copy`}>
                Expierenced
            </li>
            <li className={`${legend.item} copy`}>
                Intermediate
            </li>
            <li className={`${legend.item} copy`}>
                Basic
            </li>
            <li className={`${legend.item} copy`}>
                Workflow
            </li>

            <li className={`${legend.info}`} onClick={openModal}>
                <SvgRenderer src={"icons/question.svg"} size={24} />
            </li>
        </ul>
    );
};

