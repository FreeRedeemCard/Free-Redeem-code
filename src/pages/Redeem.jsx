import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateCode } from "../utils/codeGenerator";

const getBrandLogo = (brand) => {
  const logos = {
    Flipkart: "https://logo.clearbit.com/flipkart.com",
    Amazon: "https://logo.clearbit.com/amazon.com",
    "Google Play": "https://logo.clearbit.com/play.google.com",
    Xbox: "https://logo.clearbit.com/xbox.com",
    PlayStation: "https://logo.clearbit.com/playstation.com"
  };
  return logos[brand] || "";
};

const Redeem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { giftCard: initialGiftCard, code: existingCode } = location.state || {};
  const [giftCard, setGiftCard] = useState(initialGiftCard || "");
  const [code, setCode] = useState(existingCode || "");
  const [pin, setPin] = useState("");
  const [redeemAd, setRedeemAd] = useState("");

  useEffect(() => {
    const storedCode = localStorage.getItem("redeemCode");
    const storedBrand = localStorage.getItem("redeemBrand");
    const storedRedeemAd = localStorage.getItem("redeemAd");
    if (storedCode && storedBrand) {
      setCode(storedCode);
      setGiftCard(storedBrand);
    } else if (!existingCode) {
      const { code: newCode, pin: newPin } = generateCode(giftCard);
      setCode(newCode);
      setPin(newPin);
      localStorage.setItem("redeemCode", newCode);
      localStorage.setItem("redeemBrand", giftCard);
    }
    setRedeemAd(storedRedeemAd);
  }, [existingCode, giftCard]);

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="card border-0 shadow-lg" style={{ width: "600px" }}>
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4">
            <img 
              src={getBrandLogo(giftCard)} 
              alt={giftCard} 
              className="me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <h2 className="mb-0 fw-bold text-primary">{giftCard} Gift Card</h2>
          </div>

          <div className="card bg-gradient border-0 mb-4" 
               style={{
                 background: "linear-gradient(45deg, #f3f4f6 0%, #fff 100%)",
                 boxShadow: "0 2px 15px rgba(0,0,0,0.1)"
               }}>
            <div className="card-body">
              <div className="small text-muted mb-2">Redeem Code</div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="fs-4 font-monospace fw-bold">{code}</span>
                <button 
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => navigator.clipboard.writeText(code)}
                >
                  Copy
                </button>
              </div>
              
              {pin && (
                <div className="mt-3">
                  <div className="small text-muted mb-2">PIN</div>
                  <div className="fs-4 font-monospace fw-bold">{pin}</div>
                </div>
              )}
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: redeemAd }} />

          <div className="alert alert-info small mb-0">
            <i className="bi bi-info-circle me-2"></i>
            Keep this code safe. It can only be redeemed once.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;