import BuildingTile from "@/components/BuildingTile";
import FilterBar from "@/components/FilterBar";
import Navbar from "@/components/Navbar";
import styles from "@/styles/page.module.css";

const buildings = [
  ["AGSM", "agsm"],
  ["Ainsworth Building", "ainsworth"],
  ["Anita B Lawrence Centre", "anitab"],
  ["Biological Sciences", "biologicalScience"],
  ["Biological Sciences (West)", "biologicalScienceWest"],
  ["Blockhouse", "blockhouse"],
  ["Business School", "businessSchool"],
  ["Civil Engineering Building", "civilBuilding"],
  ["Colombo Building", "colombo"],
  ["Computer Science & Eng (K17)", "cseBuilding"],
];

const availability = [9, 16, 44, 6, 8, 42, 18, 8, 5, 7];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.screen}>
        <FilterBar />
        <div className={styles.tiles}>
          {buildings.map((b, index) => (
            <BuildingTile name={b[0]} code={b[1]} rooms={availability[index]} />
          ))}
        </div>
      </div>
    </>
  );
}
