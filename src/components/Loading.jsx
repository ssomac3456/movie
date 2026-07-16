import { ProgressBar } from "react-loader-spinner";

export default function loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
