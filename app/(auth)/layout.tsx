// This Layout is used on auth pages that do not have the Navbar


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          {children}
      </main>
    );
  }
  