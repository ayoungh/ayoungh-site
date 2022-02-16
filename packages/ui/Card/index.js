

const Card = ({classes, children}) => {

    return (
      <div className={classes}>
        {children}
      </div>
    );
}

export default Card;