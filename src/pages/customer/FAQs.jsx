import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const FAQs = () => {
  // Track open question per category
  const [openQuestions, setOpenQuestions] = useState({});

  // {cat: 0, question: 1}
  const handleDropDown = (catIndex, qIndex) => {
    setOpenQuestions((prev)=>{

      // checking if some questions are already open 
      const prevOpen = prev[catIndex] || [];
      // checking for current qindex
      const isOpen = prevOpen.includes(qIndex);

      return{
        ...prev, 
        [catIndex]: isOpen ?
        prevOpen.filter((q)=> q!== qIndex) // remove if exists
        : [...prevOpen, qIndex] // return all recently clicked
      }

    })
  };

  const faqs = [
    {
      h:"Shipping & Delivery",
      qas:[
        {
          q:"1. How long does the delivery take?",
          a:"Orders are usually processed within 1–2 business days, and standard delivery takes about 5–7 business days depending on your location."
        },
        {
          q:"2. Do you offer international shipping",
          a:"At the moment we only ship within India, but international shipping will be available soon."

        },
        {
          q:"3. Can I Track my order?",
          a:"Yes, once your order is shipped, you will receive a tracking link by email or SMS so you can follow its journey."

        },
        {
          q:"4. What are the shipping charges?",
          a:"We offer free standard shipping across India for all orders above a minimum purchase value. For smaller orders, a nominal shipping fee may apply."
        }
      ]
    },
    {

      h:"Returns & Exchanges",
      qas:[
        {
          q:"5. Can I return or exchange my order?",
          a:"Yes, returns and exchanges are accepted within 7 days of delivery. Items must be unused, unworn, and in their original packaging."
        },
        {
          q:"6. How do I request a return?",
          a:"Simply contact us at ali.monish260@gmail.com with your order details, and our team will guide you through the process."

        },
        {
          q:"7. Are there any items that cannot be returned?",
          a:"For hygiene and safety reasons, items like accessories or customized products may not be eligible for return."
        },
        {
          q:"8. How long does it take to process a refund?",
          a:"Refunds are usually processed within 7–10 business days once the returned item has been received and inspected."

        }
      ]
    },
    {
      h:"Sizing & Fit",
      qas:[
        {
          q:"9. How do I choose the right size?",
          a:"Please refer to our Size Guide available on each product page, which provides accurate measurements to help you find your best fit."
        },
        {
          q:"10. What if the size I ordered doesn’t fit?",
          a:"Please refer to our Size Guide available on each product page, which provides accurate measurements to help you find your best fit."
        },
        {
          q:"10. What if the size I ordered doesn’t fit?",
          a:"You can request an exchange within 7 days of delivery, subject to availability of the size."
        },
        {
          q:"11. Do you offer custom sizing?",
          a:"Yes, for select products we provide custom tailoring. Please reach out to our team before placing your order for assistance."
        }
      ]
    },

    {
      h:"Payment & Security",
      qas:[
        {
          q:"12. What payment methods do you accept?",
          a:"We accept all major credit and debit cards, UPI, net banking, and Cash on Delivery (COD)."
        },
        {
          q:"13. Is my payment information secure?",
          a:"Absolutely. All transactions are processed through trusted, encrypted payment gateways to ensure complete safety."
        },
        {
          q:"14. Do you offer EMI or installment options?",
          a:"For higher-value purchases, EMI options may be available through select banks at checkout."
        },
      ]
    },
    {
      h:"Product Care",
      qas:[
        {
          q:"15. How should I care for my clothes?",
          a:"For best results, always follow the care instructions provided on the product label. Hand wash or gentle machine wash is recommended for traditional fabrics, and dry cleaning is advised for heavily embroidered or delicate pieces."
        },
        {
          q:"16. Are the products authentic?",
          a:"Every product is carefully handcrafted and curated by artisans, ensuring genuine quality and authenticity."
        },
        {
          q:"17. Will the fabric color fade?",
          a:"Our garments are made using high-quality fabrics and dyes. With proper care as per the instructions, the colors will remain vibrant."
        },{
          q:"18. Can I alter the garments after purchase?",
          a:"Yes, most of our products can be altered by a local tailor if needed. However, we also offer assistance for minor adjustments on request."
        }
      ]
    }
]

  
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 text-center">
      <h1 className="text-2xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="bg-gray-50 p-8 shadow-md text-left">
        {faqs.map((category, catIndex) => (

          <div key={catIndex}>
            <h2 className="font-semibold text-lg py-4">{category.h}</h2>

            {category.qas.map((qa, qIndex) => (
              <div
                key={qIndex}
                className="cursor-pointer"
                onClick={() => handleDropDown(catIndex, qIndex)}
              >
                <div className="flex items-center justify-between">
                  <p className="py-2">{qa.q}</p>
                  <ChevronDoubleDownIcon
                    className={`w-4 transition-transform ${
                      openQuestions[catIndex] === qIndex ? "rotate-180" : ""
                    }`}
                  /> 
                </div>

                {openQuestions[catIndex]?.includes(qIndex) && (
                  <p className="py-2 text-black/70">{qa.a}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
