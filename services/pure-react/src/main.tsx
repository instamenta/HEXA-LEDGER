import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
    UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) throw new Error("Missing Clerk Publishable Key")

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function PublicPage() {
    return (
        <>
            <h1>Public page</h1>
            <a href="/protected">Go to protected page</a>
        </>
    );
}

function ProtectedPage() {
    return (
        <>
            <h1>Protected page</h1>
            <UserButton />
        </>
    );
}
function ClerkProviderWithRoutes() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to) => navigate(to)}
        >
            <Routes>
                <Route path="/" element={<PublicPage />} />
                <Route
                    path="/sign-in/*"
                    element={<SignIn routing="path" path="/sign-in" />}
                />
                <Route
                    path="/sign-up/*"
                    element={<SignUp routing="path" path="/sign-up" />}
                />
                <Route
                    path="/protected"
                    element={
                        <>
                            <SignedIn>
                                <ProtectedPage />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
            </Routes>
        </ClerkProvider>
    );
}



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ClerkProviderWithRoutes />
        </BrowserRouter>
    </React.StrictMode>,
)
