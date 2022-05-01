import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import { Data } from "../api/cats";

export default () => {
  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    return data;
  };
  const [cats, setCats] = useState([]);

  useEffect(() => {
    (async () => {
      const cats = await fetchCats();
      setCats(cats);
    })();
  }, [fetchCats]);

  return (
    <Layout>
      <div className="d-flex gap-4">
        {cats.map((cat: Data) => (
          <Card key={cat.id} {...cat} />
        ))}
      </div>
    </Layout>
  );
};
