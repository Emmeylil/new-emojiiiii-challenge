import type { iModal } from "$lib/interface";
import { createPersistentStore } from "@toolsntuts/utils";
import { writable } from "svelte/store";

const credentialStore = createPersistentStore<{
    email: string;
    username: string;
}>('emoji-challenge-credentials', {
    email: '',
    username: ''
});
const modalStore = writable<iModal>({
    open: false,
    type: "login"
})

const showGameStore = writable<boolean>(false)

export { modalStore, credentialStore, showGameStore }