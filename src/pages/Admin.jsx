import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [visits, setVisits] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [homeContent, setHomeContent] = useState("");
  const [adLink, setAdLink] = useState("");
  const [homeAd, setHomeAd] = useState("");
  const [redeemAd, setRedeemAd] = useState("");

  useEffect(() => {
    const storedVisits = localStorage.getItem("visits");
    const storedClicks = localStorage.getItem("clicks");
    const storedHomeContent = localStorage.getItem("homeContent");
    const storedAdLink = localStorage.getItem("adLink");
    const storedHomeAd = localStorage.getItem("homeAd");
    const storedRedeemAd = localStorage.getItem("redeemAd");
    setVisits(storedVisits ? parseInt(storedVisits, 10) : 0);
    setClicks(storedClicks ? parseInt(storedClicks, 10) : 0);
    setHomeContent(storedHomeContent || "Get Your ₹500 Redeem Code");
    setAdLink(storedAdLink );
    setHomeAd(storedHomeAd );
    setRedeemAd(storedRedeemAd);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login")
  };

  const handleHomeContentChange = (e) => {
    setHomeContent(e.target.value);
  };

  const handleAdLinkChange = (e) => {
    setAdLink(e.target.value);
  };

  const handleHomeAdChange = (e) => {
    setHomeAd(e.target.value);
  };

  const handleRedeemAdChange = (e) => {
    setRedeemAd(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("homeContent", homeContent);
    localStorage.setItem("adLink", adLink);
    localStorage.setItem("homeAd", homeAd);
    localStorage.setItem("redeemAd", redeemAd);
    alert("Home page content, ad link, and ads updated!");
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="card border-0 shadow-lg" style={{ maxWidth: "600px" }}>
        <div className="card-body p-4">
          <h2 className="mb-4 fw-bold text-primary">Admin Dashboard</h2>
          <div className="mb-3">
            <h5>Total Visits: {visits}</h5>
          </div>
          <div className="mb-3">
            <h5>Total "Get Code" Clicks: {clicks}</h5>
          </div>
          <div className="mb-4">
            <label className="form-label">Home Page Content</label>
            <textarea
              className="form-control"
              value={homeContent}
              onChange={handleHomeContentChange}
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Ad Link</label>
            <input
              type="text"
              className="form-control"
              value={adLink}
              onChange={handleAdLinkChange}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Home Page Ad</label>
            <textarea
              className="form-control"
              value={homeAd}
              onChange={handleHomeAdChange}
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Redeem Page Ad</label>
            <textarea
              className="form-control"
              value={redeemAd}
              onChange={handleRedeemAdChange}
              rows="3"
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-danger mt-2" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
