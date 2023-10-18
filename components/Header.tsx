import Image from 'next/image';

function Header() {
  return (
    <header>
    <Image src="/workzen.png" alt="WorkZen Logo" width={300} height={100} className="w-44 md:w-56 pb-10 md:pb-0 object-contain" />
    <div>
      {/*Search Bar*/}
      <form>
        <input type ="text" placeholder="Search" className="border-2 border-gray-300 rounded-lg p-2" />
      </form>
      {/*User Icon*/}
    </div>
    </header>
  )
}

export default Header;