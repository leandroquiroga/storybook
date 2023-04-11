import { ComponentStory, Meta, StoryFn, StoryObj } from '@storybook/react';
import { Label, LabelProps } from './Label';

/*
  * En este punto es donde se define como se va agrupar en nuestro storybook
*/
export default {
  title: 'UI/Label', // Ubicacion de nuestro componente en las historias
  component: Label, // Componente que mostramos en las historias
  tags: ['autodocs'],
  // Los argTypes nos permiten definir la manera que vamos a controlar nustras opciones
  argTypes: {
    size: { control: 'select'},
    color: { control: 'radio' },
    fontColor: {control: 'color'}
  }
} as Meta<typeof Label>;

// Meta: Es una configuracion o descripcion de un objeto

// Para mostrar nuestro componente en las stories debemos crear un template
const Template: StoryFn<typeof Label> = (args: LabelProps) => <Label {...args} />

/*
  * En caso de que nuestro componentes reciba properties este funcional component
  * debe tener dichos argumentas que representan a las properties
*/

// Histories
export const Basic = Template.bind({});

/*
  * Para crear valores por defectos, debemos realizar el seteo de los args
  * de cada history, accedemos al la propiedad args y seteamos los valores 
  * que declaramos como props 
*/
Basic.args = {
  label: 'Ingrese un texto',
  size: 'h1',
  allCaps: false
}
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal', 
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac'
}

/*
  * El metodo bind nos permite crear una copia rompiendo con la referencia
  * con los objetos. Esto evita la mutacion del objeto.
*/