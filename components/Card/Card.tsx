import { useRouter } from "next/router";
import styles from "./Card.module.css";

interface Card {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: {
    url: string;
    alt: string;
  };
}

const Card = ({ id, name, phone, email, image }: Card) => {
  const router = useRouter();

  return (
    <div className={styles["card"]} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles["card-header"]}>
        <img src={image.url} alt={image.alt} className={styles["card-img"]} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
