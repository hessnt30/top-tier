import { auth } from "@/auth";
import CreateUser from "@/components/create-user";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import UserAvatar from "@/components/user-avatar";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <div>
      {!session?.user && <SignIn />}
      {session?.user && <p>{session.user.email}</p>}
      {session?.user && <SignOut />}
      <UserAvatar />

      <CreateUser email={session?.user?.email || ""} />
    </div>
  );
}
