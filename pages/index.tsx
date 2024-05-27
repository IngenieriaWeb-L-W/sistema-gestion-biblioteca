import Link from "next/link";

const Home = () => {
  return (
    <main className="h-screen w-full ">
      <section className="flex items-center justify-center">
        <Link className="p-3 m-2 bg-blue-500" href="/landing">
          Landing
        </Link>
      </section>

      <section className="flex items-center justify-center">
        <Link className="p-3 m-2 bg-blue-500" href="/dashboard">
          Dashboard
        </Link>

        <Link className="p-3 m-2 bg-blue-500" href="/dashboard/books">
          Books
        </Link>

        <Link className="p-3 m-2 bg-blue-500" href="/dashboard/transactions">
          Transactions
        </Link>
        <Link className="p-3 m-2 bg-blue-500" href="/dashboard/transactions">
          My Loans (pending)
        </Link>

        <Link className="p-3 m-2 bg-blue-500" href="/dashboard/profile">
          User Profile
        </Link>
      </section>

      <section className="flex items-center justify-center">
        <Link className="p-3 m-2 bg-blue-500" href="/admin/books">
          Admin/Books
        </Link>

        <Link className="p-3 m-2 bg-blue-500" href="/admin/users">
          Admin/Users
        </Link>

        <Link className="p-3 m-2 bg-blue-500" href="/admin/users/1">
          Admin/User Detail
        </Link>

        <Link className="p-3 m-2 bg-blue-500" href="/admin/transactions">
          Admin/Transactions
        </Link>
      </section>
    </main>
  );
};

export default Home;
