export function renderFooter() {
    document.getElementById("footer").innerHTML = `
    <footer class="bg-slate-900 border-t border-white/5 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
              </div>
              <span class="font-bold text-white text-base">Campus<span class="text-blue-400">Rent</span></span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed max-w-xs">Rent gadgets from fellow students. Save money, earn money, and keep campus tech accessible for everyone.</p>
            <div class="flex gap-3 mt-5">
              <a href="#" class="w-8 h-8 bg-white/5 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.557z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 bg-white/5 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-purple-400 transition">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="../index.html" class="text-slate-400 hover:text-white transition">Home</a></li>
              <li><a href="marketplace.html" class="text-slate-400 hover:text-white transition">Browse Gadgets</a></li>
              <li><a href="list-gadget.html" class="text-slate-400 hover:text-white transition">List a Gadget</a></li>
              <li><a href="auth.html" class="text-slate-400 hover:text-white transition">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold text-sm mb-4">Support</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#" class="text-slate-400 hover:text-white transition">How it Works</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition">Safety Tips</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-slate-500 text-xs">&copy; 2026 CampusRent. Built for students, by students.</p>
          <p class="text-slate-600 text-xs">Powered by Firebase &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>`;
}
