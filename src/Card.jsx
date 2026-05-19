export default function Card({ pic }) {
  return (
    <div className="card scroll-anim">
      <img src={pic} className="pic" />

      <div className="overlay">
        <h2>shop now</h2>
      </div>
    </div>
  );
}