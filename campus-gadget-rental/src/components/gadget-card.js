import { inr } from '../data/sample-gadgets.js';

export function createGadgetCard(gadget, linkPrefix = "") {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<svg class="w-3 h-3 ${i < Math.floor(gadget.rating) ? "text-yellow-400" : "text-slate-600"}" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>`
  ).join("");

  return `
    <div class="bg-slate-800 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col">
      <div class="relative overflow-hidden h-44">
        <img src="${gadget.images[0]}" alt="${gadget.name}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <span class="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${gadget.available ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}">
          ${gadget.available ? "● Available" : "● Rented"}
        </span>
        <span class="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
          ${gadget.category}
        </span>
      </div>
      <div class="p-4 flex flex-col flex-1">
        <h3 class="font-semibold text-white text-sm mb-1.5 truncate">${gadget.name}</h3>
        <div class="flex items-center gap-1 mb-2">
          ${stars}
          <span class="text-xs text-slate-400 ml-1">${gadget.rating} <span class="text-slate-600">(${gadget.reviews})</span></span>
        </div>
        <p class="text-xs text-slate-400 mb-4 line-clamp-2 flex-1">${gadget.description}</p>
        <div class="flex items-center justify-between mt-auto">
          <div>
            <span class="text-blue-400 font-bold text-lg">${inr(gadget.price_per_day)}</span>
            <span class="text-slate-500 text-xs">/day</span>
          </div>
          <a href="${linkPrefix}gadget-details.html?id=${gadget.id}"
            class="text-xs font-medium px-4 py-2 rounded-lg transition ${gadget.available ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-slate-700 text-slate-500 cursor-not-allowed pointer-events-none"}">
            ${gadget.available ? "Rent Now" : "Unavailable"}
          </a>
        </div>
        <p class="text-xs text-slate-600 mt-2.5 pt-2.5 border-t border-white/5">
          Deposit: <span class="text-slate-500">${inr(gadget.deposit)}</span> · <span class="text-slate-500">${gadget.condition}</span>
        </p>
        ${gadget.location ? `<p class="text-xs text-slate-600 mt-1 flex items-center gap-1">
          <svg class="w-3 h-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="truncate text-slate-500">${gadget.location}</span>
        </p>` : ''}
      </div>
    </div>`;
}
