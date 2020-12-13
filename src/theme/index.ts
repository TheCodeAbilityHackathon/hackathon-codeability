import borders from "./borders"
import breakpoints from "./breakpoints"
import colors from "./colors"
import radii from "./radius"
import shadows from "./shadows"
import sizes from "./sizes"
import { spacing } from "./spacing"
import transition from "./transition"
import typography from "./typography"
import zIndices from "./z-index"

const theme = {
  breakpoints,
  zIndices,
  radii,
  colors,
  ...typography,
  sizes,
  shadows,
  space: spacing,
  borders,
  transition,
  styles: {
    global: {
      '#userwayAccessibilityIcon': {
        top: '56px !important',
        right: '60px !important',
        
      },
      '#userwayAccessibilityIcon > span > .accessibility-btn span': {
        fontWeight: 'bold !important'
      }
    }
  },
}

export type Theme = typeof theme

export default theme
