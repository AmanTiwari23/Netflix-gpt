export const checkvalidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    let isNameValid = true;
    if (name !== null) {
        isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    }

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (name !== null && !isNameValid) return "Name is not valid";

    return null;
}