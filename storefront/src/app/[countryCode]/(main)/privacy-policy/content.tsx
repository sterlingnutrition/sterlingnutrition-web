import React from "react"

const Content = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-subtitle font-elegant mb-4">Privacy Policy</h2>
        <p className="text-body-sm mb-4">
          At Sterling Nutrition, we protect your personal information with the
          same care we put into our products.
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          Information We Collect
        </h3>
        <p className="text-body-sm mb-4">
          When you purchase Goli gummies, Black Seed Oil, or other supplements,
          we collect:
        </p>
        <ul className="text-body-sm space-y-2 list-disc pl-5">
          <li>Contact details for order processing</li>
          <li>Payment information (processed securely)</li>
          <li>Delivery addresses for our courier partners</li>
          <li>Product preferences to improve your experience</li>
        </ul>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          How We Use Your Data
        </h3>
        <p className="text-body-sm mb-4">Your information helps us:</p>
        <ul className="text-body-sm space-y-2 list-disc pl-5">
          <li>Process orders for our nutritional supplements</li>
          <li>Provide personalized product recommendations</li>
          <li>
            Offer exceptional customer service (rated 4.9/5 by our customers)
          </li>
          <li>
            Notify you about new arrivals like Colla White or Electrolytes
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          Security Measures
        </h3>
        <p className="text-body-sm">
          We implement SSL encryption and secure payment gateways to protect
          your transactions, maintaining the same standard of purity we apply to
          our Black Seed Oil.
        </p>
      </section>
    </div>
  )
}

export default Content
