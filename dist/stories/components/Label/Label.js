import { jsx as _jsx } from "react/jsx-runtime";
import './label.css';
;
export const Label = ({ label = "No label", size = "normal", allCaps = false, color = "primary", fontColor = '', }) => {
    return (_jsx("span", Object.assign({ className: `label ${size}  text-${color}`, style: { color: fontColor } }, { children: allCaps ? label.toUpperCase() : label.toLowerCase() })));
};
