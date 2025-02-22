import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [giftCard, setGiftCard] = useState("Amazon");
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [hasWatchedAd, setHasWatchedAd] = useState(false);
  const [homeContent, setHomeContent] = useState("");
  const [adLink, setAdLink] = useState("");
  const [homeAd, setHomeAd] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const existingCode = localStorage.getItem("redeemCode");
    const existingBrand = localStorage.getItem("redeemBrand");
    if (existingCode && existingBrand) {
      setIsRedeemed(true);
      setGiftCard(existingBrand);
    }
    const visits = localStorage.getItem("visits");
    localStorage.setItem("visits", visits ? parseInt(visits, 10) + 1 : 1);
    const storedHomeContent = localStorage.getItem("homeContent");
    const storedAdLink = localStorage.getItem("adLink");
    const storedHomeAd = localStorage.getItem("homeAd");
    setHomeContent(storedHomeContent || "Get Your ₹500 Redeem Code");
    setAdLink(storedAdLink);
    setHomeAd(storedHomeAd );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasWatchedAd) {
      Swal.fire({
        icon: 'info',
        title: 'Watch Ad',
        text: 'Please watch the ad to get your redeem code.',
        confirmButtonText: 'Watch Ad'
      }).then(() => {
        window.open(adLink, "_self");
        setHasWatchedAd(true);
      });
      return;
    }
    const existingCode = localStorage.getItem("redeemCode");
    const existingBrand = localStorage.getItem("redeemBrand");
    if (existingCode && existingBrand) {
      Swal.fire({
        icon: 'info',
        title: 'Code Already Redeemed',
        text: 'You have already redeemed a code. Please use the existing code.',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate("https://freeredeemcard.github.io/Free-Redeem-code/redeem", { state: { giftCard: existingBrand, code: existingCode } });
      });
    } else {
      const clicks = localStorage.getItem("clicks");
      localStorage.setItem("clicks", clicks ? parseInt(clicks, 10) + 1 : 1);
      navigate("https://freeredeemcard.github.io/Free-Redeem-code/redeem", { state: { giftCard } });
    }
  };

  return (
    <div  
         style={{display:"flex",alignItems:"center",justifyContent:"center", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",height:"100vh",
             }}>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center">
          <div className="card border-0" style={{
            width: "100%",
            height: "400px",
            maxWidth: "700px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
            borderRadius: "20px",
            padding:"20px"
          }}>
            <div className="card-body   ">
              <h1 className="text-center mb-4 fw-bold" 
                  style={{ color: "#2c3e50", paddingTop:"20px" }}>
                {homeContent}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: homeAd }} />
              <form onSubmit={handleSubmit}>
                <div className="mb-4"
                style={{display:"flex",
                flexDirection:"column",
                gap:"10px"}}>
                  <label className="form-label font-weight-bold">Select Gift Card:</label>
                  <select
                    value={giftCard}
                    onChange={(e) => setGiftCard(e.target.value)}
                    className="form-select form-select-lg border-2"
                    style={{ borderRadius: "12px", backgroundColor: "#f8fafc" }}
                    disabled={isRedeemed}
                  >
                    <option value="Amazon">Amazon</option>
                    <option value="Google Play">Google Play</option>
                    <option value="Flipkart">Flipkart</option>
                    <option value="Xbox">Xbox</option>
                    <option value="PlayStation">PlayStation</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 mt-4"
                  style={{
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    padding: "12px"
                  }}
                >
                  Get Code
                </button>
              </form>
              <p className="text-center mt-4 small text-muted">
                {/* This website is only for fun purposes. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;