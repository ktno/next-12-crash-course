import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <h1 className="display-4">Cats World</h1>
      <p className="lead">
        Find your new best friend today. Adpot a wonder cat
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classNamees for typography and spacing to space content
        out within the larger container.
      </p>
      <a
        className="btn btn-primary btn-lg"
        href="#"
        role="button"
        onClick={() => router.push("/cats")}
      >
        Start looking
      </a>
    </div>
  );
};
