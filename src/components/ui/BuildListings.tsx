import Build from './Build'

const BuildListings = ({ title }: { title: string }) => {
  return (
    <main className="h-screen w-[50rem] bg-darker p-16">
      <div className="w-[20rem] bg-darkest text-center py-2 mx-auto">
        <h1 className="text-xl font-thin">{title} Builds</h1>
      </div>

      <div className="w-[40rem] h-[90%] mx-auto flex flex-col bg-darkest px-6 pt-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-x-4 text-sm mb-6">
          <input
            className="w-[15rem] h-10 bg-darker border border-amber-400 px-2 py-1 rounded"
            placeholder="Search by title, author, or tags"
            type="text"
          />
          <div className="flex gap-x-4">
            <select
              className="w-[5rem] h-10 bg-dark hover:bg-light px-3 rounded border-r-8 border-transparent"
              defaultValue="disabled"
              required
            >
              <option value="disabled" disabled>
                Sort
              </option>
              <option value="newest">Newest</option>
              <option value="newest">Popularity</option>
              <option value="newest">Rating</option>
            </select>

            <button className="h-10 bg-dark hover:bg-light px-3 rounded">
              Filters
            </button>
          </div>
        </div>

        {/* Builds */}
        <div className="space-y-4 h-full overflow-y-auto -mx-6 px-6 pb-6">
          <Build />
        </div>
      </div>
    </main>
  )
}

export default BuildListings
