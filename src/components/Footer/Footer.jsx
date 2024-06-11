import amazonPayLogo from "../../assets/amazon-pay.png";
import amricanExpressLogo from "../../assets/American-Express-Color.png";
import mastercardPayLogo from "../../assets/mastercard.webp";
import paypalPayLogo from "../../assets/paypal.png";
import googlePlay from "../../assets/get-google-play.png";
import appStore from "../../assets/get-apple-store.png";
export default function Footer() {
  return (
    <>
      <footer className=" mt-[200px] bg-slate-300 text-gray-900 px-2 py-4   dark:text-slate-100 dark:bg-gray-950">
        <div className="mx-auto container">
          <h2 className="text-2xl font-semibold">Get the FreshCart App</h2>
          <p className="my-3">
            We will send you a link, open it on your phone to download the app{" "}
          </p>

          <div className="flex gap-4">
            <input
              type="text"
              className="form-control flex-grow p-3 rounded"
              placeholder="Email...."
            />
            <button className="btn transition-all rounded p-2 bg-main hover:bg-[#0fc80f] font-semibold text-white">app link</button>
          </div>

          <div className="flex flex-wrap justify-between items-center p-2 my-3">
            <div className=" flex flex-wrap w-full mb-2 md:mb-0 md:w-1/2   gap-2 items-center">
              <span className="font-semibold">Payments Partners</span>
              <div className="flex flex-wrap gap-2 items-center">
                <img src={amazonPayLogo} className="w-16" alt="" />
                <img src={amricanExpressLogo} className="w-16" alt="" />
                <img src={mastercardPayLogo} className="w-16" alt="" />
                <img src={paypalPayLogo} className="w-16" alt="" />
              </div>
            </div>
            <div className="flex flex-wrap w-full  md:w-1/2 gap-2 items-center">
              <span className="font-semibold">Get deliveries with FreshCart</span>
              <div className="flex gap-2 items-center">
                <img src={googlePlay} className="w-16" alt="" />
                <img src={appStore} className="w-16" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
