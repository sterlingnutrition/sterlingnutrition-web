import React from "react"

const Content = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-subtitle font-elegant mb-4">Terms of Service</h2>
        <p className="text-body-sm mb-4">
          {
            "Welcome to Sterling Nutrition. By accessing our website and purchasing our premium nutritional supplements, you agree to comply with these terms."
          }
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          Product Information
        </h3>
        <p className="text-body-sm mb-4">
          {
            "All nutritional supplements sold by Sterling Nutrition (including Goli Ashwagandha Gummies, Black Seed Oil, and Haila Wellness products) are for general wellness only. These statements have not been evaluated by medical authorities."
          }
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">Order Processing</h3>
        <p className="text-body-sm mb-4">
          {
            "We process orders within 1-2 business days. For Sri Lankan customers, delivery typically takes 3-5 business days via our trusted courier partners."
          }
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">
          Intellectual Property
        </h3>
        <p className="text-body-sm">
          {
            "All product names, logos, and content on this site are property of Sterling Nutrition or our brand partners (Goli, Hab Shifa, Immuneti). Unauthorized use is prohibited."
          }
        </p>
      </section>

      <section>
        <h3 className="text-subtitle-sm font-elegant mb-3">Contact</h3>
        <p className="text-body-sm">
          For any legal inquiries, please contact us at{" "}
          <span className="font-medium">+94 77 123 4567</span> or email{" "}
          <span className="font-medium">legal@sterlingnutrition.lk</span>
        </p>
      </section>
    </div>
  )
}

export default Content
