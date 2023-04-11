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
  fontColor?: string
};

export const Label = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor= '',
}: LabelProps) => {
  return (
    <span
      className={`label ${size}  text-${color}`}
      style={{color: fontColor}}
    >
      {allCaps ? label.toUpperCase() : label.toLowerCase()}
    </span>
  );
};
