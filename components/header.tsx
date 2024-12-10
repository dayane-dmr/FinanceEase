import { Loader2 } from "lucide-react";

import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { WelcomeMsg } from "@/components/welcome-msg";
import { Filters } from "@/components/filters";

import { UserButtonWrapper } from "@/components/user-button";


export const Header = () => {
    return (
        <header className="bg-[url('/bgHeader.avif')] bg-repeat-round px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <ClerkLoaded>
                        <UserButtonWrapper />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-slate-400" />
                    </ClerkLoading>
                </div>
                <WelcomeMsg />
                <Filters />
            </div>
        </header>
    )
}