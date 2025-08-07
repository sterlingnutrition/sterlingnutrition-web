"use client"
import React from "react"
import { cn } from "@lib/utils"
import Image from "next/image"
import Button from "components/ui/ui-button"
import TextReveal from "components/ui/text-reveal"
import { motion, useScroll, useTransform } from "motion/react"
import { ShowcaseProduct } from "../.."
import { useMedia } from "react-use"

const ShowcaseSection = ({
  id,
  title,
  titlealt,
  description,
  subtitle,
  url,
  image,
}: ShowcaseProduct) => {
  // Create a ref for the container
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Use the useScroll hook to track scroll progress within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const isMobile = useMedia("(max-width: 769px)")

  // Always call useTransform unconditionally
  const yTransform = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  // Then conditionally apply the transform
  const y = !isMobile ? yTransform : undefined

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col lg:min-h-screen",
        id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="flex flex-col justify-center w-full p-10 lg:px-16  lg:w-1/2 min-h-96">
        <TextReveal>
          <h2 className="mb-2 italic md:mb-4 text-subtitle-sm font-elegant">
            {subtitle}
          </h2>
          <h1 className="mb-10 !font-bold text-title-sm uppercase ">
            {title} <span className="text-cm-primary">{titlealt}</span>
          </h1>
          <h1 className="mb-10 text-body">{description}</h1>
        </TextReveal>

        <div>
          <Button className="text-foreground">Shop Now</Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-10 md:p-20  relative bg-cm-primary flex items-center justify-center">
        <motion.div
          className="relative w-full max-h-96 bg-cm-primary aspect-[10/16] rounded-3xl"
          style={y ? { y } : {}}
        >
          <Image
            fill
            src={image}
            alt={title}
            style={{ objectFit: "cover" }}
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ShowcaseSection
