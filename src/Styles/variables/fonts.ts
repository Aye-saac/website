import { fonts as tailwindFonts } from "../lib/tailwind"

const fonts = {
  ...tailwindFonts,
  sans: `'Inter', ${tailwindFonts.sans}`,
  body: `'Inter', ${tailwindFonts.sans}`,
  heading: `'Inter', ${tailwindFonts.sans}`,
}

export default fonts
