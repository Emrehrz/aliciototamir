export default function Footer() {
  return (
    <footer className="mt-auto bg-green rounded-lg shadow ">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-2 gap-4 md:gap-6 md:flex md:items-center md:justify-center">
        <span className="text-sm text-darkBlue font-bold italic sm:text-center mr-auto ">
          Bakımlarınızı geciktirmeyin.
        </span>
        <ul className="flex md:flex-col  items-center  font-medium text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Uğur Usta: 0 541 408 20 16
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
