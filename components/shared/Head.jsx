import Head from "next/head";

export const SeoMetadata = ({ title, desc }) => {
  return (
      <Head>
        <title>{ title || "Fazle Rabbi - Web Developer"}</title>
        <meta
          name="description"
          content={desc || ""}
        />
      </Head>
  )
}
