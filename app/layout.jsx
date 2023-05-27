import "@styles/globals.css";

export const metadata = {
  title: "Nyareh",
  description: "Temukan dan Bagikan petunjuk AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;