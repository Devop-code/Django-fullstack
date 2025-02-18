import React from 'react'

const page = () => {
  return (
<div className="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5 m-0">
  <div className="border shadow-teal-300 shadow-md max-w-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">
    <h1 className="text-4xl font-mono font-extrabold py-3">Task Manager FullStack</h1>
    <ul className="list-disc text-lg px-6">
      <li>Everything here works just like it does when you're running Tailwind CSS locally.</li>
      <li>The preview updates in real-time as you code.</li>
      <li>Save and share your components with the community.</li>
    </ul>
  </div>
</div>
  )
}

export default page