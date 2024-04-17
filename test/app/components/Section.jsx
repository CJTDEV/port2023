import React from 'react';
import PropTypes from 'prop-types';
import section from '../styles/sections.module.scss'

const Section = ({
    id,
    spacingVal,
    background,
    backgroundFill,
    fill = false,
    flex = false,
    rounded = false,
    customClass = '',
    customStyle = {},
    children,
}) => {
    const spacingClass = {
        default: section.spacing__default,
        'default__top': section.spacing__default__top,
        'default__bottom': section.spacing__default__bottom,
        'default__bottom__big': section.spacing__default__bottom__big,
        // Add more mappings as needed
    }[spacingVal] || '';
    const backgroundClass = {
        default: section.background__default,
        shade1: section.background__shade1,
        shade2: section.background__shade2,
        shade3: section.background__shade3,
        shade4: section.background__shade4,
        // Add more mappings as needed
    }[background] || '';
    // Generate additional classes for fill and flex
    const backgroundFillClass = backgroundFill ? section.background__fill : ''
    const fillClass = fill ? section.container__fill : '';
    const flexClass = flex ? section.container__flex : '';
    const roundedClass = rounded ? section.background__rounded : '';

    // Combine all classes
    const combinedClasses = `${section.container} ${spacingClass} ${fillClass} ${backgroundClass} ${backgroundFillClass} ${roundedClass} ${flexClass} ${customClass}`;

    return (
        <section id={id} className={combinedClasses} style={customStyle}>
            {children}
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    spacingVal: PropTypes.string.isRequired,
    fill: PropTypes.bool,
    flex: PropTypes.bool,
    rounded: PropTypes.bool,
    background: PropTypes.string,
    backgroundFill: PropTypes.bool,
    customClass: PropTypes.string,
    customStyle: PropTypes.object,
    children: PropTypes.node.isRequired,
};



export default Section;
