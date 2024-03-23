export const Countrie = ({ name, flags }) => {
    return (
      <div>
          <p>{name.common}</p>
          <img src={flags.png}></img>
      </div>
    );
  };