type PageProps = {
    searchParams : Promise<{
        catagory ?: string;
    }>
};

async function page({searchParams}: PageProps) {
    const {catagory } =await searchParams;
  return (
    <>
    <div> product page</div>
    <p>category: {catagory ?? "All"}</p>
   
    </>
  )
}

export default page