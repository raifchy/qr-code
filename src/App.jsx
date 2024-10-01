export default function App() {
  return (
    <>
      <main className=" bg-slate-200 h-screen flex flex-col justify-center">
        <div className="w-72 h-fit bg-white p-3  mx-auto rounded-2xl shadow-xl">
          <img
            src="../public/image-qr-code.png"
            className=" rounded-lg"
            alt=""
          />
          <div className="p-4 text-center">
            <h1 className="mb-3 leading-6 font-outfit font-outline font-bold text-slate-900 text-lg">
              Improve your front-end skills by building projects
            </h1>
            <p className="font-outfit text-sm text-slate-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
