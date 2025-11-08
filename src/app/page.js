import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content area.</p>
      <Link className="text-[#dfb131]" href="/dashboard">Go to Dashboard</Link>
    </>
  );
}
