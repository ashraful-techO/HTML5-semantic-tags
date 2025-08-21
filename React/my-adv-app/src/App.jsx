// src/App.jsx
import { useState, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Login from "./Login";
import { getToken } from "./auth";
import ErrorFallback from "./ErrorFallback";

const Profile = lazy(() => import("./Profile"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  return (
    <div>
      <h1>Mini Project 🚀 (Functional)</h1>

      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setIsLoggedIn(false)}
        >
          <Suspense fallback={<p>Loading profile....</p>}>
            <Profile />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
export default App;
