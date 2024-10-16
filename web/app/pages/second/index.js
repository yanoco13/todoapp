import { useRouter } from "next/router";

function Second() {
  const router = useRouter();
  return (
    <div>
      <h1>Second</h1>
      <button
        onClick={() => {
          router.back();
        }}
      >
        戻る
      </button>
    </div>
  );
}

export default Second;