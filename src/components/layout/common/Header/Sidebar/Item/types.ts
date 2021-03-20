import { Route } from 'routes'

export default interface Props {
  route: Route
  activeName: string
  onClick: () => void
}
