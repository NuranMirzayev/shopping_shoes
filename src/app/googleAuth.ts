import { useAppSelector } from "./hooks"


export function googleAuth() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {emailGoogle, idGoogle, tokenGoogle, firstNameGoogle, lastNameGoogle } = useAppSelector(state => state.google)

    const emailGAut = localStorage.getItem("emailGoogle")


    return {
        isAuth: !!emailGAut, // Proverka avtorizovan li on ili net(prevrawaya eqo v bulivuyu znaceniyu)
        emailGoogle,
        idGoogle,
        tokenGoogle,
        firstNameGoogle,
        lastNameGoogle,
    }
}

/// Dlya udobstva raboti s reduxom ya sozdal takoy vew ,ctobi smog vizivat v lyubom kode i uznavat Avtorizovan li etot celovek ili net
/// I prim etom yesli avtorizovan to kakie u neqo yest danniye 