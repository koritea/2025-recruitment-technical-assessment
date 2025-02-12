import page from "@/styles/page.module.css";

const BuildingTile = ({
  name,
  code,
  rooms,
}: {
  name: string;
  code: string;
  rooms: number;
}) => {
  return (
    <div
      style={{ backgroundImage: `url('/assets/${code}.webp')` }}
      className={page.tile}
    >
      <div className={page["rooms-available"]}>
        <div className={page.available} />
        <p>{rooms} rooms available</p>
      </div>
      <div className={page["building-name"]}>{name}</div>
    </div>
  );
};

export default BuildingTile;
