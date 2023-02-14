import { useNavigate } from "react-router-dom";
import previous from "../../assets/previous.svg";
import "./GoBackButton.css";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className="goBack">
      <img src={previous} alt="go back icon" className="goBackImg" />
    </div>
  );
}

export default GoBackButton;
