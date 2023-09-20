import React from "react";
import Image from "next/image";

const UIDB_IMAGE_URL = "https://static.ui.com/fingerprint/ui/icons";

function Card({ data }) {
  return (
    <>
      return (
      <div
        key={data.id}
        className="flex flex-col pt-3 border border-[#dbdce1] rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover"
      >
        <Image
          className="self-center"
          alt={data.title}
          height={150}
          width={150}
          src={data.image}
          style={{ objectFit: "contain", height: 150 }}
        />
        <div className="mt-3 ml-3 mb-3">
          <div>{data.title}</div>
          <div className="text-sm text-gray-600">{data.category}</div>
        </div>
      </div>
      );
    </>
  );
}

export default Card;
