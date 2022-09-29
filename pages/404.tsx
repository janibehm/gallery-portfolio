import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

//Not found page

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="text-center mt-16">
      <h1> Hups!!</h1>
      <h3>Sivua ei löydy</h3>
      <p>
        Takaisin etusivulle{" "}
        <Link href="/">
          <a>here</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
