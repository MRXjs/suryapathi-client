import Image from "next/image";
import React from "react";

const BankAccountCard = ({ method }) => {
  return (
    <div className="p-10 m-10 shadow-xl">
      <Image
        alt={method.name}
        src={method.img}
        className="mx-auto my-10 rounded-md w-72"
      />

      <div className="flex flex-col items-center justify-center mb-5 ">
        <div>
          <div className="text-xl">
            <span className="font-bold ">බැංකුව :</span> {method.name}
          </div>
          <div className="text-xl">
            <span className="font-bold ">ශාකාව :</span> {method.branch}
          </div>
          <div className="text-xl">
            <span className="font-bold ">ගිණුම් අංකය :</span> {method.accountNo}
          </div>
          <div className="text-xl">
            <span className="font-bold ">නම :</span> {method.accountName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountCard;
