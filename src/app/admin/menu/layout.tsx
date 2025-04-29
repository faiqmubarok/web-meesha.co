"use client";

import { useRouter } from "next/navigation"; // Tambahkan useRouter
import { useEffect } from "react";
import { AppSidebar } from "@/components/pages/admin/sidebar/SidebarAdmin";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Paksa update state saat URL berubah
  useEffect(() => {}, [router]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="justify-between flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children} {/* Pastikan ini benar-benar menerima perubahan halaman */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
