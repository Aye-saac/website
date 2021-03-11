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
import {
  selectAllPermissionsDecided,
  selectPermission,
} from "Features/permission"

import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

import styles from "./Permissions.module.css"

const PermissionsPage: React.FC = () => {
  const allPermissionsDecided = useSelector(selectAllPermissionsDecided)
  const { camera, microphone } = useSelector(selectPermission)
  const liveVersionAvailable =
    camera.status === "granted" && microphone.status === "granted"

  const buttonMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

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
              By clicking Demo or Live, you agree to use, and not abuse, the
              application. You also agree to abide by other privacy stuff. Note
              that all software here is without warranty and we hold no
              liability for any issues that can go wrong.
              <br />
              <br />
              You must grant microphone and camera permission to access the live
              version
            </Text>
            <Box variant="components.permissionForm.buttonContainer">
              <motion.div {...buttonMotion} className={styles.demoButton}>
                <Link to="/question">
                  <Box variant="styles.a">
                    <Button IconComponent={FiChevronRight}>Demo</Button>
                  </Box>
                </Link>
              </motion.div>
              {!liveVersionAvailable && <div />}
              <motion.div {...(liveVersionAvailable ? buttonMotion : {})}>
                <Link to="/live">
                  <Box variant="styles.a">
                    <Button
                      variant={
                        liveVersionAvailable ? "primary" : "outlineDisabled"
                      }
                      disabled={!liveVersionAvailable}
                      IconComponent={FiChevronRight}
                    >
                      Live
                    </Button>
                  </Box>
                </Link>
              </motion.div>
            </Box>
          </Container>
        )}
      </Section>
    </>
  )
}

export default PermissionsPage
