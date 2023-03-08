import Head from "next/head";
import Navbar from "./navbar";
import styled from "styled-components";
import HomepageContent from "./HomepageContent";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Shop Manager | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Body />
    </>
  );
};

function Body() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    function gotoSignup() {
      router.push("/signup");
    }

    if (!session) {
      gotoSignup();
    }
  });

  return (
    <BodyContainer>
      <Navbar />

      <HomepageContent />
    </BodyContainer>
  );
}

export default Home;
