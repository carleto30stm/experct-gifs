// crea una funcion suma

// eslint-disable-next-line react/prop-types
export const GifItems = ({title, url}) => (
  <div className="card">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);

