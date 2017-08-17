declare module 'react-native-modal' {
  import { Component, ReactNode } from 'react'
  import { StyleProp, ViewStyle } from 'react-native'

  export interface ModalProps {
    animationIn?: string
    animationInTiming?: number
    animationOut?: string
    animationOutTiming?: number
    backdropColor?: string
    backdropOpacity?: number
    backdropTransitionInTiming?: number
    backdropTransitionOutTiming?: number
    children: ReactNode
    isVisible: boolean
    onModalShow?: () => void
    onModalHide?: () => void
    hideOnBack?: boolean
    hideOnBackdropPress?: boolean
    onBackButtonPress?: () => void
    onBackdropPress?: () => void
    style?: StyleProp<ViewStyle>
  }

  declare class Modal extends Component<ModalProps> {}

  export default Modal
}
