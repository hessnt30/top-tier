"use client";

import { createUser } from "@/server/actions";

export default function CreateUser({ email }: { email: string }) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const displayName = formData.get("displayName") as string;

    const created = createUser({
      email: email,
      display_name: displayName,
    });

    console.log(created);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Display Name</label>
      <input
        name="displayName"
        type="text"
        placeholder="display name"
        className="border rounded p-2"
      />
      <button
        type="submit"
        className="border rounded-full px-6 py-2 bg-green-300 hover:cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
