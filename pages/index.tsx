import Link from "next/link";

const Home = () => {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <Link className="p-3 m-2 bg-blue-500" href="/dashboard">
        Dashboard
      </Link>

      <Link className="p-3 m-2 bg-blue-500" href="/admin/books">
        Books
      </Link>

      <Link className="p-3 m-2 bg-blue-500" href="/admin/users">
        Users
      </Link>

      <Link className="p-3 m-2 bg-blue-500" href="/admin/users/1">
        User Detail
      </Link>

      <Link className="p-3 m-2 bg-blue-500" href="/admin/transactions">
        Transactions
      </Link>
    </main>
  );
};

export default Home;
