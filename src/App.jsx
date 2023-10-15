function App() {

  return (
    <div className="px-3 md:px-40 py-52 md:py-40 flex justify-center">
      <div className="flex flex-col bg-[#FFFFFF] w-[344px] md:w-[370px] p-4 rounded-lg gap-3 shadow-md">
        <img src="./cactus.jpg" alt="cactus image" className="rounded-lg" />
        <span className="text-[10px] text-[#883AE1] bg-[#E6D6FC] font-bold rounded-lg w-[58px] flex place-content-center py-[3px] px-2">Design</span>
        <h1 className="text-lg font-bold">Embracing Minimalism</h1>
        <p className="text-sm text-[#6C727F]">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        <span className="border-b -mx-4 mb-2"></span>
        <p className="text-xs text-[#6C727F]">Annie Spratt</p>
      </div>
    </div>
  )
}

export default App
