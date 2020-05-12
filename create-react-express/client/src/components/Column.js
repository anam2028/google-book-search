import React from 'react';

const Column = ({ base = 12, sm, md, lg, xl, children }) => {
    let columnClassname = `col-${base}`;

    if (sm) {
        columnClassname = columnClassname.concat(` col-sm-${sm}`);
    }
    if (md) {
        columnClassname = columnClassname.concat(` col-md-${md}`);
    }
    if (lg) {
        columnClassname = columnClassname.concat(` col-lg-${lg}`);
    }
    if (xl) {
        columnClassname = columnClassname.concat(` col-xl-${xl}`);
    }
    return <div className = {columnClassname}>{children}</div>;
};
export default Column;
