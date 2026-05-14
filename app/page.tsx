export default function Home() {
  return (
    <main className="flex h-screen bg-[#0f0f0f] text-white">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-4">
        <h1 className="text-2xl font-bold mb-6">
          Yuvaraj AI
        </h1>

        <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:opacity-90">
          + New Chat
        </button>

        <div className="mt-6 space-y-2">
          <div className="p-3 rounded-lg bg-[#1a1a1a] cursor-pointer hover:bg-[#222]">
            First Conversation
          </div>

          <div className="p-3 rounded-lg bg-[#1a1a1a] cursor-pointer hover:bg-[#222]">
            AI Website Ideas
          </div>
        </div>
      </aside>

      {/* Chat Area */}
      <section className="flex-1 flex flex-col">
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          <div className="flex justify-end">
            <div className="bg-white text-black px-4 py-3 rounded-2xl max-w-xl">
              Hello AI
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-[#1f1f1f] px-4 py-3 rounded-2xl max-w-xl">
              Hello Yuvaraj 👋
            </div>
          </div>

        </div>

        {/* Input Box */}
        <div className="border-t border-gray-800 p-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 outline-none"
            />

            <button className="bg-white text-black px-6 rounded-xl font-semibold">
              Send
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}