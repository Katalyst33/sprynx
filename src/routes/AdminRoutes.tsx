import HeaderLayout from "../layouts/HeaderLayout";
import Footer from "../layouts/Footer";
import ProtectedLayouts from "../layouts/ProtectedLayouts";
import AdminLayouts from "../layouts/AdminLayouts";
import NotFoundPage from "../pages/NotFoundPage";

import { Route, Routes } from "react-router-dom";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import XAllPackagesPage from "../pages/admin/XAllPackagesPage";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const AdminRoutes = () => {
  return (
    <>
      {/* sidebar */}

      <div className="flex h-screen">
        <aside className="hidden lg:block w-72 bg-violet-700">
          <h1>Sidebar here</h1>
          <h1>manager Routes</h1>
          <Link
            to="/manager/all-packages"
            className="font-normal transition ease-in-out duration-500 hover:text-blue-800 transform hover:scale-105 text-lg hover:tracking-wide"
          >
            All Packages
          </Link>
        </aside>

        <main className="w-full h-fill">
          <div className="container mx-auto px-2 md:px-0">
            <Routes>
              {/* element={<dashboard />} */}
              <Route path="/" element={<AdminLayouts />}>
                <Route path="/dashboard" element={<AdminDashboardPage />} />
                <Route path="/all-packages" element={<XAllPackagesPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminRoutes;
