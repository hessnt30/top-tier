import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div>
      {session.user.image && (
        <Image
          src={session.user.image}
          alt="User Avatar"
          height={20}
          width={20}
        />
      )}
      Test
    </div>
  );
}
