import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, Calendar, User, ShoppingBag } from "lucide-react";

const Success = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [searchParams] = useSearchParams();
  const [session, setSession] = useState(null);
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionId) {
      getPaymentDetail();
    }
  }, [sessionId]);

  async function getPaymentDetail() {
    try {
      if (sessionId) {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/order`,
          {
            params: {
              session_id: sessionId,
            },
          }
        );
        setPaymentData(response.data);
        setSession(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="flex gap-2 items-end bg-white-300 rounded-[40px] overflow-hidden px-6 bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 p-4 text-white text-md w-full max-w-[450px] shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <CheckCircle className="h-16 w-16 text-green-400" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
          <p className="mb-6 opacity-90">
            Your order has been confirmed and is now being processed.
          </p>

          <div className="w-full border-t border-white/20 my-4"></div>

          <div className="w-full space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 opacity-80" />
                <span className="opacity-80">Order ID:</span>
              </div>
              <span className="font-medium">{paymentData?.data?.order_id}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 opacity-80" />
                <span className="opacity-80">Customer:</span>
              </div>
              <span className="font-medium">
                {paymentData?.data?.name || "Not provided"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 opacity-80" />
                <span className="opacity-80">Date:</span>
              </div>
              <span className="font-medium">
                {paymentData?.data?.purchased_at}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="opacity-80">Total:</span>
              </div>
              <span className="font-bold">₹{paymentData?.data?.price}</span>
            </div>
          </div>

          <div className="w-full border-t border-white/20 my-4"></div>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary shadow hover:bg-primary/90 h-9 text-white border border-white px-8 py-3 rounded-[40px] text-[17px]"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
