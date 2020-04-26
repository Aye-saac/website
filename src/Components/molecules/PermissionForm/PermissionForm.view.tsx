import React from "react"

import { Box, Container, Heading, Text } from "Components/atoms"

import { motion } from "framer-motion"

const wrapperVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  }),
}

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
  },
}

interface Props {
  title: string
  description: React.ReactNode
  negativeButton: React.ReactNode
  positiveButton: React.ReactNode
  delay?: number
}
const PermissionForm: React.FC<Props> = ({
  title,
  description,
  negativeButton,
  positiveButton,
  delay = 0,
}) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        custom={delay}
        variants={wrapperVariants}
      >
        <Container variant="components.permissionForm.container">
          <motion.div custom={1} variants={variants}>
            <Heading as="h3" variant="components.permissionForm.title">
              {title}
            </Heading>
          </motion.div>
          <motion.div custom={2} variants={variants}>
            <Text as="div" variant="components.permissionForm.description">
              {description}
            </Text>
          </motion.div>
          <Box variant="components.permissionForm.buttonContainer">
            <motion.div
              custom={3}
              variants={variants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {negativeButton}
            </motion.div>
            <motion.div
              custom={3.3}
              variants={variants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {positiveButton}
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default PermissionForm
