import React from "react"

import { motion } from "framer-motion"

const IconToggle: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.polyline
      variants={{
        closed: { points: "16,18 22,12 16,6" },
        open: { points: "6,6 12,12 6,18" },
      }}
    />
    <motion.polyline
      variants={{
        closed: { points: "8,6 2,12 8,18" },
        open: { points: "18,18 12,12 18,6" },
      }}
    />
  </svg>
)

export default IconToggle
