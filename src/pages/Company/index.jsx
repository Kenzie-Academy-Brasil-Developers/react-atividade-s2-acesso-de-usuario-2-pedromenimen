import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import members from "../../utils/Members";

const Company = () => {
  const { id } = useParams();
  const clickedMember = members.find(
    (member) => member.id === id
  );
  return (
    <>
      <h2>Detalhes da empresa</h2>
      <p>Nome: {clickedMember.name}</p>
      <Link to="/">Voltar</Link>
    </>
  );
};

export default Company;
