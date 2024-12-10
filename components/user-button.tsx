'use client';

import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const UserButtonWrapper = () => {
    return (
        <>
            <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
            <ClerkLoading>
                <Loader2 className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
        </>
    );
};
