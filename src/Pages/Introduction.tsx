import React from "react"

import { Box, Button, Container, Heading, Section, Text } from "Components"

import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const wrapperVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
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

const IntroductionPage: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={wrapperVariants}
          >
            <motion.div custom={0} variants={variants}>
              <Heading as="h1" variant="heading.projectName">
                Ayesaac.
              </Heading>
            </motion.div>
            <motion.div custom={1} variants={variants}>
              <Text as="p" variant="heading.projectSummary">
                An end-to-end aide for blind and partially sighted people.
              </Text>
            </motion.div>
            <motion.div custom={2.5} variants={variants}>
              <Text as="p">
                This is just a demonstration as part of a project for
                Heriot-Watt University. The full source code for this project
                and the system are available here. We do not store any data as
                this is just for demonstration purposes.
              </Text>
            </motion.div>
            <motion.div
              custom={3.4}
              variants={variants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: "max-content" }}
            >
              <Link to="/permissions">
                <Box variant="styles.a">
                  <Button IconComponent={FiChevronRight}>Continue</Button>
                </Box>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

export default IntroductionPage
