import { getSession } from "next-auth/react";
import React from "react";

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
    console.log("Session=>", session);
    if (!session) {
        return {
            redirect:{destination:'/signin'}
        }
    }

  return {
    props: {},
  };
}
