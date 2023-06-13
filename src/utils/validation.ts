export const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

export const validatePassword = (password: string): boolean => {
    // Criteria: At least 8 characters long, contains at least one uppercase letter and one digit
    const minLength = 8;
    const uppercasePattern = /[A-Z]/;
    const digitPattern = /[0-9]/;

    if (password.length < minLength) {
        return false; // Password is too short
    }

    if (!uppercasePattern.test(password)) {
        return false; // Password does not contain an uppercase letter
    }

    if (!digitPattern.test(password)) {
        return false; // Password does not contain a digit
    }

    return true;
};
