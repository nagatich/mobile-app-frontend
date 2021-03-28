export default interface Props {
  value: string
  options: Array<{
    value: string
    label: string
    sub?: string
  }>
  onChange: (e: any) => void
  label?: string
}
