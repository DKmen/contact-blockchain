"use client";

import { useContractWrite, useAccount } from "wagmi";
import Contract from "../../contract/Contact.json";

import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppDispatch } from "@/data/store";
import { useDispatch } from "react-redux";

import { addContact } from "@/data/slice/contact.slice";

export default function AddContact() {
  const dispatch = useDispatch<AppDispatch>();
  const { address, isConnecting, isDisconnected } = useAccount();
  const addContactToBlockChain = useContractWrite({
    address: process.env.contract?.toString() as any,
    abi: Contract.abi,
    functionName: "addContact",
  });

  const [openForm, setOpenForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("");

  return (
    <div className="flex flex-row items-center justify-between p-4 w-full border-solid border-b-2 border-black">
      <span className="text-3xl font-bold">Contact List</span>
      <div className="flex flex-row space-x-6 items-center justify-center">
        <ConnectButton />
        <Button
          onClick={() => {
            setOpenForm(true);
          }}
        >
          Add Contact
        </Button>
      </div>
      <Modal
        title="Add Contact"
        open={openForm}
        onOk={async () => {
          await addContactToBlockChain.writeAsync({
            args: [firstName, secondName, contact, countryCode],
          });
          setFirstName("");
          setSecondName("");
          setCountryCode("");
          setContact("");
          dispatch(
            addContact({
              sender: address || "",
              firstName,
              secondName,
              contact,
              countryCode,
            })
          );
          setOpenForm(false);
        }}
        onCancel={() => {
          setFirstName("");
          setSecondName("");
          setCountryCode("");
          setContact("");
          setOpenForm(false);
        }}
        width={1000}
      >
        <div className="flex flex-col items-center justify-center space-y-2 w-full">
          <Input
            placeholder="Enter First Name"
            size="large"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Enter Second Name"
            size="large"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Enter Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            size="large"
            className="w-full"
          />
          <Input
            placeholder="Enter Country Code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            size="large"
            className="w-full"
          />
        </div>
      </Modal>
    </div>
  );
}
