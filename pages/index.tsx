import { loginUser } from "@/config/redux/reducers/authentication.reducer";
import {
  setGlobalAlert,
  SeverityLevel,
  finishGlobalLoading,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setGlobalAlert({
        message: "Checking your authentication",
        severity: SeverityLevel.INFO,
        timeout: 5000,
      })
    );
    if (status === "authenticated" && session?.user) {
      const { user } = session;
      dispatch(
        loginUser({
          name: user.name || "",
          email: user.email || "",
          image: user.image || "",
        })
      );
      dispatch(finishGlobalLoading());
      router.push("/dashboard");
    }
  }, [router, status, dispatch, session]);

  useEffect(() => {
    if (status === "unauthenticated") {
      dispatch(finishGlobalLoading());
      router.push("/landing");
    }
  }, [router, status, dispatch]);

  if (status === "loading") {
    dispatch(startGlobalLoading({ message: "Checking your authentication" }));
  }

  return <></>;
};

export default Index;

// return (
//   <main className="h-screen w-full ">
//     <section className="flex items-center justify-center">
//       <Link className="p-3 m-2 bg-blue-500" href="/landing">
//         Landing
//       </Link>
//     </section>

//     <section className="flex items-center justify-center">
//       <Link className="p-3 m-2 bg-blue-500" href="/dashboard">
//         Dashboard
//       </Link>

//       <Link className="p-3 m-2 bg-blue-500" href="/dashboard/books">
//         Books
//       </Link>

//       <Link className="p-3 m-2 bg-blue-500" href="/dashboard/transactions">
//         Transactions
//       </Link>
//       <Link className="p-3 m-2 bg-blue-500" href="/dashboard/transactions">
//         My Loans (pending)
//       </Link>

//       <Link className="p-3 m-2 bg-blue-500" href="/dashboard/profile">
//         User Profile
//       </Link>
//     </section>

//     <section className="flex items-center justify-center">
//       <Link className="p-3 m-2 bg-blue-500" href="/admin/books">
//         Admin/Books
//       </Link>

//       <Link className="p-3 m-2 bg-blue-500" href="/admin/users">
//         Admin/Users
//       </Link>

//       <Link className="p-3 m-2 bg-blue-500" href="/admin/users/1">
//         Admin/User Detail
//       </Link>

//       <Link className="p-3 m-2 bg-blue-500" href="/admin/transactions">
//         Admin/Transactions
//       </Link>
//     </section>
//   </main>
// );
