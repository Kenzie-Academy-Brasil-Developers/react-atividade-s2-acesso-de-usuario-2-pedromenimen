import { Link } from "react-router-dom";
import { members } from "../Members";
import "./style.css"

const Home = () => {
  return(
    <div>
      {members.map((member) => (
        <p key={member.id}>
            <Link className="link"
              to={
                member.type === "pj"
                  ? `/company/${member.id}`
                  : `/customer/${member.id}`
              }
            >
              {member.name}
            </Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
