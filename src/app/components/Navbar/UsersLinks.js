import Link from "next/link";

const UsersLinks = () => {
  return (
    <div className="space-x-8 text-white border-none">
      <Link href="/auth/SignIn">
        <button>Sign In</button>
      </Link>
      <Link href="/auth/SignUp">
        <button className="bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-400">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default UsersLinks;
