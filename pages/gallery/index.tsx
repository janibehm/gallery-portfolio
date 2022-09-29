import React from "react";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Modal from "../../components/Modal";
import NavBar from "../../components/NavBar";

//Fetching image data from the database
export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}

//Image types
type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// BlurImage function

function BlurImage({ image, setSelectedImg }: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group">
      <div
        className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
        onClick={() => setSelectedImg(image.imageSrc)}
      >
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  );
}

//Rendering the gallery

export default function Gallery({
  images,
}: {
  setSelectedImg: any;
  images: Image[];
}) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage
              key={image.id}
              image={image}
              setSelectedImg={setSelectedImg}
            />
          ))}

          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </div>
    </div>
  );
}
