import React from "react"
import ShowcaseSection from "./components/showcase-section"

export type ShowcaseProduct = (typeof SHOWCASE_PRODUCTS)[number]

const SHOWCASE_PRODUCTS = [
  {
    id: 1,
    subtitle: "Trusted since 1983",
    title: "Dependable products",
    titlealt: "Exceptional service",
    description:
      "For 20 years, we have helped individuals like you achieve various health and fitness goals by offering top-quality dietary and nutritional supplements, coupled with unparalleled personalized attention.",
    url: "/products/colla-white-plus",
    image: "/showcase/showcase-1.webp",
  },
]

const ShowcaseProducts = () => {
  return SHOWCASE_PRODUCTS.map((product, index) => (
    <ShowcaseSection {...product} key={index} />
  ))
}

export default ShowcaseProducts
