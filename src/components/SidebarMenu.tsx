'use client'
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebarui";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconLayoutDashboardFilled,
  IconBrandOkRu

} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  titile:string;
  phone?: number
}

export default function SidebarMenu({phone,titile} : Props) {
  console.log(titile, 'phone')
  const links = [
    {
      label: "All Briefs",
      href: "/",
      icon: (
        <IconLayoutDashboardFilled className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "My Briefs",
      href: "/my-briefs",
      icon: (
        <IconBrandOkRu className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/sigin",
      icon: (
        <IconArrowLeft className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
  className={cn(
    `flex flex-col ${open ? 'w-60' : 'w-16'} transition-all duration-300
    dark:bg-neutral-800 h-screen dark:border-neutral-700 overflow-hidden`
  )}
>
  <Sidebar open={open} setOpen={setOpen}>
    <SidebarBody className="justify-between gap-10">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {open ? <Logo /> : 'BS'}
        <div className="mt-8 flex flex-col gap-2">
          {links.map((link, idx) => (
            <SidebarLink key={idx} link={link} />
          ))}
        </div>
      </div>
    </SidebarBody>
  </Sidebar>
</div>

  )
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Briefsea
      </motion.span>
    </Link>
  );
};