import {icons} from "data/icons"

export const Icon = ({name}) => {

  const findedIcon = icons.find(icon => icon.name === name)

  if(!findedIcon) new Error('Nome do ícone não existe.')

  return (
    <div>
      <img src={findedIcon.path} alt={findedIcon.name}/>
    </div>
  )
}