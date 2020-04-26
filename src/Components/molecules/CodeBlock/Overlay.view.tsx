import React from "react"

import { Box } from "Components/atoms"

import { AnimatePresence, motion } from "framer-motion"

interface Props {
  isOpen: boolean
}

const CodeBlockOverlay: React.FC<Props> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <Box variant="codeBlock.overlayText">
          <motion.div
            key="showResponseText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Show response
          </motion.div>
        </Box>
      )}
      {!isOpen && (
        <motion.div
          key="codeOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box variant="codeBlock.overlay" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CodeBlockOverlay
