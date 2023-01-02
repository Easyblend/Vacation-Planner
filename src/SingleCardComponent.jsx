import { Link } from "react-router-dom";
function SingleCard({ vacation }) {
  const { img, name, id } = vacation;
  return (
    <>
      <Link to={`/carddetail/${vacation.name}`}>
        <div
          key={id}
          className="card"
          style={{
            backgroundImage: `url(${img})`,
          }}>
          <p className="location">{name}</p>
        </div>
      </Link>
    </>
  );
}

export default SingleCard;
