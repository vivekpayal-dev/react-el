import { loadStripe } from "@stripe/stripe-js";
import { Check } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { getPricing } from "@/api/pricing";
import { createCheckoutSession } from "@/api/stripe";
import { useQuery } from "@tanstack/react-query";
// Stripe
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHER_KEY);

//  Zod schema
const Pricing = () => {
  const [priceId, setPriceId] = useState(null);

  // Retrive Prcing 
  const { data: pricing, isLoading, error } = useQuery({
    queryKey: ["pricing"],
    queryFn: getPricing,
  });

  // set Price Id 
  const handleGetPriceId = useCallback((id) => {
    setPriceId(id);
  }, []);

  // Payment
  const handleCheckout = async (id) => {
    try {
      const response = await createCheckoutSession({
        id,
        success_url: "https://el-react-eight.vercel.app/success",
        cancel_url: "https://el-react-eight.vercel.app/failed",
      });

      const { id: sessionId } = response;
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        console.error("Stripe redirection error:", result.error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };
  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error fetching pricing</p>;

  return (
    <div className="max-w-7xl px-3 md:px-12  mx-auto mt-3 pb-5">
      <div className="flex justify-center ">
        <div className="hidden md:block md:w-[40px]"></div>
        <h2 className="text-3xl z-10 text-center text-white mb-10">
          A Perfect Balance of Quality, Quantity & <br /> Price.
        </h2></div>
      <div className="grid gap-2 md:gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white sm:pb-5">
        {pricing?.map((price) => (
          <div
            key={price?.id}
            onClick={() => handleGetPriceId(price.id)}
            className={`overflow-hidden ${price?.label === 'PREMIUM' ? "md:scale-[1.1] z-10" : ""} h-full w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 cursor-pointer hover:border-white transition-border duration-300 ease-in-out ${price?.id === priceId ? 'border !border-white' : ''}`}
          >
            <div className={`${price.label === 'LOBBY PASS' ? 'md:ps-9' : ""} border-white/30 border-b px-6 py-5`}>
              <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">
                {price?.label}
              </span>
              <h4 className="font-bold text-4xl">
                {price?.priceDollar}/<span className="text-sm">{price?.priceRupee}</span>
              </h4>
            </div>
            <div className={`${price?.label === 'LOBBY PASS' ? 'md:ps-9' : ""} px-6 py-6`}>
              <ul className="flex flex-col gap-3">
                {price?.features.map((feature, idx) => (
                  <li className="flex gap-3 item-center" key={idx}>
                    <div className="w-6 h-6 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-full bg-white/30 flex items-center justify-center shrink-0">
                      <Check size={16} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${price?.label === "BASIC EDIT" ? "md:pr-[38px]" : ""} px-6 flex mb-3`}>
              <div className=" flex justify-center w-full">
                <button onClick={() => handleCheckout(price?.id)} className="border-1 w-full text-white bg-white/5 border border-white px-8  font-semibold rounded-[18px] py-[9px] text-[14px] ms-2">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Pricing;
