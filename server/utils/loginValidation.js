function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const loginValidation = (req, res, next) => {
    const { username, email, password, role } = req.body;

    // Check if all required fields are present
    const isDataPresent = username && email && password && role;

    // Validate email format
    const isEmailValid = isValidEmail(email);

    if (isDataPresent && isEmailValid) {
        next();
    } else {
        const errors = [];

        // Check which fields are missing
        if (!username) errors.push('Username is missing');
        if (!email) errors.push('Email is missing');
        if (!password) errors.push('Password is missing');
        if (!role) errors.push('Role is missing');

        // Check if the email is in a valid format
        if (email && !isEmailValid) errors.push('Invalid email format');

        res.status(400).json({ error: 'Invalid data', details: errors });
    }
};

module.exports = loginValidation;
