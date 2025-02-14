
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { formData, campId, startDate, totalPrice, campName } = location.state || {};

  if (!formData) {
    navigate('/');
    return null;
  }

  // Placeholder for payment processing
  const handlePayment = () => {
    toast({
      title: "Payment Successful!",
      description: "Your registration has been confirmed. Check your email for details.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8">
            <h1 className="text-3xl font-bold mb-6 font-general-sans">Payment Details</h1>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Camp:</span>
                    <span className="font-medium">{campName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date:</span>
                    <span className="font-medium">
                      {new Date(startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Number of Students:</span>
                    <span className="font-medium">{formData.students.length}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Payment form - This is a placeholder, integrate with your preferred payment provider */}
              <div className="space-y-4">
                <button
                  onClick={handlePayment}
                  className="w-full px-4 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium"
                >
                  Pay ${totalPrice}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
