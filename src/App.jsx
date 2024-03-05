import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {

  return (
    <Flowbite>

      <div className='w-max-full h-screen container dark:bg-slate-800'>
      <DarkThemeToggle />
          <p className='font-bold text-4xl dark:text-white'>Welcome to my project</p>
      </div>
    </Flowbite>
  )
}

export default App
