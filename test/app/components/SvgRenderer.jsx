import React from "react";
import { ReactSVG } from "react-svg";

const SvgRenderer = ({ src, size }) => {
    return <ReactSVG className={`icon`} src={src} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: `${size}px` }} />;
};

export default SvgRenderer;
