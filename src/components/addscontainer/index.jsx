function Addscard(props) {
  return (
    <div className="w-full p-1 rounded-[10px] overflow-hidden">
      <div className="transition-all duration-300 hover:scale-102">
        <img
          src={props.image}
          alt="Advertisement"
          className="w-full rounded-[10px]"
        />
      </div>
    </div>
  );
}

export default Addscard;
