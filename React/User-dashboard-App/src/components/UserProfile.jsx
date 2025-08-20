import { useNavigate } from "react-router-dom";
function UserProfile() {
  const navigate = useNavigate();
  return (
    <>
      <h3>👤 Profile Information</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default UserProfile;
