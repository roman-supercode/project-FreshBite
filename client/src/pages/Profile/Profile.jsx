import "./Profile.css";
import cameraIcon from "../../assets/camera-icon.svg";
import GoBackButton from "../../components/GoBack/GoBackButton";

const Profile = () => {
  return (
    <div className="profileContainer">
      <section className="topSection">
        <div className="topDiv">
          <GoBackButton />
          <h2>Mein Profil</h2>
        </div>
        <div className="profile">
          <img
            src={cameraIcon}
            alt="profile camera icon"
            className="cameraIcon"
          />
        </div>
      </section>
      <section className="bottomSection">
        <article>
          <p className="fix">Name</p>
          <p className="variabel">{"Anna Flowers"}</p>
        </article>
        <article>
          <p className="fix">E-Mail-Adresse</p>
          <p className="variabel">{"anna@gmail.com"}</p>
        </article>
        <article>
          <p className="fix">Lieferadresse</p>
          <p className="variabel">{"Buxtehuderstraße 1"}</p>
          <p className="variabel">{"21073 Hamburg"}</p>
        </article>
        <article>
          <p className="fix">Telefonnummer</p>
          <p className="variabel">{"0177 - 45678900"}</p>
        </article>
      </section>
      <button className="btnProfil">Profil bearbeiten</button>
    </div>
  );
};
export default Profile;
