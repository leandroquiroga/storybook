/// <reference types="react" />
import './label.css';
export interface LabelProps {
    /**
     * Mensaje  principal de la etiqueta
     */
    label: string;
    /**
     * Tamaño predeterminado de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Permite capitalizar el texto
     */
    allCaps: boolean;
    /**
     * Permite seleccionar el color
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Permite seleccionar un color para customizar el label
     */
    fontColor?: string;
}
export declare const Label: ({ label, size, allCaps, color, fontColor, }: LabelProps) => JSX.Element;
