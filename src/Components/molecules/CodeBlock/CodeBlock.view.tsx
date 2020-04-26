import React from "react"

import { Box } from "Components/atoms"

import { motion, useCycle } from "framer-motion"

import IconToggle from "./IconToggle"
import Overlay from "./Overlay.view"

const codeblockVariant = {
  open: {
    height: 1000,
  },
  closed: {
    height: 200,
  },
}

const contentVariant = {
  open: {
    height: "100%",
    overflow: "scroll",
  },
  closed: {
    height: "95%",
    overflow: "hidden",
  },
}

interface Props {
  children: React.ReactNode
}

const CodeBlock: React.FC<Props> = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <motion.div
        initial="closed"
        variants={codeblockVariant}
        animate={isOpen ? "open" : "closed"}
      >
        <Box variant="codeBlock.container" onClick={() => toggleOpen()}>
          <Overlay isOpen={isOpen} />
          <motion.div variants={contentVariant}>
            <Box variant="codeBlock.content">
              <Box variant="codeBlock.iconContainer">
                <IconToggle />
              </Box>
              <motion.pre>{children}</motion.pre>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </>
  )
}

export default CodeBlock
