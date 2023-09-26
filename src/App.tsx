import qrCode from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="bg-light-gray h-screen grid place-items-center">
      <div className="bg-white w-[320px] h-[496px] rounded-[20px] p-4 text-center flex flex-col items-center gap-4 shadow-sm relative">
        <div className="w-[288px] mb-2">
          <img
            src={qrCode}
            alt="Frontend Mentor QR code"
            className="rounded-[10px]"
          />
        </div>
        <h1 className="text-dark-blue font-bold text-xl px-3 text-[22.2px]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grayish-blue text-[15px] px-3 leading-tight tracking-[0.01em]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
        <div className="text-center text-[11px] absolute -bottom-8">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-attribution"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/snguyen56"
            target="_blank"
            className="text-attribution"
          >
            Steven Nguyen
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
