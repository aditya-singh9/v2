export default function isEmail(email) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = regex.test(email);
    return isValid;
}