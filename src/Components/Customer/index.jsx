import { Link, useParams } from "react-router-dom";
import { members } from "../Members";

const Customer = () => {
  const { id } = useParams();
  const clickedMember = members.find(member =>
    member.id === id  
  )
  return <div>
      <h2>{clickedMember.type === "pj" ? "Detalhes da empresa" : "Detalhes do cliente"}</h2>
      <p>Nome: {clickedMember.name}</p>
      <Link to="/">Voltar</Link>
  </div>
};

export default Customer