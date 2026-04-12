// Floating instant chat widget — inject into any page
export function renderChat() {
    const user = JSON.parse(localStorage.getItem('cgr_user') || 'null');
    const userName = user?.name || 'You';

    const html = `
    <!-- Chat Button -->
    <button id="chat-toggle"
        class="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
        aria-label="Open chat">
        <svg id="chat-icon" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg id="close-icon" class="w-6 h-6 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <!-- Unread badge -->
        <span id="chat-badge" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">1</span>
    </button>

    <!-- Chat Window -->
    <div id="chat-window"
        class="fixed bottom-24 right-6 z-[9998] w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 hidden flex-col"
        style="background:#0f172a;max-height:480px">

        <!-- Header -->
        <div class="flex items-center gap-3 px-4 py-3 border-b border-white/5" style="background:#1e293b">
            <div class="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">CR</div>
            <div class="flex-1">
                <p class="text-sm font-semibold text-white">CampusRent Support</p>
                <div class="flex items-center gap-1.5">
                    <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <p class="text-xs text-slate-400">Online · Replies instantly</p>
                </div>
            </div>
            <button id="chat-contacts-btn" class="text-slate-400 hover:text-white transition" title="Contacts">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </button>
        </div>

        <!-- Contacts panel (hidden by default) -->
        <div id="contacts-panel" class="hidden border-b border-white/5" style="background:#1e293b">
            <p class="text-xs text-slate-500 uppercase tracking-widest px-4 pt-3 pb-2">Chat with Owner</p>
            <div id="contacts-list" class="space-y-1 px-2 pb-2 max-h-36 overflow-y-auto"></div>
        </div>

        <!-- Messages -->
        <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-3" style="min-height:200px;max-height:280px">
            <!-- Welcome message -->
            <div class="flex gap-2 items-end">
                <div class="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">CR</div>
                <div class="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%]">
                    <p class="text-sm text-slate-200">Hi ${userName}! 👋 How can I help you today?</p>
                    <p class="text-xs text-slate-600 mt-1">Just now</p>
                </div>
            </div>
        </div>

        <!-- Quick replies -->
        <div id="quick-replies" class="px-3 pb-2 flex gap-2 flex-wrap">
            <button class="quick-reply text-xs px-2.5 py-1.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition">How to book?</button>
            <button class="quick-reply text-xs px-2.5 py-1.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition">Track my order</button>
            <button class="quick-reply text-xs px-2.5 py-1.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition">Return policy</button>
        </div>

        <!-- Input -->
        <div class="flex items-center gap-2 px-3 py-3 border-t border-white/5" style="background:#1e293b">
            <input type="text" id="chat-input" placeholder="Type a message..."
                class="flex-1 bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500/50 transition" />
            <button id="chat-send"
                class="w-9 h-9 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center transition flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    // ── Auto-replies ──────────────────────────────────────────────────
    const autoReplies = {
        'how to book': 'To book a gadget: browse the marketplace → click a gadget → select your dates → confirm booking → pay securely. Easy! 🎉',
        'track': 'Go to your Dashboard → My Bookings to see the status of all your rentals in real time.',
        'return': 'Return the gadget by the end date shown in your booking. The owner will mark it complete and your deposit will be refunded.',
        'payment': 'We support UPI, Credit/Debit Card, and Net Banking. All payments are 256-bit SSL encrypted.',
        'cancel': 'You can cancel within 2 hours of booking for a full refund. After that, cancellation charges may apply.',
        'deposit': 'The security deposit is fully refunded once the gadget is returned in its original condition.',
        'list': 'Go to "List Gadget" from the navbar, fill in your gadget details, set a price in ₹, drop a map pin, and submit!',
        'default': "Thanks for your message! Our team will get back to you shortly. For urgent help, check the FAQ or visit your Dashboard. 😊",
    };

    function getReply(msg) {
        const m = msg.toLowerCase();
        for (const [key, val] of Object.entries(autoReplies)) {
            if (key !== 'default' && m.includes(key)) return val;
        }
        return autoReplies.default;
    }

    function addMessage(text, sender = 'bot', time = 'Just now') {
        const msgs = document.getElementById('chat-messages');
        if (sender === 'user') {
            msgs.innerHTML += `
                <div class="flex gap-2 items-end justify-end">
                    <div class="bg-blue-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[85%]">
                        <p class="text-sm text-white">${text}</p>
                        <p class="text-xs text-blue-300 mt-1">${time}</p>
                    </div>
                </div>`;
        } else {
            msgs.innerHTML += `
                <div class="flex gap-2 items-end">
                    <div class="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">CR</div>
                    <div class="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%]">
                        <p class="text-sm text-slate-200">${text}</p>
                        <p class="text-xs text-slate-600 mt-1">${time}</p>
                    </div>
                </div>`;
        }
        msgs.scrollTop = msgs.scrollHeight;
    }

    function sendMessage(text) {
        if (!text.trim()) return;
        const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        addMessage(text, 'user', now);
        document.getElementById('chat-input').value = '';
        document.getElementById('quick-replies').classList.add('hidden');

        // Typing indicator
        const msgs = document.getElementById('chat-messages');
        msgs.innerHTML += `<div id="typing-indicator" class="flex gap-2 items-end">
            <div class="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">CR</div>
            <div class="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2">
                <div class="flex gap-1 items-center h-4">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay:0ms"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay:150ms"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay:300ms"></div>
                </div>
            </div>
        </div>`;
        msgs.scrollTop = msgs.scrollHeight;

        setTimeout(() => {
            document.getElementById('typing-indicator')?.remove();
            addMessage(getReply(text), 'bot', new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
    }

    // Toggle chat window
    document.getElementById('chat-toggle').addEventListener('click', () => {
        const win = document.getElementById('chat-window');
        const isOpen = !win.classList.contains('hidden');
        win.classList.toggle('hidden');
        win.style.display = isOpen ? 'none' : 'flex';
        win.style.flexDirection = 'column';
        document.getElementById('chat-icon').classList.toggle('hidden', !isOpen);
        document.getElementById('close-icon').classList.toggle('hidden', isOpen);
        document.getElementById('chat-badge').classList.add('hidden');
        if (!isOpen) document.getElementById('chat-input').focus();
    });

    // Send on button click
    document.getElementById('chat-send').addEventListener('click', () => {
        sendMessage(document.getElementById('chat-input').value);
    });

    // Send on Enter
    document.getElementById('chat-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage(document.getElementById('chat-input').value);
    });

    // Quick replies
    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', () => sendMessage(btn.textContent));
    });

    // Contacts panel toggle
    document.getElementById('chat-contacts-btn').addEventListener('click', () => {
        const panel = document.getElementById('contacts-panel');
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden')) {
            // Load sample owners as contacts
            const { sampleGadgets } = window.__cgr__ || {};
            const owners = sampleGadgets
                ? [...new Map(sampleGadgets.map(g => [g.owner, g])).values()].slice(0, 5)
                : [];
            const list = document.getElementById('contacts-list');
            if (owners.length) {
                list.innerHTML = owners.map(g => `
                    <button class="contact-btn w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-700/50 transition text-left"
                            data-owner="${g.owner}">
                        <div class="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">${g.owner.charAt(0)}</div>
                        <div>
                            <p class="text-xs font-medium text-white">${g.owner}</p>
                            <p class="text-xs text-slate-500">${g.category} owner</p>
                        </div>
                        <div class="ml-auto w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </button>`).join('');
                list.querySelectorAll('.contact-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        panel.classList.add('hidden');
                        addMessage(`You are now chatting with ${btn.dataset.owner}. Say hi! 👋`, 'bot');
                    });
                });
            } else {
                list.innerHTML = `<p class="text-xs text-slate-500 px-2 py-2">No contacts available.</p>`;
            }
        }
    });
}
