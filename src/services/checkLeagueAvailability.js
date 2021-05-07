// Так как в бесплатной версии API не все лиги доступны

export default function checkLeagueAvailability(code) {
    switch (code) {
        case "BSA":
            return true;
        case "PL":
            return true;
        case "ELC":
            return true;
        case "CL":
            return true;
        case "EC":
            return true;
        case "FL1":
            return true;
        case "BL1":
            return true;
        case "SA":
            return true;
        case "DED":
            return true;
        case "PPL":
            return true;
        case "PD":
            return true;
        case "WC":
            return true;
        default:
            return false
    }
}