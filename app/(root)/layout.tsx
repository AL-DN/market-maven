// This Layout is only used on pages that have the Navbar

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
        NAVBAR
    </main>
  );
}
