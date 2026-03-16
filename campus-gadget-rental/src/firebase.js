// ─── Firebase Config ───────────────────────────────────────────────────────
// Replace these values with your Firebase project credentials
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    query,
    where,
    orderBy,
    serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2nHqp3TnJQBipdTSZNO5sxGGww1HqmOk",
  authDomain: "rental-app-89374.firebaseapp.com",
  projectId: "rental-app-89374",
  storageBucket: "rental-app-89374.appspot.com",
  messagingSenderId: "746884197676",
  appId: "1:746884197676:web:6b65668807c0e5f1e29089"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ─── Auth ──────────────────────────────────────────────────────────────────
export const signUp = async (email, password, name) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await setDoc(doc(db, "profiles", cred.user.uid), {
        uid: cred.user.uid,
        full_name: name,
        email,
        university: "",
        bio: "",
        phone: "",
        avatar_url: "",
        created_at: serverTimestamp(),
    });
    return cred;
};

export const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

export const onAuth = (cb) => onAuthStateChanged(auth, cb);

// ─── Gadgets ───────────────────────────────────────────────────────────────
export const fetchGadgets = async (filters = {}) => {
    let q = collection(db, "gadgets");
    const constraints = [];
    if (filters.category) constraints.push(where("category", "==", filters.category));
    if (filters.available !== undefined) constraints.push(where("available", "==", filters.available));
    constraints.push(orderBy("created_at", "desc"));
    const snap = await getDocs(query(q, ...constraints));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const fetchGadgetById = async (id) => {
    const snap = await getDoc(doc(db, "gadgets", id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const insertGadget = (data) => addDoc(collection(db, "gadgets"), { ...data, created_at: serverTimestamp() });

// ─── Bookings ──────────────────────────────────────────────────────────────
export const fetchMyBookings = async (uid) => {
    const snap = await getDocs(query(collection(db, "bookings"), where("renter_id", "==", uid), orderBy("created_at", "desc")));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const insertBooking = (data) => addDoc(collection(db, "bookings"), { ...data, created_at: serverTimestamp() });

// ─── Profile ───────────────────────────────────────────────────────────────
export const fetchProfile = async (uid) => {
    const snap = await getDoc(doc(db, "profiles", uid));
    return snap.exists() ? snap.data() : null;
};

export const updateUserProfile = (uid, data) => updateDoc(doc(db, "profiles", uid), data);

// ─── Notifications ─────────────────────────────────────────────────────────
export const fetchNotifications = async (uid) => {
    const snap = await getDocs(query(collection(db, "notifications"), where("user_id", "==", uid), orderBy("created_at", "desc")));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ─── Storage ───────────────────────────────────────────────────────────────
export const uploadImage = async (file, path) => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
};
