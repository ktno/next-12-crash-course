import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import { Data } from "../api/cats";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    return data;
  };
  const [cat, setCat] = useState<Data>();

  useEffect(() => {
    (async () => {
      const cat = await fetchCat();
      setCat(cat);
    })();
  }, [fetchCat]);

  return (
    <Layout>
      <div className="d-flex gap-4">
        {cat && (
          <div>
            <Card {...cat} />
            <h1>{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
