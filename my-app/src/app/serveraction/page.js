import fs from "fs/promises"

function ServerAction (){
    const sumbitAction = async(e)=>{
        "use server"
        fs.writeFile("vishu.text","hello my name is vishu")
      }
    return(
        <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form action={sumbitAction} className="main-container bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">User Form</h1>

        {/* Name Input */}
        <div className="input-group flex flex-col mb-4">
          <label htmlFor="name" className="text-sm font-medium mb-2">
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className="border rounded-md text-black p-2 w-full focus:outline-blue-500 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Address Input */}
        <div className="input-group flex flex-col mb-4">
          <label htmlFor="add" className="text-sm font-medium mb-2">
            Address
          </label>
          <input
            name="add"
            id="add"
            type="text"
            className="border rounded-md text-black p-2 w-full focus:outline-blue-500 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your address"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </main>

    )
}
export default ServerAction