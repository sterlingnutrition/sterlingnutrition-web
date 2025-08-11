import React from "react"

const Content = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-subtitle font-elegant mb-4">Return Policy</h2>
        <p className="text-body-sm mb-4">
          We stand behind our premium supplements with a 30-day satisfaction
          guarantee.
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">Eligibility</h3>
        <p className="text-body-sm mb-4">
          Returns accepted within 30 days for:
        </p>
        <ul className="text-body-sm space-y-2 list-disc pl-5 mb-4">
          <li>Unopened Goli, Haila Wellness, or Immuneti products</li>
          <li>Damaged or defective items (rare with our quality control)</li>
          <li>Incorrect shipments (we'll cover return shipping)</li>
        </ul>
        <p className="text-body-sm-playfair italic">
          Note: Opened supplements cannot be returned for health safety reasons.
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          Sri Lanka Return Process
        </h3>
        <ol className="text-body-sm space-y-2 list-decimal pl-5 mb-4">
          <li>
            Contact our team at{" "}
            <span className="font-medium">+94 77 123 4567</span> within 30 days
          </li>
          <li>Provide your order number and product details</li>
          <li>We'll arrange pickup through our courier network</li>
          <li>Refund processed within 5 business days after inspection</li>
        </ol>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">Exchange Policy</h3>
        <p className="text-body-sm">
          Prefer a different supplement? We offer free exchanges for unopened
          products within Sri Lanka. Popular exchanges include our Apple Cider
          Vinegar for Colla White or vice versa.
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          Quality Assurance
        </h3>
        <p className="text-body-sm">
          Every Sterling Nutrition product undergoes rigorous testing. If you
          have concerns about any supplement (including our best-selling Black
          Seed Oil), our wellness experts are available at{" "}
          <span className="font-medium">support@sterlingnutrition.lk</span>.
        </p>
      </section>
    </div>
  )
}

export default Content
