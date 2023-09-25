"use client";

import { selectContact } from "@/data/slice/contact.slice";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contactList = useSelector(selectContact).contacts;

  return (
    <>
      <div className="flex-1 w-full grid grid-cols-6 gap-4 p-4">
        {contactList.map((contact) => {
          return (
            <>
              <div className="w-full flex flex-col items-center justify-center p-4 space-y-2 aspect-square border border-solid border-black rounded">
                <div className="flex flex-col items-start space-y-1">
                  <span className="text-xl font-semibold">
                    {contact.firstName} {contact.secondName}
                  </span>
                  <span className="text-sm font-medium">
                    +{contact.countryCode} {contact.contact}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
