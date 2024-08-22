import "./globals.css";

export const metadata = {
  title: "NAID",
  description: "Un accesorio que puede a llegar a salvar su vida!",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
