import qrCode from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="grid h-screen place-items-center bg-light-gray">
      <div className="relative flex h-[496px] w-[320px] flex-col items-center gap-4 rounded-[20px] bg-white p-4 text-center shadow-sm">
        <div className="mb-2 w-[288px]">
          <img
            src={qrCode}
            alt="Frontend Mentor QR code"
            className="rounded-[10px]"
          />
        </div>
        <h1 className="px-3 text-[22px] font-bold leading-tight text-dark-blue">
          Improve your front-end skills by building projects
        </h1>
        <p className="px-3 text-[15px] leading-tight tracking-[0.01em] text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
        <div className="absolute -bottom-8 text-center text-[11px]">
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
