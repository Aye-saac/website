import React from "react"

import { Box } from "Components/atoms"

import { FiCode } from "react-icons/fi"

interface Props {
  children: React.ReactNode
}

const CodeBlock: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <>
      <Box variant="codeBlock.container">
        {!isOpen && <Box variant="codeBlock.overlay" />}
        <Box variant="codeBlock.content">
          <Box
            variant="codeBlock.iconContainer"
            className={isOpen ? "open" : ""}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiCode />
          </Box>
          <Box variant="codeBlock.code" className={isOpen ? "open" : ""}>
            <pre>{children}</pre>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CodeBlock
