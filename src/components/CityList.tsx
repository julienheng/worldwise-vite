/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

type Props = {
  cities: {
    id: number;
  }[];
  isLoading: boolean;
};

export default function CityList({ cities, isLoading }: Props) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city: any) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
