import { PlaceholdersAndVanishInputDemo } from "@/components/changingInput"

const Home = async() => {
    let count = 0
    let briefsData = await fetch('https://www.api.briefsea.com/forum/discussion/threads/pagination/limit?count={count}')
    let briefs =  await blogsData.json()
  return (
    <div className="h-screen w-full bg-neutral-700 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl p-4">
        <PlaceholdersAndVanishInputDemo />
        {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300  text-center font-sans font-bold">
          BS
        </h1> */}
        {briefs.map((item,index)=>{
          <p>{item.name}</p>
        })
      </div>
    </div>
  )
}
export default Home
