"use client";
import Link from "next/link";
import { useState } from "react";

const baseUrl = "https://www.trilliummassage.la/?";

export default function URLMaker(props: any) {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col max-w-md w-full">
      <label htmlFor="createLink" className="mt-2 pb-1">
        Let&apos;s make a new link:
      </label>
      <input
        name="createLink"
        type="text"
        className="mb-4 p-2 text-black"
        value={url}
        onChange={handleChange}
      />
      <Link href={"/?" + url} className="text-primary underline">{baseUrl + url}</Link>
    </div>
  );
}
