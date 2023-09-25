"use client";
import { useEffect } from "react";
import AddContact from "@/components/home/contact";
import ContactList from "@/components/home/contactList";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { AppDispatch } from "@/data/store";
import { useDispatch } from "react-redux";
import { fetchContact } from "@/data/slice/contact.slice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { connector: activeConnector, isConnected } = useAccount();
  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    if (isConnected && Boolean(address)) {
      dispatch(fetchContact(address as string));
    }
  }, [isConnected, address, dispatch]);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      {isConnected ? (
        <>
          <AddContact />
          <ContactList />
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
