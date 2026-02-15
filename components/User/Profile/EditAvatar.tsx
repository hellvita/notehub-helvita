"use client";

import { useState, useEffect } from "react";
import IcButtonEditImg from "@/components/parts/IcButtonEditImg/IcButtonEditImg";
import toast from "react-hot-toast";

interface EditAvatarProps {
  setAvatar: (file: File) => void;
}

export default function EditAvatar({ setAvatar }: EditAvatarProps) {
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError("");

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Only images allowed");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setError("Max file size 2MB");
        return;
      }
      setAvatar(file);
    }
  };

  useEffect(() => {
    if (error) {
      toast(
        error ? error : "Could not update profile picture, please try again...",
      );
    }
  }, [error]);

  return (
    <>
      <input
        id="avatar-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="avatar-input">
        <IcButtonEditImg />
      </label>
    </>
  );
}
