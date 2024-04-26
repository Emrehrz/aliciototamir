export default function LocationInfo() {
  return (
    <div className=" flex flex-col gap-2 bg-lightGreen p-8">
      <h2 className="text-2xl font-bold mb-2 shadow-sm w-fit ">
        Dükkanın Konumu
      </h2>
      <iframe
        className="rounded-md mb-4 "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5940768812056!2d37.3882603!3d36.9956214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531dd4c6aa10f37%3A0xdaef831cd045f70a!2zQWzEsWPEsSBPdG8gVGFtaXIgQmFrxLFtIFNlcnZpc2k!5e0!3m2!1str!2str!4v1714158821791!5m2!1str!2str"
        width="300"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h2 className="text-xl text-darkBlue">Dükkan Adresi:</h2>
      <p className="font-semibold">
        {" "}
        Mavikent, Karataş Sanayi Sitesi, 135022 Nolu Cd No:116/A
      </p>
      <hr className="w-48 h-1 mx-auto my-2 border-0 rounded md:my-10 bg-gray-700"></hr>
      <h2 className="text-xl">Çalışma Saatleri:</h2>
      <p className="font-semibold">Pazartesi - Cuma: 8:00 - 19:00</p>
    </div>
  );
}
