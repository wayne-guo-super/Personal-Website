import Scene from "@/components/3DScene/Scene";
import Background from "@/app/background";

export default function Home() {
  return (
      <main style={{ width: "100vw", height: "100vh" }}>
        <Scene/>
          <Background/>
      </main>
  );
}