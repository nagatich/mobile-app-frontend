export const transformFuel = (name: string) => {
  switch (name) {
    case 'gasoline': return 'бензин'
    case 'diesel': return 'дизель'
    case 'natural_gas_or_gasoline': return 'газ/бензин'
    case 'natural_gas': return 'газ'
    case 'electricity': return 'электро'
    default: return 'unknown'
  }
}

export const transformVolume = (volume: number) => `${volume / 1000} л.`
