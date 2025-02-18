// import { Outlet } from "react-router-dom";
// import Sidebar from "./../components/Dashboard/Sidebar/Sidebar";

// const DashboardLayout = () => {
//   return (
//     <div className="relative min-h-screen md:flex bg-white">
//       <div className="w-full  md:w-[35%] lg:w-80 bg-white shadow rounded-sm lg:rounded-md border-r border-gray-100 ">
//         <Sidebar></Sidebar>
//       </div>
//       <div className="md:w-[65%] lg:flex-1">
//         <div className="p-5">
//           {/* Outlet for dynamic contents */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { Outlet } from "react-router-dom";
import Sidebar from "./../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white">
      {/* Sidebar (Fixed on Desktop, Normal on Mobile) */}
      <div className="w-full md:w-[35%] lg:w-80 bg-white shadow rounded-sm lg:rounded-md border-r border-gray-100 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main Content (Scrollable Layout) */}
      <div className="md:w-[65%] lg:flex-1 h-screen overflow-y-auto">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
