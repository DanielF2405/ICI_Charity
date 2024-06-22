"use client";
import { api } from "~/trpc/react";

export function useTestTrpc() {

    const {data} =  api.post.hello.useQuery({ text: "from tRPC" });
    console.log(data);
        
}