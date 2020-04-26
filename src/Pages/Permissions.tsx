import React from "react"
import { useSelector } from "react-redux"

import {
  Box,
  Button,
  Container,
  Heading,
  PermissionFormContainer,
  Section,
  Text,
} from "Components"
import { selectAllPermissionsDecided } from "Features/permission"

import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const PermissionsPage: React.FC = () => {
  const allPermissionsDecided = useSelector(selectAllPermissionsDecided)

  return (
    <>
      <Section>
        <Container>
          <Heading as="h2" variant="heading.h2">
            Permissions.
          </Heading>
          <Text>
            We require some permissions in order to use the application as
            intended. You can choose to accept any many as you want. Reasons for
            why we need each one are listed too.
          </Text>
        </Container>
        <Container>
          <PermissionFormContainer />
        </Container>
        {allPermissionsDecided && (
          <Container>
            <Text>
              By clicking continue, you agree to use, and not abuse, the
              application. You also agree to abide by other privacy stuff. Note
              that all software here is without warranty and we hold no
              liability for any issues that can go wrong.
            </Text>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: "max-content" }}
            >
              <Link to="/question">
                <Box variant="styles.a">
                  <Button IconComponent={FiChevronRight}>Continue</Button>
                </Box>
              </Link>
            </motion.div>
          </Container>
        )}
      </Section>
    </>
  )
}

export default PermissionsPage
