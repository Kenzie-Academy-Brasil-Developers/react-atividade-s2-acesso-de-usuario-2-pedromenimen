import { Link, useParams } from "react-router-dom"
import members from "../../utils/Members"

const Customer = () => {
  const { id } = useParams();
  const clickedMember = members.find(member =>
    member.id === id
  )
  return <>
      <h2>Detalhes do cliente</h2>
      <p>Nome: {clickedMember.name}</p>
      <Link to="/">Voltar</Link>
  </>
};

export default Customer