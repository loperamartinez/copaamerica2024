import { NavBar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
