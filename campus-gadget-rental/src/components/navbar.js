export function renderNavbar(activePage = "") {
    const user = JSON.parse(localStorage.getItem("cgr_user") || "null");

    const mapLink = `<a href="map.html" class="nav-link text-sm flex items-center gap-1.5 ${activePage === "map" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}">
    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
    Map
  </a>`;

    const authLinks = user
        ? `<a href="marketplace.html" class="nav-link text-sm ${activePage === "marketplace" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}">Browse</a>
       ${mapLink}
       <a href="dashboard.html" class="nav-link text-sm ${activePage === "dashboard" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}">Dashboard</a>
       <a href="list-gadget.html" class="nav-link text-sm ${activePage === "list" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}">List Gadget</a>
       <a href="profile.html" class="flex items-center gap-2 text-sm ${activePage === "profile" ? "text-white font-semibold" : "text-slate-300 hover:text-white"}">
         <div class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">${(user.name || "U").charAt(0).toUpperCase()}</div>
         ${user.name?.split(" ")[0] || "Profile"}
       </a>
       <button id="logout-btn" class="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg transition border border-white/10">Logout</button>`
        : `<a href="marketplace.html" class="text-sm text-slate-300 hover:text-white transition">Browse</a>
       ${mapLink}
       <a href="auth.html" class="text-sm text-slate-300 hover:text-white transition">Login</a>
       <a href="auth.html?mode=signup" class="text-sm bg-blue-500 hover:bg-blue-400 text-white px-4 py-1.5 rounded-lg transition font-medium">Sign Up</a>`;

    const mobileLinks = user
        ? `<a href="marketplace.html" class="block py-2 text-sm text-slate-300 hover:text-white">Browse</a>
       <a href="map.html" class="block py-2 text-sm text-slate-300 hover:text-white">🗺️ Map View</a>
       <a href="dashboard.html" class="block py-2 text-sm text-slate-300 hover:text-white">Dashboard</a>
       <a href="list-gadget.html" class="block py-2 text-sm text-slate-300 hover:text-white">List Gadget</a>
       <a href="profile.html" class="block py-2 text-sm text-slate-300 hover:text-white">Profile</a>
       <button id="logout-btn-mobile" class="block w-full text-left py-2 text-sm text-red-400 hover:text-red-300">Logout</button>`
        : `<a href="marketplace.html" class="block py-2 text-sm text-slate-300 hover:text-white">Browse</a>
       <a href="map.html" class="block py-2 text-sm text-slate-300 hover:text-white">🗺️ Map View</a>
       <a href="auth.html" class="block py-2 text-sm text-slate-300 hover:text-white">Login</a>
       <a href="auth.html?mode=signup" class="block py-2 text-sm text-blue-400 font-medium">Sign Up</a>`;

    document.getElementById("navbar").innerHTML = `
    <nav class="bg-slate-900 border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="../index.html" class="flex items-center gap-2.5 group">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
            </div>
            <span class="font-bold text-white text-base tracking-tight">Campus<span class="text-blue-400">Rent</span></span>
          </a>
          <div class="hidden md:flex items-center gap-6">${authLinks}</div>
          <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden border-t border-white/5 py-3">${mobileLinks}</div>
      </div>
    </nav>`;

    document.getElementById("mobile-menu-btn")?.addEventListener("click", () => {
        document.getElementById("mobile-menu").classList.toggle("hidden");
    });

    const doLogout = () => {
        localStorage.removeItem("cgr_user");
        window.location.href = "../index.html";
    };
    document.getElementById("logout-btn")?.addEventListener("click", doLogout);
    document.getElementById("logout-btn-mobile")?.addEventListener("click", doLogout);
}
