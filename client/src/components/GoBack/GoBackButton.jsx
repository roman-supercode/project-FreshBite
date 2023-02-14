import { useNavigate } from "react-router-dom";
import previous from "../../assets/previous.svg";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)}>
      <img src={previous} alt="go back icon" />
    </div>
  );
}

export default GoBackButton;
