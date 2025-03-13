import Scene from "@/components/rubiksCube";
import App from "@/app/home/App";

export default function Home() {
  return (
      <main style={{ width: "100vw", height: "100vh" }}>
        <Scene/>
          <div style={{ position: "absolute", top: 0, left: 0, zIndex: 10, width: "100%" }}>
              <App />
          </div>
      </main>
  );
}