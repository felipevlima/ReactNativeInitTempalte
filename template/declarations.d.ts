declare module '*.svg' {
  import { SvgProps } from 'raect-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
