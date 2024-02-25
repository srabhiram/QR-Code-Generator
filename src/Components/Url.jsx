/* eslint-disable react/prop-types */

export const Url = (props) => {
  return (
    <>
      <div className="container w-100vw h-100vh flex flex-col items-center justify-center">
        <p className="text-white font-bold font-sans text-xl py-4">
          👉 Generate QR Code with URL 👈
        </p>{" "}
        <form onSubmit={props.function} className="flex flex-col items-center">
          <input
            type="url"
            name="Qrcode"
            className=" mb-2 lg:w-[400px]  h-10 rounded-md block  text-center placeholder-black placeholder-opacity-25 focus:border-2 outline border-amber-500   focus:outline-green-500 focus:border-green-500 ring-0  focus:ring-green-500 overflow-scroll"
            required
            placeholder="Enter your url address"
            value={props.url}
            onChange={(e) => props.seturl(e.target.value)}
          />

          <button
            type="submit"
            value="Generate"
            className="my-3 text-lg bg-green-500 mx-auto items-center hover:bg-green-600 active:bg-green-700 px-4 py-2 font-semibold text-center rounded-lg cursor-pointer"
          >
            Generate{" "}
          </button>
        </form>
        {props.dataurl && (
          <div className=" mt-4 m-3 p-4 bg-black">
            <img src={props.dataurl} />
          </div>
        )}
      </div>
    </>
  );
};
