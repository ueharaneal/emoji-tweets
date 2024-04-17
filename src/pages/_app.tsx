import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const isAppRouter = router === useRouter();
  return (
    <ClerkProvider>
        <main className={`font-sans ${inter.variable}`}>
          <p>{isAppRouter ? "Using App Router" : "Using Page Router"}</p>
          <Component {...pageProps} />
        </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
