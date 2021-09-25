import DocNavigation from "../components/DocNavigation";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <DocNavigation />
      <div className="flyaway-page">
        <main className="flyaway-home">
          <div className="flyaway-home-section">
            <div className="flyaway-home-titles">
              <h2>Make CSS easy !</h2>
              <p>Create your website interface with pre-build components</p>
            </div>
            <div className="flyaway-starter">
              <button id="flyaway-getstarted">GET STARTED</button>
              <button id="flyaway-documentation">DOCUMENTATION</button>
            </div>
          </div>
          <div className="flyaway-home-picture"></div>
        </main>
      </div>
    </>
  )
}
