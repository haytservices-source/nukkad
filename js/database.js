import {
    db,
    ref,
    push,
    set,
    get,
    update,
    remove,
    onValue
} from "./firebase.js";

const vendorsRef = ref(db, "vendors");

// Add Vendor
export async function addVendor(vendor) {
    const newVendor = push(vendorsRef);

    await set(newVendor, {
        ...vendor,
        status: "pending",
        createdAt: Date.now()
    });

    return newVendor.key;
}

// Listen to Vendors
export function listenVendors(callback) {
    onValue(vendorsRef, (snapshot) => {
        const data = snapshot.val() || {};

        const vendors = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
        }));

        callback(vendors);
    });
}

// Update Vendor
export async function updateVendor(id, values) {
    await update(ref(db, "vendors/" + id), values);
}

// Delete Vendor
export async function deleteVendor(id) {
    await remove(ref(db, "vendors/" + id));
}

// Get Vendors Once
export async function getVendors() {
    const snapshot = await get(vendorsRef);

    if (!snapshot.exists())
        return [];

    const data = snapshot.val();

    return Object.keys(data).map(key => ({
        id: key,
        ...data[key]
    }));
}
