import { PlaceholdersAndVanishInputDemo } from "@/components/changingInput"

const Home = async() => {
    let count = 0
    let briefsData = await fetch(`https://www.api.briefsea.com/forum/discussion/threads/pagination/limit?count=${count}`, {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2RldGFpbCI6eyJ1c2VyX2lkIjoiNjcyYzU4N2MyOTljNjJmOWVmMzJmZDJhIiwidXNlck5hbWUiOiIiLCJmaXJzdE5hbWUiOiJZb2dlc2giLCJsYXN0TmFtZSI6IlRhdmV0aGl5YSIsInVzZXJfbmFtZSI6IllvZ2VzaCBUYXZldGhpeWEiLCJlbWFpbCI6InRhdmV0aGl5YXJvY2tzQGdtYWlsLmNvbSIsInR5cGUiOiJmcmVlbGFuY2VyIiwiYXZhdGFyU3JjIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSm1jUE9uUUdLOFY2VDdheVRqOWxxQzFWUVlpSlVoaEVoZkNXVUI5OEQ1clB3aHRnND1zOTYtYyJ9LCJpYXQiOjE3MzA5NjM5MjF9.XBUltFPn7y6k6WocsJnCuGs0h7-hwvtT0M0jgViG2Ko'
      }
    })
    let briefs =  await briefsData.json()
    
  return (
    <div className="h-screen w-full bg-neutral-700 relative flex flex-col items-center ">
        <PlaceholdersAndVanishInputDemo />
      <div className="max-w-2xl p-4">
        {briefs?.map((item: any,idx: number)=>(
          <div className="" key={item?.id}>
            <p className="text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
