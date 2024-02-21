export default function Menu() {
  return (
    <div className="hidden lg:block absolute top-0 left-0 w-64 h-full bg-[#282D39] z-1">
      <p className="pt-8 pl-8 font-sans text-2xl text-white">Funds Data</p>
      <div className="relative pt-12 pl-12 flex">
        <ul className="flex flex-col space-y-4 text-white">
          <li className="cursor-pointer">Logs</li>
        </ul>
      </div>
    </div>
  );
}
