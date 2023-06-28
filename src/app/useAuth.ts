import { useAppSelector } from "./hooks";

export function useAuth() {
    const { email, id, token,firstName,lastName } = useAppSelector(state => state.user);
    const { emailGoogle, idGoogle, tokenGoogle, firstNameGoogle, lastNameGoogle } = useAppSelector(state => state.google)
    const emailAu = localStorage.getItem("email");
    const emailGAut = localStorage.getItem("emailGoogle")

    return {
        isAuth: emailAu ? emailAu : emailGAut, // Proverka avtorizovan li on ili net(prevrawaya eqo v bulivuyu znaceniyu)
        email,
        id,
        token,
        firstName,
        lastName,
        emailGoogle,
        idGoogle,
        tokenGoogle,
        firstNameGoogle,
        lastNameGoogle,
    }
}

/// Dlya udobstva raboti s reduxom ya sozdal takoy vew ,ctobi smog vizivat v lyubom kode i uznavat Avtorizovan li etot celovek ili net
/// I prim etom yesli avtorizovan to kakie u neqo yest danniye 